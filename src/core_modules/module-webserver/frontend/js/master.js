(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.master = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const baseconvert = require('baseconvert');

const split = 8;
const colors = [{ red: '3b', green: '5c', blue: '78'}, { red: '28', green: '41', blue: '5f'},
{ red: 'b7', green: '75', blue: '75'}, { red: 'da', green: '87', blue: '09'}, 
{ red: '90', green: 'ba', blue: '3e'}, { red: '3a', green: '24', blue: 'aa'},
{ red: 'ca', green: '91', blue: 'de'}, { red: 'fa', green: '80', blue: '72'},
{ red: '4c', green: '98', blue: '8c'}, { red: '6d', green: 'da', blue: 'c8'},
{ red: 'da', green: '6d', blue: '7f'}, { red: '3d', green: '98', blue: '87'}];

const numberOfColors = colors.length;

// initialize colors
let color = getRandomColor();
document.getElementById('home').style.backgroundColor = rgbToHex(color);
// make brighter
brighten(color);
let hexColor = rgbToHex(color);
document.getElementById('links').style.backgroundColor = hexColor;
document.getElementById('sideBar').style.backgroundColor = hexColor;
brighten(color);
document.getElementById('link1').style.backgroundColor = hexColor;
//document.getElementById('entry1').style.backgroundColor = hexColor;
//document.getElementById('entry2').style.backgroundColor = hexColor;
document.getElementById('user').style.backgroundColor = hexColor;



// help functions
function getRandomColor() {
    return colors[randomOf(numberOfColors, true)];
}

function randomOf(maxNumber, includeZero) {
    if (includeZero) {
        return Math.floor(maxNumber*Math.random());
    } else {
        return Math.floor(maxNumber*Math.random()) + 1;
    }
}

function rgbToHex(color) {
    return '#' + color.red + color.green + color.blue;
}

function brighten(color) {
    //console.log('red ', color.red);
    color.red = reduceHex(color.red);
    //console.log('red ', color.red);
    //console.log('green ', color.green);
    color.green = reduceHex(color.green);
    //console.log('green ', color.green);
    //console.log('blue ', color.blue);
    color.blue = reduceHex(color.blue);
    //console.log('red ', color.blue);
}

/*function reduceHex(hex) {
   let hexAsInt = baseConvert.hex2dec(hex);
    hexAsInt = Math.floor(hexAsInt/split);
    return baseConvert.dec2hex;
}*/

function reduceHex(hex) {
    let hexAsInt = 16*convertSingleHexToInt(hex[0]) + convertSingleHexToInt(hex[1]);
    hexAsInt = Math.floor(hexAsInt/split)*(split - 1);
    hex[0] = convertSingleIntToHex(Math.floor(hexAsInt/16));
    hex[1] = convertSingleIntToHex((hexAsInt%16));
    return hex;
}

function convertSingleIntToHex(char) {
    if (0 <= char <= 9){
        return char;
    } else if (10 <= char <= 15) {
        switch (char) {
            case '10':
                return 'a';
            case '11':
                return 'b';
            case '12':
                return 'c';
            case '13':
                return 'd';
            case '14':
                return 'e';
            case '15':
                return 'f';
        }
    } else {
        console.error(char, 'is not a Hex.');
    }
}

function convertSingleHexToInt(char) {
    if (!isNaN(char -parseFloat(char))) {
        return char;
    } else {
        switch (char) {
            case 'a':
                return 10;
            case 'b':
                return 11;
            case 'c':
                return 12;
            case 'd':
                return 13;
            case 'e':
                return 14;
            case 'f':
                return 15;
            default: 
                console.error(char, 'is not a Hex.');
        }
    }
}




},{"baseconvert":2}],2:[function(require,module,exports){
var BaseConvert = {

  converter: function(number) {
    this.fromBase = function(baseFrom) {
      this.toBase = function(baseTo) {
        return parseInt(number, baseFrom).toString(baseTo);
      };
      return this;
    };
    return this;
  },

  dec2hex: function(number) {
    return this.converter(number).fromBase(10).toBase(16);
  },

  hex2dec: function(number) {
    return this.converter(number).fromBase(16).toBase(10);
  },

  bin2dec: function(number) {
    return this.converter(number).fromBase(2).toBase(10);
  },

  dec2bin: function(number) {
    return this.converter(number).fromBase(10).toBase(2);
  },

  bin2hex: function(number) {
    return this.converter(number).fromBase(2).toBase(16);
  },

  hex2bin: function(number) {
    return this.converter(number).fromBase(16).toBase(2);
  }
};

module.exports = BaseConvert;

},{}]},{},[1])(1)
});

//# sourceMappingURL=master.js.map
