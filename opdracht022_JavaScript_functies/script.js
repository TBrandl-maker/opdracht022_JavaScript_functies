/*
make dutchCheeseSandwich
    Get one slice of bread
    Add a little butter
    Add a slice of Gouda cheese
    Put a slice bread on top
*/
function makeDutchCheeseSandwichDeclarative() { } // function declaration

const makeDutchCheeseSandwichArrow = () => { } // arrow function 

const makeDutchCheeseSandwich = function () { //function expression
    console.log("Get one slice of bread");
    console.log("Add a little butter");
    console.log("Add a slice of Gouda cheese");
    console.log("Put a slice bread on top");
}

makeDutchCheeseSandwich();

// function declaratiion
const makeSandwich = function (topping) { //function expression
    console.log("There you go, a sandwich with " + topping)
}

//function call
makeSandwich('cheese');
makeSandwich('ham');

const calculateDiscountedPrice = function (totalAmount, discount) {
    return Math.round(totalAmount - discount)
}

let sumofprice = calculateDiscountedPrice(15, 2.5);

console.log(sumofprice);

const calculateDiscountedPrice2 = function (totalAmount, discount) {
    if (totalAmount > 25) {

        return Math.round(totalAmount - discount)

    } else {

        return (totalAmount)
    }

}

let totalSum = calculateDiscountedPrice2(20, 4);

console.log(totalSum);

