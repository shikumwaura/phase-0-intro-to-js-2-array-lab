// index.js

// Initial cats array
const cats = ["Milo", "Otis", "Garfield"];

// 1) Destructively appends a cat to the end of cats
function destructivelyAppendCat(name) {
  cats.push(name);
}

// 2) Destructively prepends a cat to the beginning of cats
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// 3) Destructively removes the last cat from cats
function destructivelyRemoveLastCat() {
  cats.pop();
}

// 4) Destructively removes the first cat from cats
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// 5) Appends a cat to cats and returns a new array (non-destructive)
function appendCat(name) {
  return [...cats, name];
}

// 6) Prepends a cat to cats and returns a new array (non-destructive)
function prependCat(name) {
  return [name, ...cats];
}

// 7) Removes the last cat from cats and returns a new array (non-destructive)
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

// 8) Removes the first cat from cats and returns a new array (non-destructive)
function removeFirstCat() {
  return cats.slice(1);
}

// Export all for testing
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};
