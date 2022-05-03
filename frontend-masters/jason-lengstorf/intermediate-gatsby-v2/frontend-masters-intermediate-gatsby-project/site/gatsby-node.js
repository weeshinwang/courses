const fetch = require('node-fetch');
const { createRemoteFileNode } = require('gatsby-source-filesystem');
const slugify = require('slugify');

const authors = require('./src/data/authors.json');
const books = require('./src/data/books.json');

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode, createTypes } = actions;

  createTypes(`
    type Author implements Node {
      books: [Book!]! @link(from: "slug" by: "author.slug")
    }
    type Book implements Node {
      author: Author! @link(from: "author" by: "slug")
    }
  `);

  authors.forEach((author) => {
    createNode({
      ...author,
      id: createNodeId(`author-${author.slug}`),
      parent: null,
      children: [],
      internal: {
        type: 'Author',
        content: JSON.stringify(author),
        contentDigest: createContentDigest(author),
      },
    });
  });

  books.forEach((book) => {
    createNode({
      ...book,
      id: createNodeId(`book-${book.isbn}`),
      parent: null,
      children: [],
      internal: {
        type: 'Book',
        content: JSON.stringify(book),
        contentDigest: createContentDigest(book),
      },
    });
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  createPage({
    path: '/custom',
    component: require.resolve('./src/templates/custom.js'),
    context: {
      title: 'A Custom Page!',
      meta: {
        description: 'A custom page with context.',
      },
    },
  });

  const result = await graphql(`
    query GetBooks {
      allBook {
        nodes {
          id
          series
          name
        }
      }
    }
  `);

  const books = result.data.allBook.nodes;

  books.forEach((book) => {
    const bookSlug = slugify(book.name, { lower: true });

    if (book.series === null) {
      createPage({
        path: `/book/${bookSlug}`,
        component: require.resolve('./src/templates/book.js'),
        context: {
          id: book.id,
        },
      });
    } else {
      const seriesSlug = slugify(book.series, { lower: true });

      createPage({
        path: `/book/${seriesSlug}/${bookSlug}`,
        component: require.resolve('./src/templates/book.js'),
        context: {
          id: book.id,
        },
      });
    }
  });
};

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions;

  function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    for (let i = start; i < end; i += step) {
      yield i;
    }
  }
  let index = makeRangeIterator(0, 5);

  const resolvers = {
    Book: {
      buyLink: {
        type: 'String',
        resolve: (source) =>
          `https://www.powells.com/searchresults?keyword=${source.isbn}`,
      },
      openLibImgUrl: {
        type: 'String',
        resolve: async (source) => {
          const response = await fetch(
            `https://openlibrary.org/isbn/${source.isbn}.json`,
            { agent: new HttpsProxyAgent('http://127.0.0.1:8889') },
          );
          if (!response.ok) {
            reporter.warn(
              `Error loading details about ${source.name} — got ${response.status} ${response.statusText}`,
            );
            return null;
          }

          const { covers } = await response.json();
          return `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`;
        },
      },
      cover: {
        type: 'File',
        resolve: async () => {
          // const response = await fetch(
          //   `https://openlibrary.org/isbn/${source.isbn}.json`,
          //   { agent: new HttpsProxyAgent('http://127.0.0.1:8889') },
          // );
          // if (!response.ok) {
          //   reporter.warn(
          //     `Error loading details about ${source.name} — got ${response.status} ${response.statusText}`,
          //   );
          //   return null;
          // }

          const covers = [
            's28365611',
            's28942025',
            's29522651',
            's30617501',
            's27980882',
          ];

          let i = index.next().value;
          if (!i) {
            index = 0;
            index = makeRangeIterator(0, 5);
            i = index.next().value;
          }

          const imgUrl = `https://img2.doubanio.com/view/subject/s/public/${covers[i]}.jpg`;
          console.log(imgUrl);

          // const { covers } = await response.json();

          // url: `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`,

          // url: `https://img2.doubanio.com/view/subject/s/public/${covers}[0].jpg`,

          if (covers.length) {
            return createRemoteFileNode({
              url: imgUrl,
              store,
              cache,
              createNode,
              createNodeId,
              reporter,
            });
          } else {
            return null;
          }
        },
      },
    },
  };

  createResolvers(resolvers);
};
