import { assertEquals } from "$std/assert/mod.ts";
import Person, { sayHello } from "./hello.ts";

Deno.test("sayHello function", () => {
  const grace: Person = {
    lastName: "Hopper",
    firstName: "Grace",
  };

  assertEquals("Hello, Grace!", sayHello(grace));
});