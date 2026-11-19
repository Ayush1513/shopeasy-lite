const test = require('node:test');
const assert = require('node:assert');
const { addItem, total } = require('../src/cart');

test('adds an item to cart', () => {
  const cart = addItem([], 'Laptop', 50000, 1);
  assert.equal(cart.length, 1);
});

test('calculates cart total', () => {
  const cart = addItem([], 'Mouse', 1000, 2);
  assert.equal(total(cart), 2000);
});

test('rejects invalid price', () => {
  assert.throws(() => addItem([], 'Laptop', -100));
});
