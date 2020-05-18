var { expect } = require('chai');

const swapRecursively = require('../swapRecursively.js');
const swapIteratively = require('../swapIteratively.js');
/*
Node format:

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
 */

const nullTree = null;
const testTree = {
  val: 4,
  left: {
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: null },
  },
  right: {
    val: 7,
    left: { val: 6, left: null, right: null },
    right: { val: 9, left: null, right: null },
  },
};

const invertedTree = {
  val: 4,
  left: {
    val: 7,
    left: { val: 9, left: null, right: null },
    right: { val: 6, left: null, right: null },
  },
  right: {
    val: 2,
    left: { val: 3, left: null, right: null },
    right: { val: 1, left: null, right: null },
  },
};

describe('Swap Iteratively', () => {
  let itTree = JSON.parse(JSON.stringify(testTree));
  it('Returns null when given an empty tree', () => {
    expect(swapIteratively(nullTree)).to.be.a('null');
  });
  it('inverts a binary tree', () => {
    expect(swapIteratively(itTree)).to.eql(invertedTree);
  });
});

describe('Swap Recursively', () => {
  let reTree = JSON.parse(JSON.stringify(testTree));
  console.log('reTree', reTree);
  it('Returns null when given an empty tree', () => {
    expect(swapRecursively(nullTree)).to.be.a('null');
  });
  it('inverts as binary tree', () => {
    expect(swapRecursively(reTree)).to.eql(invertedTree);
  });
});
