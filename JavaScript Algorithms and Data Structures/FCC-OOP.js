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