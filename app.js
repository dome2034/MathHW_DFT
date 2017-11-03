var DFT = require('./DFT');
var fs = require('fs');

DFT = new DFT();
let d = [1,2,0,-1]
console.log("Test " +DFT.calDFT(d));