/*let a =10; //global scope
function test(){
   let b =20; //function scope
   if (true){
    let c =30; //block scope
   }
   console.log(b); //20
   console.log(a); //10
   console.log(c); //error
}
test();
*/


/*if (true){
    var a =10;
    let b= 20;
    const c = 30;
}
    console.log(a); //10
    console.log(b); // not defined(error)
    console.log(c); //error*/



    //q.1
//let a =10;
//let a =20;
//console.log(a); // SyntaxError



//q.2
/*function test(){
let x = 100;
console.log(x); // 100
} 
test();
console.log(x+10);//refrence error */



//q.3
/*function test(){
var x = 100;
console.log(x); // 100
} 
test();
console.log(x+10);// error */



//q.4
/*if(true){
    let ss ="active";
    console.log(ss); //active
}
console.log(ss); //error */



//q.5
/*if(true){
   var ss ="active";
    console.log(ss); //active
}
console.log(ss); //active*/



//q.6
/*let i=0;
 for(int i=0; i<3; i++){
    console.log(i);//0, 1, 2
 }
 console.log(i);//3*/



 //q.7

 /*let value =10; // global context
 function display(){
    let value =20; //function display context
    console.log(value); //20
 }
 display();
 console.log(value); //10 */


 
/* var value =10; // global context
 function display(){
    var value =20; //20 function display context
    console.log(value);
 }
 display();
 console.log(value);//10 */

  /* var value =10; // global context
 function display(){
    let value =20; //20 function display context
    console.log(value);
 }
 display();
 console.log(value);//10 */


//Lexical scope or environment

  /* var value =10; // global context
 function display(){
     value =20; //20 function display context
    console.log(value);
 }
 display();
 console.log(value);//20. */ 


//Example for scope chain
//  let x =10; 
//   //GEC
//  function outer(){
//     let y =20;
//     function inner(){
//         let z =30;
//         console.log(x,y,z); // 10,20,30

//     }
//     inner();
//  }
//  outer();


// function a(){
//     console.log(x); //10
// }
// function b(){
//     let x = 20;
//     console.log(x); //20
//     a();
//     console.log(x); //20
// }
// let x =10;
// b();















