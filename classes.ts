class Student {
	fullName: string;
	constructor(public firstName: string, public middleInitial: string, public lastName: string) {
		this.fullName = firstName + " " + middleInitial + " " + lastName;
	}
}
	
interface Person {
	firstName: string;
	lastName: string;
	fullName: string;
}

function greeter(person: Person) {

	//return "Hello, " + person.firstName + " " + person.lastName;
	return "Hello, " + person.fullName;

}

let user = new Student("Jesus", "H.", "Christ");

document.body.textContent = greeter(user);
