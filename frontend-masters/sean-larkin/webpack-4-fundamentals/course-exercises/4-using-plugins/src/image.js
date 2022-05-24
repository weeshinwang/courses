const makeImage = (url, height = '100', width = '100') => {
  const image = document.createElement('img');

  image.src = url;
  image.height = height;
  image.width = width;
  return image;
};

export default makeImage;
