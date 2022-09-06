var Person = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var person1 = new Person('Homer', 'Simpson');
var person2 = new Person('Mickey', 'Mouse');

Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
};

Person.prototype.sayHello = function() {
    console.log('Hello, ' + this.getFullName() + '!');
};

console.log(person1.getFullName());
person2.sayHello();
