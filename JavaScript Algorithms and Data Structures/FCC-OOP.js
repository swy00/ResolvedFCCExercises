// Create a Method on an Object
//----------------------------------------------------------------------------------------------------------------------------------------------------
/*Objects can have a special type of property, called a method.

Methods are properties that are functions. This adds different behavior to an object. Here is the duck example with a method:

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
The example adds the sayName method, which is a function that returns a sentence giving the name of the duck. 
Notice that the method accessed the name property in the return statement using duck.name. The next challenge will cover another way to do this. */

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs:function(){return "This dog has " + dog.numLegs +" legs.";}
    };
dog.sayLegs();

//Make Code More Reusable with the this Keyword

/*this is a deep topic, and the above example is only one way to use it. In the current context, this refers to the object that the method is associated with: duck. 
If the object's name is changed to mallard, it is not necessary to find all the references to duck in the code. It makes the code reusable and easier to read.*/
let dogg = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
dog.sayLegs();

//Define a Constructor Function

/*Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. 
Think of them as a blueprint for the creation of new objects. 
Constructors follow a few conventions:
Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
Constructors define properties and behaviors instead of returning a value as other functions might.*/
function Dog(){
    this.name="Tom";
    this.color="Black";
    this.numLegs=4;
  }

//Use a Constructor to Create Objects

/*let blueBird = new Bird();
NOTE: this inside the constructor always refers to the object being created.

Notice that the new operator is used when calling a constructor. This tells JavaScript to create a new instance of Bird called blueBird. 
Without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results. 
Now blueBird has all the properties defined inside the Bird */

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
let hound=new Dog();//"hound" va a ser una copia de dog, y puedo modificar los valores con hound.name="Carlos", ya que es un objeto.

//Extend Constructors to Receive Arguments

function Dog(name,color) {
    this.name=name;
    this.color=color;
    this.numLegs=4;
  }
let terrier=new Dog("Jorge","Black");

//Verify an Object's Constructor with instanceof

/*Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. JavaScript gives a convenient way to verify this with the instanceof operator. 
instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor */

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
let myHouse=new House(5);
myHouse instanceof House

//Understand Own Properties

/*In the following example, the Bird constructor defines two properties: name and numLegs:

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
name and numLegs are called own properties, because they are defined directly on the instance object. 
That means that duck and canary each has its own separate copy of these properties. In fact every instance of Bird will have its own copy of these properties. 
The following code adds all of the own properties of duck to the array ownProps:

let ownProps = [];

for (let property in duck) {              //Para name y numLegs, se fija si las contiene duck si "true" las agrega al arreglo vacio
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps);
The console would display the value ["name", "numLegs"]. */
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}
  
let canary = new Bird("Tweety");
let ownProps = [];

for(let property in canary){
    if(canary.hasOwnProperty(property)){
      ownProps.push(property)
    }
}
console.log(ownProps);

//Use Prototype Properties to Reduce Duplicate Code

/*Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated variable numLegs inside each Bird instance.

This may not be an issue when there are only two instances, but imagine if there are millions of instances. That would be a lot of duplicated variables.

A better way is to use the prototype of Bird. Properties in the prototype are shared among ALL instances of Bird. Here's how to add numLegs to the Bird prototype:

Bird.prototype.numLegs = 2;
Now all instances of Bird have the numLegs property.

console.log(duck.numLegs);
console.log(canary.numLegs);
Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects. 
Note that the prototype for duck and canary is part of the Bird constructor as Bird.prototype. 
Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it. */

function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs=4;//Es como si el constructor tuviera la propiedad numLegs dentro de el, pero al duplicarlo con new no se repite la misma linea de codigo en cada instancia
let beagle = new Dog("Snoopy");

//Iterate Over All Properties

/*You have now seen two kinds of properties: own properties and prototype properties. 
Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype */

function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 4;
  
let beagles = new Dog("Snoopy");
let ownPropss = [];
let prototypeProps = [];

for (let property in beagles) {
    if(beagles.hasOwnProperty(property)) {
    ownPropss.push(property);
    } else {
    prototypeProps.push(property);
    }
}
//Understand the Constructor Property

/*There is a special constructor property located on the object instances duck and beagle that were created in the previous challenges:

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
Both of these console.log calls would display true in the console.

Note that the constructor property is a reference to the constructor function that created the instance. 
The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is.  */

function Dog(name) {
    this.name = name;
}
function joinDogFraternity(candidate) {
    if(candidate.constructor === Dog){
    return true
    }else{
    return false    
    }
}

//Change the Prototype to a New Object

/*Up until now you have been adding properties to the prototype individually:

Bird.prototype.numLegs = 2;
This becomes tedious after more than a few properties.

Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:

Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};*/

function Dog(name) {
    this.name = name;
}
  
Dog.prototype = {
    numLegs: 2, 
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
};

//Remember to Set the Constructor Property when Changing the Prototype

/*There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property! 
This property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false results:

duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;
In order, these expressions would evaluate to false, true, and true.

To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property */

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
//Understand Where an Object’s Prototype Comes From

/*Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it. 
You can show this relationship with the isPrototypeOf method:

Bird.prototype.isPrototypeOf(duck);*/

function Dog(name) {
  this.name = name;
}
let beagless = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagless)

//Understand the Prototype Chain

/*All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.

function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;
Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype);
How is this useful? You may recall the hasOwnProperty method from a previous challenge:

let duck = new Bird("Donald");
duck.hasOwnProperty("name");

The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. This is an example of the prototype chain. 
In this prototype chain, Bird is the supertype for duck, while duck is the subtype. 
Object is a supertype for both Bird and duck. Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method. */

function Dog(name) {
  this.name = name;
}
let beaglee = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beaglee);  // yields true
Object.prototype.isPrototypeOf(Dog.prototype);

//Use Inheritance So You Don't Repeat Yourself

/*There's a principle in programming called Don't Repeat Yourself (DRY). The reason repeated code is a problem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors.

Notice in the example below that the describe method is shared by Bird and Dog:

Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
The describe method is repeated in two places. The code can be edited to follow the DRY principle by creating a supertype (or parent) called Animal:

function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
Since Animal includes the describe method, you can remove it from Bird and Dog:

Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
}; */

//Inherit Behaviors from a Supertype


/*It uses a technique called inheritance. This challenge covers the first step: make an instance of the supertype (or parent). You already know one way to create an instance of Animal using the new operator:

let animal = new Animal();
There are some disadvantages when using this syntax for inheritance, which are too complex for the scope of this challenge. Instead, here's an alternative approach without those disadvantages:

let animal = Object.create(Animal.prototype);
Object.create(obj) creates a new object, and sets obj as the new object's prototype. Recall that the prototype is like the "recipe" for creating an object. 
By setting the prototype of animal to be the prototype of Animal, you are effectively giving the animal instance the same "recipe" as any other instance of Animal */

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
let duck=Object.create(Animal.prototype); 
let beaglea=Object.create(Animal.prototype); 

//Set the Child's Prototype to an Instance of the Parent

/*In the previous challenge you saw the first step for inheriting behavior from the supertype (or parent) Animal: making a new instance of Animal.

This challenge covers the next step: set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.

Bird.prototype = Object.create(Animal.prototype);
Remember that the prototype is like the "recipe" for creating an object. In a way, the recipe for Bird now includes all the key "ingredients" from Animal */

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }
Dog.prototype=Object.create(Animal.prototype)//Dog va a heredar todas las propiedades de Aniaml, por lo tanto beagle tambien
let beagleas = new Dog();

//Reset an Inherited Constructor Property

/*When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

Here's an example:

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
But duck and all instances of Bird should show that they were constructed by Bird and not Animal. 
To do so, you can manually set the constructor property of Bird to the Bird object:

Bird.prototype.constructor = Bird;
duck.constructor */

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor=Bird;
Dog.prototype.constructor=Dog;
let duckk = new Bird();
let beaglef = new Dog();

//Add Methods After Inheritance

/*A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.

For example, Bird is a constructor that inherits its prototype from Animal:

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
In addition to what is inherited from Animal, you want to add behavior that is unique to Bird objects. Here, Bird will get a fly() function. 
Functions are added to Bird's prototype the same way as any constructor function:

Bird.prototype.fly = function() {
  console.log("I'm flying!");
}; */

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.constructor=Dog;
Dog.prototype.bark=function(){console.log("Woof!");};
let beaglex = new Dog();

//Override Inherited Methods

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly=function(){
  return "Alas, this is a flightless bird."
}
let penguin = new Penguin();
console.log(penguin.fly());

//Use a Mixin to Add Common Behavior Between Unrelated Objects

/*As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. 
Inheritance does not work well for unrelated objects like Bird and Airplane. They can both fly, but a Bird is not a type of Airplane and vice versa.

For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.

let flyMixin = function(obj) {
  obj.fly = function() {                    // Esto lo que hace es agregarle el .fly al objeto que se pase por la funcion.
    console.log("Flying, wooosh!");
  }
};
The flyMixin takes any object and gives it the fly method.

let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
Here bird and plane are passed into flyMixin, which then assigns the fly function to each object. Now bird and plane can both fly:

bird.fly();
plane.fly(); */

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};
let glideMixin = function(obj){
  obj.glide=function(){return "I can glide bitch"}
}
glideMixin(bird);
glideMixin(boat);

//Use Closure to Protect Properties Within an Object from Being Modified Externally

/*In the previous challenge, bird had a public property name. It is considered public because it can be accessed and changed outside of bird's definition.

bird.name = "Duffy";
Therefore, any part of your code can easily change the name of bird to any value. 
Think about things like passwords and bank accounts being easily changeable by any part of your codebase. That could cause a lot of issues.

The simplest way to make this public property private is by creating a variable within the constructor function. 
This changes the scope of that variable to be within the constructor function versus available globally. 
This way, the variable can only be accessed and changed by methods also within the constructor function.

function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();
Here getHatchedEggCount is a privileged method, because it has access to the private variable hatchedEgg. 
This is possible because hatchedEgg is declared in the same context as getHatchedEggCount. In JavaScript, a function always has access to the context in which it was created. 
This is called closure */

function Bird() {
  let weight = 15;
  this.getWeight=function(){
    return weight
  }
}
let ducks=new Bird()
ducks.getWeight();

//Understand the Immediately Invoked Function Expression (IIFE)

/*A common pattern in JavaScript is to execute a function as soon as it is declared:

(function () {
  console.log("Chirp, chirp!");
})();
This is an anonymous function expression that executes right away, and outputs Chirp, chirp! immediately.

Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. 
This pattern is known as an immediately invoked function expression or IIFE. */

(function() {
  console.log("A cozy nest is ready");
})(); // FUNCION ANONIMA, se ejecuta en el momento sin necesidad de llamarla


//Use an IIFE to Create a Module

/*An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. For example, an earlier challenge defined two mixins:

function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
We can group these mixins into a module as follows:

let motionModule = (function () {
  return {                            //ANIDA LAS 2 FUNCIONES DENTRO DEL POSIBLE RETURN PARA QUE DESPUES SEA POSIBLE LLAMARLA
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();
Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule. 
This returned object contains all of the mixin behaviors as properties of the object. 
The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. */


let funModule=(function(){ 
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
  };
},
 singMixin:function(obj) {
  obj.sing = function() {    
    console.log("Singing to an awesome tune");
    }
  }
}
})()
