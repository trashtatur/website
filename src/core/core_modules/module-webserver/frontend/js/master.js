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
console.log('color', color);
document.getElementById('home').style.backgroundColor = rgbToHex(color);
console.log('test');
// make brighter
brighten(color);
console.log('brightened color: ', color);
let hexColor = rgbToHex(color);
document.getElementById('links').style.backgroundColor = hexColor;
document.getElementById('sideBar').style.backgroundColor = hexColor;
brighten(color);
console.log('brightened color: ', color);
document.getElementById('link1').style.backgroundColor = hexColor;
document.getElementById('entry1').style.backgroundColor = hexColor;
document.getElementById('entry2').style.backgroundColor = hexColor;
document.getElementById('user').style.backgroundColor = hexColor;

console.log('colors', colors);

let iframe = document.getElementsByTagName( "iframe" )[ 0 ];
iframe.baseURI = "www.google.de";
alert( "Frame title: " + iframe.baseURI);


// help functions
function getRandomColor() {
    console.log(numberOfColors);
    console.log(colors);
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
    console.log('hex: ', hex);
    let hexAsInt = 16*convertSingleHexToInt(hex[0]) + convertSingleHexToInt(hex[1]);
    console.log('hexAsInt: ', hexAsInt);
    hexAsInt = Math.floor(hexAsInt/split)*(split - 1);
    console.log('hexAsInt: ', hexAsInt);
    hex[0] = convertSingleIntToHex(Math.floor(hexAsInt/16));
    console.log(hexAsInt%16);
    hex[1] = convertSingleIntToHex((hexAsInt%16));
    console.log('hex: ', convertSingleIntToHex((hexAsInt%16)), convertSingleIntToHex(Math.floor(hexAsInt/16)));
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



