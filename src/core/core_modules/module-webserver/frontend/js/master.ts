//import { getRandomColor } from "./colorUtils";
const { getRandomColor } = require('./'); 

/**
 * The ts file for the maste template
 */

const split = 7;
//get the starting color
const basicColor = getRandomColor();
// applying the colors to the elements 
document.getElementById('home').style.backgroundColor = basicColor.toHexString();
basicColor.brightenBy(split -1);
document.getElementById('links').style.backgroundColor = basicColor.toHexString();
document.getElementById('sideBar').style.backgroundColor = basicColor.toHexString();
basicColor.brightenBy(split -2);
let ind = 1;
for(let i = 0; i< 2; i++) {
    document.getElementById('link'+ind).style.backgroundColor = basicColor.toHexString();
    ind++;
}
document.getElementById('link1').style.backgroundColor = basicColor.toHexString();
document.getElementById('user').style.backgroundColor = basicColor.toHexString();
basicColor.brightenBy(split - 3);
document.getElementById('entry1').style.backgroundColor = basicColor.toHexString();
document.getElementById('entry2').style.backgroundColor = basicColor.toHexString();


//# sourceMappingURL=index.js.map