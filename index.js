const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const countLetters = require('./countLetters');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countOnly = require('./countOnly');
const eqArray = require('./eqArray');
const eqObjects = require('./eqObjects');
const findByKeyValue = require('./findByKeyValue');
const findKey = require('./findKey');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  countLetters: countLetters,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countOnly: countOnly,
  eqArray: eqArray,
  eqObjects: eqObjects,
  findByKeyValue: findByKeyValue,
  findKey: findKey,
  flatten: flatten, 
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without
};