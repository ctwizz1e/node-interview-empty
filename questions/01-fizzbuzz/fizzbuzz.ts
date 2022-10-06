/**
 * This function should implement the standard FizzBuzz logic.
 *
 * Print integers "start" (inclusive) to "end" (exclusive), but print "Fizz" if the
 * integer is divisible by 3, "Buzz" if an integer is divisible by 5, and "FizzBuzz"
 * if an integer is divisible by both 3 and 5
 *
 * If an invalid input is provided, throw an InputError
 *
 * Example:
 *
 * calling fizzBuzz(12, 21, console.log) should call...
 * console.log("Fizz")
 * console.log("13")
 * console.log("14")
 * console.log("FizzBuzz")
 * console.log("16")
 * console.log("17")
 * console.log("Fizz")
 * console.log("19")
 * console.log("Buzz")
 *
 *
 *
 * @param start number to start printing fizzbuzz logic from - inclusive
 * @param end number to stop printing fizzbuzz logic from - exclusive
 * @param printFunction function to pass statements to print
 */
export function fizzBuzz(
  start: number,
  end: number,
  printFunction: (msg: string) => void
): void {
  // TODO implement the function below
  throw new Error("not implemented");
}

export class InputError extends Error {
  constructor(msg: string, ...params: any[]) {
    console.log(msg, params);
    super(msg);
    Object.setPrototypeOf(this, InputError.prototype);
  }
}
