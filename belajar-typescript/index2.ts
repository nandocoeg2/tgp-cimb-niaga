type User2 = {
  name: string;
  age: number;
};

interface Admin2 {
  name: string;
  role: string;
}

type Person2 = User2 & Admin2;

function greet(person: Person2) {
  console.log(`Hello, ${person.name}, you are ${person.age} years old.`);
}

greet({ name: "Alice", age: 30, role: "Admin" });

type Status = "Loading" | "Success" | "Error";

const status2: Status = "Loading";
console.log(status2);
