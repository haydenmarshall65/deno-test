import Person, { sayHello } from "./hello.ts";

const ada: Person = {
  lastName: "Lovelace",
  firstName: "Ada",
};

console.log(sayHello(ada));