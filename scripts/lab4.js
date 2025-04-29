/**
 * 
 * @param {*} num1, first number to add. 
 * @param {*} num2, second number to add. 
 * @param {*} add, boolean value to tell the function what to do. 
 * @returns The sum of the two numbers if add is true and false otherwise.
 */
function sumValues(num1, num2, add) {
    //**check var types 
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof add !== 'boolean'){
        return false;
    }

    if (add) {
        //** I changed const to let because you cannot reassigned a const
        let result = 0;

        result = num1 + num2;

        return result;
    }
    else {
        return false; //**returning !add is not right
    }
}

/**
 * 
 * @param {*} prices, an array of the original price.
 * @param {*} discount, a number between 0-1 to represent the discount. 
 * @returns An array of each price's new price, after the discount is applied. Or false, if prices array is empty.
 */
function discountPrices(prices, discount) {
    //**check var types
    if(!Array.isArray(prices) || typeof discount !== 'number'){
        return false;
    }
    
    //**check if empty
    if(prices.length === 0){
        return false;
    }

    const discounted = []; //**was missing semi colon
    const length = prices.length;
    let discountedPrice = 0
    for(let i = 0; i < length; i++) {
        discountedPrice = prices[i] * (1 - discount); //**using "+=" was not right
        discounted.push(discountedPrice);
    }

    return discounted;
}

module.exports = {sumValues, discountPrices};