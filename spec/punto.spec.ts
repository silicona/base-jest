
import { CPunto } from "../src/punto";

test("Punto", () => {
  let punto: CPunto = new CPunto(2, 5);

  expect(punto).not.toBeInstanceOf(String);
  expect(punto).toBeInstanceOf(CPunto);
});

test("Basic async", async () => {
  expect(1 + 2).toBe(3);
}, 1000 /* optional timeout */);
