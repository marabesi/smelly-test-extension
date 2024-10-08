import * as assert from 'assert';
import { suite, test } from 'mocha';
import { SmellDetector } from '../src/index';

const IF_STATEMENT = 'if-statement';
const FOR_OF = 'for-of-statement';
const FOR_IN = 'for-in-statement';
const FOR = 'for-statement';
const TIMEOUT = 'timeout';
const CONSOLE = 'console-statement';
const MOCKERY = 'excessive-jest-mock';

const JAVASCRIPT = 'javascript';
const TYPESCRIPT = 'typescript';

suite('Smelly Test Smell Detection Suite', () => {
  [{
    code: `const a = 1;
if (a === 1) {}`,
    language: JAVASCRIPT,
    index: 0,
    type: IF_STATEMENT,
    lineStart: 2,
    lineEnd: 2,
    startAt: 0,
    endsAt: 15,
    total: 1,
    description: `Smelly: Avoid Conditional Test Logic in the test. Having conditional logic points to a test case that requires different context to run. Split the test case to fit one context per test case.`,
    diagnostic: `Smelly: Avoid Conditional Test Logic in the test. Having conditional logic points to a test case that requires different context to run. Split the test case to fit one context per test case.`,
  },
  {
    code: `const lists = [{}, {}];
  
for (const i of lists) {

}`,
    language: JAVASCRIPT,
    type: FOR_OF,
    index: 0,
    lineStart: 3,
    lineEnd: 5,
    startAt: 0,
    endsAt: 1,
    total: 1,
    description: `Smelly: Avoid Conditional Test Logic in the test. Having conditional logic points to a test case that requires different context to run. Split the test case to fit one context per test case.`,
    diagnostic: `Smelly: Avoid Conditional Test Logic in the test. Having conditional logic points to a test case that requires different context to run. Split the test case to fit one context per test case.`
  },
  {
    code: `const lists = [{}, {}];
  
for (const i in lists) {

}`,
    language: JAVASCRIPT,
    type: FOR_IN,
    index: 0,
    lineStart: 3,
    lineEnd: 5,
    startAt: 0,
    endsAt: 1,
    total: 1,
    description: `Smelly: Avoid Conditional Test Logic in the test. Having conditional logic points to a test case that requires different context to run. Split the test case to fit one context per test case.`,
    diagnostic: `Smelly: Avoid Conditional Test Logic in the test. Having conditional logic points to a test case that requires different context to run. Split the test case to fit one context per test case.`
  },
  {
    code: `const lists = [{}, {}];
  
for (let i = 0; i < 1; i++) {

}`,
    language: JAVASCRIPT,
    type: FOR,
    index: 0,
    lineStart: 3,
    lineEnd: 5,
    startAt: 0,
    endsAt: 1,
    total: 1,
    description: `Smelly: Avoid Conditional Test Logic in the test. Having conditional logic points to a test case that requires different context to run. Split the test case to fit one context per test case.`,
    diagnostic: `Smelly: Avoid Conditional Test Logic in the test. Having conditional logic points to a test case that requires different context to run. Split the test case to fit one context per test case.`
  },
  {
    code: `setTimeout(() => {
  done();
});`,
    language: JAVASCRIPT,
    index: 0,
    type: TIMEOUT,
    lineStart: 1,
    lineEnd: 3,
    startAt: 0,
    endsAt: 2,
    total: 1,
    description: `Smelly: Avoid using setTimeouts for tests. It might lead to Sleepy test or undeterministic behaviour based on where the test is executed.`,
    diagnostic: `Smelly: Avoid using setTimeouts for tests. It might lead to Sleepy test or undeterministic behaviour based on where the test is executed`,
  },
  {
    code: `function done() {};
setTimeout(() => {
  done();
});`,
    language: JAVASCRIPT,
    index: 0,
    type: TIMEOUT,
    lineStart: 2,
    lineEnd: 4,
    startAt: 0,
    endsAt: 2,
    total: 1,
    description: `Smelly: Avoid using setTimeouts for tests. It might lead to Sleepy test or undeterministic behaviour based on where the test is executed.`,
    diagnostic: `Smelly: Avoid using setTimeouts for tests. It might lead to Sleepy test or undeterministic behaviour based on where the test is executed`,
  },
  {
    code: `const a: number = 1;
if (a === 1) { }`,
    language: TYPESCRIPT,
    index: 0,
    type: IF_STATEMENT,
    lineStart: 2,
    lineEnd: 2,
    startAt: 0,
    endsAt: 16,
    total: 1,
    description: `Smelly: Avoid Conditional Test Logic in the test. Having conditional logic points to a test case that requires different context to run. Split the test case to fit one context per test case.`,
    diagnostic: `Smelly: Avoid Conditional Test Logic in the test. Having conditional logic points to a test case that requires different context to run. Split the test case to fit one context per test case.`,
  },
  {

    code: `const a: number = 1;
if (a === 1) { }
if (a === 2) {
  console.log('this is a test');
}`,
    language: TYPESCRIPT,
    index: 1,
    type: IF_STATEMENT,
    lineStart: 3,
    lineEnd: 5,
    startAt: 0,
    endsAt: 1,
    total: 3,
    description: `Smelly: Avoid Conditional Test Logic in the test. Having conditional logic points to a test case that requires different context to run. Split the test case to fit one context per test case.`,
    diagnostic: `Smelly: Avoid Conditional Test Logic in the test. Having conditional logic points to a test case that requires different context to run. Split the test case to fit one context per test case.`,
  },
  {
    code: `const lists: any[] = [{}, {}];
  
for (const i of lists) {

}`,
    language: TYPESCRIPT,
    index: 0,
    type: FOR_OF,
    lineStart: 3,
    lineEnd: 5,
    startAt: 0,
    endsAt: 1,
    total: 1,
    description: `Smelly: Avoid Conditional Test Logic in the test. Having conditional logic points to a test case that requires different context to run. Split the test case to fit one context per test case.`,
    diagnostic: `Smelly: Avoid Conditional Test Logic in the test. Having conditional logic points to a test case that requires different context to run. Split the test case to fit one context per test case.`
  },
  {
    code: `const lists: any[] = [{}, {}];
  
for (const i in lists) {

}`,
    language: TYPESCRIPT,
    index: 0,
    type: FOR_IN,
    lineStart: 3,
    lineEnd: 5,
    startAt: 0,
    endsAt: 1,
    total: 1,
    description: `Smelly: Avoid Conditional Test Logic in the test. Having conditional logic points to a test case that requires different context to run. Split the test case to fit one context per test case.`,
    diagnostic: `Smelly: Avoid Conditional Test Logic in the test. Having conditional logic points to a test case that requires different context to run. Split the test case to fit one context per test case.`
  },
  {
    code: `const lists: any[] = [{}, {}];
  
for (let i =0; i < 2; i++) {

}`,
    language: TYPESCRIPT,
    index: 0,
    type: FOR,
    lineStart: 3,
    lineEnd: 5,
    startAt: 0,
    endsAt: 1,
    total: 1,
    description: `Smelly: Avoid Conditional Test Logic in the test. Having conditional logic points to a test case that requires different context to run. Split the test case to fit one context per test case.`,
    diagnostic: `Smelly: Avoid Conditional Test Logic in the test. Having conditional logic points to a test case that requires different context to run. Split the test case to fit one context per test case.`
  },
  {
    code: `setTimeout(() => {
  done();
});`,
    language: TYPESCRIPT,
    index: 0,
    type: TIMEOUT,
    lineStart: 1,
    lineEnd: 3,
    startAt: 0,
    endsAt: 2,
    total: 1,
    description: `Smelly: Avoid using setTimeouts for tests. It might lead to Sleepy test or undeterministic behaviour based on where the test is executed.`,
    diagnostic: `Smelly: Avoid using setTimeouts for tests. It might lead to Sleepy test or undeterministic behaviour based on where the test is executed`,
  },
  {
    code: `function done() {};
setTimeout(() => {
  done();
});`,
    language: TYPESCRIPT,
    index: 0,
    type: TIMEOUT,
    lineStart: 2,
    lineEnd: 4,
    startAt: 0,
    endsAt: 2,
    total: 1,
    description: `Smelly: Avoid using setTimeouts for tests. It might lead to Sleepy test or undeterministic behaviour based on where the test is executed.`,
    diagnostic: `Smelly: Avoid using setTimeouts for tests. It might lead to Sleepy test or undeterministic behaviour based on where the test is executed`,
  },
  {
    code: `describe("my test", () => {
  it("a", () => {
console.log(1);
  });
})`,
    language: JAVASCRIPT,
    index: 0,
    type: CONSOLE,
    lineStart: 3,
    lineEnd: 3,
    startAt: 0,
    endsAt: 14,
    total: 1,
    description: `Smelly: Avoid poluting the test output. It is known as the loudmouth`,
    diagnostic: `Smelly: Avoid poluting the test output. It is known as the loudmouth`,
  },
  {
    code: `describe("my test", () => {
  it("a", () => {
console.log(1);
  });
})`,
    language: TYPESCRIPT,
    index: 0,
    type: CONSOLE,
    lineStart: 3,
    lineEnd: 3,
    startAt: 0,
    endsAt: 14,
    total: 1,
    description: `Smelly: Avoid poluting the test output. It is known as the loudmouth`,
    diagnostic: `Smelly: Avoid poluting the test output. It is known as the loudmouth`,
  },
  {
    code: `describe("my test", () => {
  it("a", () => {
console.error(1);
  });
})`,
    language: JAVASCRIPT,
    index: 0,
    type: CONSOLE,
    lineStart: 3,
    lineEnd: 3,
    startAt: 0,
    endsAt: 16,
    total: 1,
    description: `Smelly: Avoid poluting the test output. It is known as the loudmouth`,
    diagnostic: `Smelly: Avoid poluting the test output. It is known as the loudmouth`,
  },
  {
    code: `describe("my test", () => {
  it("a", () => {
console.info(1);
  });
})`,
    language: JAVASCRIPT,
    index: 0,
    type: CONSOLE,
    lineStart: 3,
    lineEnd: 3,
    startAt: 0,
    endsAt: 15,
    total: 1,
    description: `Smelly: Avoid poluting the test output. It is known as the loudmouth`,
    diagnostic: `Smelly: Avoid poluting the test output. It is known as the loudmouth`,
  },
  {
    code: `describe("my test", () => {
  it("a", () => {
console.info(1);
  });
})`,
    language: TYPESCRIPT,
    index: 0,
    type: CONSOLE,
    lineStart: 3,
    lineEnd: 3,
    startAt: 0,
    endsAt: 15,
    total: 1,
    description: `Smelly: Avoid poluting the test output. It is known as the loudmouth`,
    diagnostic: `Smelly: Avoid poluting the test output. It is known as the loudmouth`,
  },
  {
    code: `describe("my test", () => {
  it("a", () => {
console.error(1);
  });
})`,
    language: TYPESCRIPT,
    index: 0,
    type: CONSOLE,
    lineStart: 3,
    lineEnd: 3,
    startAt: 0,
    endsAt: 16,
    total: 1,
    description: `Smelly: Avoid poluting the test output. It is known as the loudmouth`,
    diagnostic: `Smelly: Avoid poluting the test output. It is known as the loudmouth`,
  },
  {
    code: `jest.mock("../");
jest.mock("../");
jest.mock("../");
jest.mock("../");
jest.mock("../");
jest.mock("../");
jest.mock("../");
jest.mock("../");
jest.mock("../");
jest.mock("../");`,
    language: TYPESCRIPT,
    index: 0,
    type: MOCKERY,
    lineStart: 1,
    lineEnd: 10,
    startAt: 0,
    endsAt: 16,
    total: 1,
    description: `Smelly: Avoid mocking too many dependencies in the test file. Split the test cases to distribute the mocking load.`,
    diagnostic: `Smelly: Avoid mocking too many dependencies in the test file. Split the test cases to distribute the mocking load.`,
  },
  {
    code: `jest.mock("../");
jest.mock("../");
jest.mock("../");
jest.mock("../");
jest.mock("../");
jest.mock("../");
jest.mock("../");
jest.mock("../");
jest.mock("../");
jest.mock("../");
jest.mock("../");`,
    language: TYPESCRIPT,
    index: 0,
    type: MOCKERY,
    lineStart: 1,
    lineEnd: 11,
    startAt: 0,
    endsAt: 16,
    total: 1,
    description: `Smelly: Avoid mocking too many dependencies in the test file. Split the test cases to distribute the mocking load.`,
    diagnostic: `Smelly: Avoid mocking too many dependencies in the test file. Split the test cases to distribute the mocking load.`,
  }
  ].forEach(({ code, language, index, type, lineStart, lineEnd, startAt, endsAt, total, description, diagnostic }) => {
    test(`detect test smell for ${language}: type ${type} at index ${index}`, () => {
      const smellDetector = new SmellDetector(code, language);
      const result = smellDetector.findAll();

      assert.equal(result.length, total, 'number of detected smells is not correct');
      assert.equal(result[index].type, type, 'type');
      assert.equal(result[index].lineStart, lineStart, 'lineStart');
      assert.equal(result[index].lineEnd, lineEnd, 'lineEnd');
      assert.equal(result[index].startAt, startAt, 'startAt');
      assert.equal(result[index].endsAt, endsAt, 'endsAt');
      assert.equal(result[index].description, description, `description for ${type} does not match`);
      assert.equal(result[index].diagnostic, diagnostic, `diagnostic for ${type} does not match`);
    });
  });

  [{
    code: `
jest.mock("../");`,
    language: TYPESCRIPT,
  }
  ].forEach(({ code, language }) => {
    test(`detect code without smells`, () => {
      const smellDetector = new SmellDetector(code, language);
      const result = smellDetector.findAll();

      assert.equal(result.length, 0);
    });
  });
});
