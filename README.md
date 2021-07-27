# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @louismcoding/lotide`

**Require it:**

`const _ = require('@louismcoding/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: Recieves an array and returns the first element.
* `tail()`: Recieves an array and returns everything past the first element.
* `middle()`: Recieves an array and returns the middle most elements. Will return two elements if length is an even amount. 
* `assertArraysEqual()`: Prints a test message of an eqArrays() comparison
* `assertEqual()` : Will take in any two parameters and do a strict comparison and print a test message.
* `assertObjectsEqual()` : Prints a test message of an eqObjects() comparison
* `countLetters()` : Recieves a string and returns the amount of characters.
* `eqArrays()` : Will take in two arrays and do a strict comparison.
* `eqObject()` : Will take in two objects and do a strict comparison.
* `findKey()` : Recieves an object and callback function pointing to a value. Returns key based on the callback function value.
* `findKeyByValue()` : Recieves an object and value. Returns key of value recieved.
* `flatten()` : Recieves an array of arrays. Returns a single array of every element.
* `letterPositions()` : Recieves a string and returns the index of every letter.
* `map()` : Recieves an array and callback function. Applies the callback function to every element and returns it. 
* `takeUntil()` : Recieves an array and callback function value. Returns an array containing every element up to the callback function value. 
* `without()` : Recieves an array to modify and an array of items to remove. Returns all elements of array to modify not including items of second array. 