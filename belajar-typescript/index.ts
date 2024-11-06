interface User {
  name: string;
  age: number;
  hobbies: string[];
}

enum SchoolType {
  Primary = "Primary",
  Secondary = "Secondary",
  College = "College",
}

type School = {
  name: string;
  type: SchoolType;
  location: string;
};

function isValidSchoolType(type: SchoolType) {
  return Object.values(SchoolType).includes(type);
}

function validateSchoolType(type: string): SchoolType {
  if (!isValidSchoolType(type as SchoolType)) {
    throw new Error(
      `Invalid school type ${type}. Valid types are ${Object.values(
        SchoolType
      ).join(", ")}`
    );
  }
  return type as SchoolType;
}

class Car {
  constructor(brand: string, model?: string) {
    this.brand = brand;
    this.model = model || "Unknown";
  }

  public brand: string;
  public model: string;
}

const car = new Car("Toyota");
car.brand = "Honda";

function hello(name: string, age: number): string {
  if (age < 0) {
    throw new Error("Age cannot be negative.  Please provide a valid age.");
  }
  return `Hello, ${name}!, you are ${age} years old.`;
}

function main(args?: any[]) {
  console.log("Hello, world!");

  const user: User = {
    name: "Alice",
    age: 30,
    hobbies: ["reading", "cooking"],
  };

  console.log(user);

  const school: School = {
    name: "ABC School",
    type: SchoolType.Primary,
    location: "XYZ City",
  };

  console.log(school);

  console.log(car);

  // Union types
  let value: string | number;
  value = "Hello";
  console.log(value);
  value = 123;
  console.log(value);

  console.log(hello("Alice", 30));
  try {
    console.log(hello("Alice", -30));
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message); // Logs only the error message
    }
  }
}

main();
