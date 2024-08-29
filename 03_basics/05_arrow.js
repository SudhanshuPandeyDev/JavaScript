// difference between normal function and arrow function

const user1 = {
    name: "Alice",
    greet: function() {
        console.log(this.name);
    }
};
user1.greet();  // "Alice" because `this` refers to `user` object.


const user2 = {
    name: "Bob",
    greet: () => {
        console.log(this.name);
    }
};
user2.greet();  // this inside the arrow function refers to the global object (window in browsers), not the user object.
