# Understand this keyword in Javascript

*Some Terms to Understand related to 'this'*


**Execution contexts**

```
Every line of JavaScript code is run in an “execution 
context.” The JavaScript runtime environment maintains 
a stack of these contexts, and the top execution 
context on this stack is the one that’s actively 
running.

```

**The global object**

```
All JavaScript runtimes have a unique object
called the global object. Its properties include
built-in objects like Math and String, as well as
extra properties provided by the host environment.
```


**Determining the value of this**


```
'this' refers to the global object in all global code.
 Since all programs start by executing global code,
 and this is fixed inside of a given execution context,
 we know that, by default, 'this' is the global object.

```

### Read After (this.js)

**call vs apply vs bind**

```
Call invokes the function and allows you to pass
in arguments one by one.
Apply invokes the function and allows you to pass in 
arguments as an array.
Bind returns a new function, allowing you to pass in
a this array and any number of arguments.


```

**Summary**

```
By default, this refers to the global object.
When a function is called as a property on a parent 
object, this refers to the parent object inside that 
function.
When a function is called with the new operator, this 
refers to the newly created object inside that 
function.
When a function is called using call or apply, this 
refers to the first argument passed to call or apply.
If the first argument is null or not an object, this 
refers to the global object.
```

