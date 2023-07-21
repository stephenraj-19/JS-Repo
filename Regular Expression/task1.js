var user="stephen19";
// pattern for the username/^[a-zA-Z0-9]{6,15}$/;
var usernameRegex = /^[a-zA-Z0-9]{6,15}$/;
console.log(usernameRegex.test(user) ?`user is valid`: `user is invalid`);
