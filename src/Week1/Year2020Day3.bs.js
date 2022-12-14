// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Fs = require("fs");
var Belt_Array = require("rescript/lib/js/belt_Array.js");
var Caml_int32 = require("rescript/lib/js/caml_int32.js");

var input = Fs.readFileSync("input/Week1/Year2020Day3.sample.txt", "utf8").split("\n");

var slopes = [
  [
    1,
    1
  ],
  [
    3,
    1
  ],
  [
    5,
    1
  ],
  [
    7,
    1
  ],
  [
    1,
    2
  ]
];

function findAllTree(param) {
  var y = param[1];
  var x = param[0];
  return Belt_Array.keepWithIndex(Belt_Array.keepWithIndex(input, (function (param, i) {
                    return Caml_int32.mod_(i, y) <= 0;
                  })), (function (arr, i) {
                return arr.charAt(Caml_int32.mod_(Math.imul(i, x), arr.length)) === "#";
              })).length;
}

console.log(Belt_Array.map(slopes, findAllTree));

var x = 1;

var y = 2;

exports.input = input;
exports.x = x;
exports.y = y;
exports.slopes = slopes;
exports.findAllTree = findAllTree;
/* input Not a pure module */
