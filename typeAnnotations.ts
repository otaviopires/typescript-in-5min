function greeter(person: string) {
        return "Hello, " + person;
}

let user = [1, 2, 3];
//let user = ["Mary", "Jane"];

document.body.textContent = greeter(user);
