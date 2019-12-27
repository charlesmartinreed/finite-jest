const functions = require("./functions");

// you can set up jest to run other functions before or after a test

/* 
====
after EACH test
====

beforeEach(() => initDatabase());
afterEach(() => deinitDatabase());
*/

/* 
====
ONCE per test suite
====

beforeAll(() => initDatabase());
afterAll(() => initDatabase());
*/

/* 
====
Run only before DESCRIBED tests
====

*/
const nameCheck = () => console.log("Checking Name...");

describe("Checking Names", () => {
  beforeEach(() => nameCheck());

  test("User is Jeff", () => {
    const user = { lastName: "Bridges", firstName: "Jeff" };
    expect(user.firstName).toBe("Jeff");
  });

  test("User is Karen", () => {
    const user = { lastName: "Walker", firstName: "Karen" };
    expect(user.firstName).toBe("Karen");
  });
});

const initDatabase = () => {
  console.log("Initalizing the Database... Hi!");
};

const deinitDatabase = () => {
  console.log("Closing the Database... Bye!");
};

// toBe matcher
test("Adds 2 + 2 to equal 4", () => {
  // actual function goes here, as well as the 'matcher' appended to the end of expect()
  expect(functions.add(2, 2)).toBe(4);
});

// not.toBe matcher
test("Adds 2 + 2 to NOT equal 5", () => {
  // actual function goes here, as well as the 'matcher' appended to the end of expect()
  expect(functions.add(2, 2)).not.toBe(5);
});

// while toBe looks for specific values, we can also check for null, undefined, defined, truthy, falsy...

// toBeNull matcher
test("Value should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy matcher
test("Value should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual
// toBe is for primitive types, but toEqual is for reference types which may contain similiar looking values, but may reference two difference memory address. Use toEqual to test objects, arrays, etc.
test("Returned user should be Charles Reed", () => {
  expect(functions.createUser()).toEqual({
    lastName: "Reed",
    firstName: "Charles"
  });
});

// tests can also evaluate inner/local params and conditional logic
test("Should be under 1600 lbs", () => {
  const load1 = 800;
  const load2 = 600;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// RegEx example
test("Prove that there is no 'I' in team", () => {
  expect("team").not.toMatch(/I/i);
});

// Arrays example
test("Usernames array should contain Admin", () => {
  usernames = ["caitlin", "sabrina", "chris", "keenan", "minnie", "admin"];
  expect(usernames).toContain("admin");
});

// ASYNC/AWAIT DATA CALL EXAMPLE
// test("Fetched username should be Leanne Graham", async () => {
//   // when working with async code, we use assertions to ensure that the promises, etc, are all called
//   expect.assertions(1);

//   // ensure the test doesn't complete before the return
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual("Leanne Graham");
// });
