  export default interface Person {
    firstName: string;
    lastName: string;
  }
  
  export function sayHello(p: Person): string {
    return `Hello, ${p.firstName}!`;
  }

  export function sayMyName(p: Person): string {
    return p.firstName + " " + p.lastName
  }