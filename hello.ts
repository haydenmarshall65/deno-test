// const site = await fetch("https://www.deno.com");

// console.log(await site.text());

// Deno.serve((_request: Request) => {
//     return new Response("Hello, world!");
//   });

  export default interface Person {
    firstName: string;
    lastName: string;
  }
  
  export function sayHello(p: Person): string {
    return `Hello, ${p.firstName}!`;
  }