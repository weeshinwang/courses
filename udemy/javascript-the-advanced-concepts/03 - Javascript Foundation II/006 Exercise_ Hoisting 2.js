var favoriteFood = 'GRASS';

var foodThought = function () {
  console.log('ORIGINAL FOOD: ' + favoriteFood);
  var favoriteFood = 'SUSHI';

  console.log('NEW FAVORITE FOOD: ' + favoriteFood);
};

foodThought();
