var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    //return "Hello, " + person.firstName + " " + person.lastName;
    return "Hello, " + person.fullName;
}
var user = new Student("Jesus", "H.", "Christ");
document.body.textContent = greeter(user);