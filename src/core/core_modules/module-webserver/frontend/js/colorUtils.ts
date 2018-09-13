/**
 * 
 * @name colorUtils
 * @description A class that handles hex colors
 * @module module-webserver
 * 
 * @devnotes 
 * 
 */

type ToNine     = (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9);
type HexLetter = ('a' | 'b' | 'c' | 'd' | 'e' | 'f');


 /** Class for a simple two digit hex number
 * 
 * @author Felix
 * 
 * @param one 
 *         describing the 16 factor of the hex number
 * @param zero
 *         describing the 1 factor of the hex number
 */
export class SimpleHex {

    one:  ToNine | HexLetter;
    zero: ToNine | HexLetter;

    constructor(one?: ToNine | HexLetter, zero?: ToNine | HexLetter) {
        if (one) {
            this.one = one;
        } else {
            this.one = 0;
        }
        if (zero) {
            this.zero = zero
        } else {
            this.zero = 0;
        }
    }



    toHexString() {
        return this.one.toString() + this.zero.toString();
    }

    /**
     * Function that increases the SimpleHex by a given factor up to a maximum of 255 
     * 
     * 
     */
    increaseBy(factor) {
        let oneValue = this.hexValueToNUmber(this.one);
        let zeroValue = this.hexValueToNUmber(this.zero);
        let decimalValue = 16 * oneValue + zeroValue;
        decimalValue = (decimalValue / factor) * (factor + 1);
        decimalValue = Math.floor(decimalValue);
        decimalValue = Math.min(255, decimalValue);
        oneValue = decimalValue / 16;
        oneValue = Math.floor(oneValue);
        this.one = this.numberToHexValue(oneValue);
        zeroValue = decimalValue % 16;
        this.zero = this.numberToHexValue(zeroValue);
    }

    /**
     * Function that reduces the SimpleHex by a given factor
     * 
     * 
     */
    reduceBy(factor) {
        console.log('hexString: ', this.toHexString());
        let oneValue = this.hexValueToNUmber(this.one);
        let zeroValue = this.hexValueToNUmber(this.zero);
        let decimalValue = 16 * oneValue + zeroValue;
        decimalValue = (decimalValue / factor) * (factor - 1);
        decimalValue = Math.floor(decimalValue);
        oneValue = decimalValue / 16;
        oneValue = Math.floor(oneValue);
        this.one = this.numberToHexValue(oneValue);
        zeroValue = decimalValue % 16;
        this.zero = this.numberToHexValue(zeroValue);
    }

    /**
     * Function that converst a hexValue to a number
     * 
     */
    hexValueToNUmber(hexVal) {
        if (isNaN(hexVal + 0)) {
            switch (hexVal) {
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
                    console.error('No HexFormat', hexVal);
                    return hexVal;
            }
        }
        else {
            return hexVal;
        }
    }

     /**
     * Function that converts a hexValue to a number
     * 
     */
    numberToHexValue(numb) {
        if (0 <= numb && numb <= 9) {
            return numb;
        }
        else {
            switch (numb) {
                case 10:
                    return 'a';
                case 11:
                    return 'b';
                case 12:
                    return 'c';
                case 13:
                    return 'd';
                case 14:
                    return 'e';
                case 15:
                    return 'f';
                default:
                    console.error('No HexFormat, to small or too big', numb);
                    return numb;
            }
        }
    }
}


/**
 * Class for managing hex colors
 */
export class HexColor {

    red:   SimpleHex;
    green: SimpleHex;
    blue:  SimpleHex;

    constructor(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    /**
     * Function to brighten the HexColor
     * @param factor 
     *          the factor by wich the color should be brightened
     */
    brightenBy(factor) {
        this.red.increaseBy(factor);
        this.green.increaseBy(factor);
        this.blue.increaseBy(factor);
    }

    /**
     * Function to darken the HexColor
     * @param factor 
     *          the factor by wich the color should be darkened
     */
    darkenBy(factor) {
        this.red.reduceBy(factor);
        this.green.reduceBy(factor);
        this.blue.reduceBy(factor);
    }
    toHexString() {
        return '#' + this.red.toHexString() + this.green.toHexString() + this.blue.toHexString();
    }
}



/**
 * The colors to start with. Must be overworked.
 */
const colors = [new HexColor(new SimpleHex(3, 'b'), new SimpleHex(5, 'c'), new SimpleHex(7, 8)), new HexColor(new SimpleHex(2, 8), new SimpleHex(4, 1), new SimpleHex(5, 'f')),
    new HexColor(new SimpleHex('b', 5), new SimpleHex(7, 5), new SimpleHex(7, 5)), new HexColor(new SimpleHex('d', 'a'), new SimpleHex(8, 7), new SimpleHex(0, 9)),
    new HexColor(new SimpleHex(9, 0), new SimpleHex('b', 'a'), new SimpleHex(3, 'e')), new HexColor(new SimpleHex(3, 'a'), new SimpleHex(2, 4), new SimpleHex('a', 'a')),
    new HexColor(new SimpleHex('c', 'a'), new SimpleHex(9, 1), new SimpleHex('d', 'e')), new HexColor(new SimpleHex('f', 'a'), new SimpleHex(8, 0), new SimpleHex(7, 2)),
    new HexColor(new SimpleHex(4, 'c'), new SimpleHex(9, 8), new SimpleHex(8, 'c')), new HexColor(new SimpleHex(6, 'd'), new SimpleHex('d', 'a'), new SimpleHex('c', 8)),
    new HexColor(new SimpleHex('d', 'a'), new SimpleHex(6, 'd'), new SimpleHex(7, 'f')), new HexColor(new SimpleHex(3, 'd'), new SimpleHex(9, 8), new SimpleHex(8, 7))];

// help functions

function randomOf(maxNumber, includeZero) {
    if (includeZero) {
        return Math.floor(maxNumber * Math.random());
    }
    else {
        return Math.floor(maxNumber * Math.random()) + 1;
    }
}

export function getRandomColor(): HexColor {
    const numberOfColors = colors.length;
    return colors[randomOf(numberOfColors, true)];
}
