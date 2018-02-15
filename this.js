/* 1. Default this context
      define a function  */
var myFunction = function () {
    console.log(this); // [object Window]
  };
  
  // call it
  myFunction();   // Basically Window.myFunction()


  /* 2. Object literals
  Inside Object literals, the this value will always refer to its own Object. */

  // create an object
var myObject = {};

// create a method on our object
myObject.someMethod = function () {
  console.log(this); // myObject because our window Object didn’t invoke the function - our Object did, so this will refer to the Object that called it
};

// call our method
myObject.someMethod();



/* 3.Prototypes and Constructors 

in both cases the this value will refer to the Constructor object, which will be myConstructor
*/



var myConstructor = function () {
    this.someMethod = function () {
        console.log(this);
    };
};

myConstructor.prototype = {
    somePrototypeMethod: function () {
        console.log(this);
    }
};

var a = new myConstructor();
a.someMethod();            // this will refer to constructor because a is instance of constructor.
a.somePrototypeMethod();      // this will refer to constructor because a is instance of constructor created using Prototype.




/* 4. Events */



// let's assume .elem is <div class="kaddy"></div>
var element = document.querySelector('.kaddy');
var someMethod = function () {
  console.log(this);
};
element.addEventListener('click', someMethod, false); // here we are adding event listner on element so when you click and call a function which is executed using element context, this would refer to <div class="elem"></div>.



/* 5. consider this basic jQuery(JS Library) example with of this:
The use of $(this), which is jQuery’s syntax for the this keyword in JavaScript, is used inside an anonymous function, and the anonymous function is executed in the button’s click () method. The reason $(this) is bound to the button object is because the jQuery library binds $(this) to the object that invokes the click method. Therefore, $(this) will have the value of the jQuery button ($(“button”)) object
*/


$ ("button").click (function (event) {
    // $(this) will have the value of the button ($("button")) object​
​// because the button object invokes the click () method​
    console.log ($ (this).prop ("name"));
    });




    /* 6.Changing this context
    Some methods to change this context .call(), .apply() and .bind().
    You’ll use this when you want this to refer to something different than the scope it’s in.
    How..??
    Method.call(anotherScope, arg1, arg1); // commas (single arguments)
    Method.apply(anotherScope, [arg1, arg1]); // array of arguments
    */


    var myFunction = function () {
        console.log(this);
      };
      myFunction.call(); // Without any arguments, the function is just invoked and this will remain as the window Object.


      // take an example of foreach

      var numbers = [{
        name: 'Kartik'
      },{
        name: 'Pune'
      },{
        name: 'Bengalore'
      }];
      numbers.forEach(function () {
        console.log(this); // Here, this will refer to Window Object
      });


      // how can we fix it using call method


      numbers.forEach(function () {
        console.log(this); // this = Array [{ name: 'Kartik' },{ name: 'Pune' },{ name: 'Bengalore' }]
      }, numbers); // BOOM, scope change! because you are changing the scope by passing array

    // Bind Method//
    /*   
    We use the Bind () method primarily to call a function with the this value 
    set explicitly. It other words, bind () allows us to easily set which specific
    object will be bound to this when a function or method is invoked.
    */

// e.g



var person1 = {firstName: 'harry', lastName: 'potter'};
var person2 = {firstName: 'Kaddy', lastName: 'King'};

function say() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}
// here binding and calling say function by passing different objects so in this case 'this' will point to object throught which function is getting invoked
var sayHelloharry = say.bind(person1);
var sayHelloKaddy = say.bind(person2);

sayHelloharry(); // Hello harry potter
sayHelloKaddy(); // Hello Kaddy King 

