function User(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
};

var user1 = new User('John', 'Smith', 26, 'male');
var user200 = new User('Jill', 'Robinson', 25, 'female');

console.log(user1);
console.log(user200);

// Prototypes
User.prototype.emailDomain = '@facebook.com';

console.log(user200);

console.log(user200.emailDomain);

User.prototype.getEmailAddress = function() {
    return this.firstName + this.lastName + this.emailDomain;
};

console.log(user1);

console.log(user1.getEmailAddress());
console.log(user200.getEmailAddress());