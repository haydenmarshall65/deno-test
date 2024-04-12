import { assertEquals } from "jsr:@std/assert";
import { add } from "./main.ts";
import { assertFalse } from "$std/assert/assert_false.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});

Deno.test(function testFalse(){
  assertFalse(false)
})
