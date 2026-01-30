//1 Fuction declaration

// function greet(a ="100"){
//     console.log("param: ", a);
// }
// greet();
// greet(1);
// greet(1,2,3,6,"ABC");

// function greet(a ="100"){
//     console.log("param: ", arguments.length);
// }

// greet();
// greet(1);
// greet(1,2,3,6,"ABC");


// function greet(a ="100"){
//     console.log("param: ", arguments[4]);
// }
// greet(1,2,3,6,"ABC");

// function sumAll(...arg){
//     let sum =0;
//     for ( let arg of args){
//         sum +=arg;
//     }
//     return sum;
// }
// console.log(sumAll(1,2,3,6,10));

// const ITEM_PRICE = 500;
// const GST_RATE = 0.18; 
// const DISCOUNT_RATE = 0.10; 
// const DISCOUNT_THRESHOLD = 10; 

// function orderTotal(quantity){
//     let subTotal = quantity*ITEM_PRICE;

//     let discountAmount = 0;
//     if(quantity>DISCOUNT_THRESHOLD){
//         discountAmount = subTotal * DISCOUNT_RATE;
//     }
//      let priceAfterDiscount = subTotal- discountAmount;

//      let gstAmount = priceAfterDiscount *GST_RATE;

//      let finalTotal = priceAfterDiscount + gstAmount;

//      return finalTotal.toFixed(2);
// }


// const ITEM_PRICE = 500;
// const GST_RATE = 0.18; 
// const DISCOUNT_RATE = 0.10; 
// const DISCOUNT_THRESHOLD = 10; 

// const calculateOrderTotalArrow = (quantity) => {
//   let subtotal = quantity * ITEM_PRICE;
//   let discountAmount = 0;

//   if (quantity > DISCOUNT_THRESHOLD) {
//     discountAmount = subtotal * DISCOUNT_RATE;
//   }

//   const priceAfterDiscount = subtotal - discountAmount;
//   const gstAmount = priceAfterDiscount * GST_RATE;
//   const finalTotal = priceAfterDiscount + gstAmount;

//   return finalTotal.toFixed(2);
// };




let x = 10;








