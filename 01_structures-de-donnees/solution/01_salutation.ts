// @ts-ignore
import { expect, test } from "https://maxime-pigeon.github.io/t/test.js";

type person = { name: string; age: years };
type years = number;

function newPerson(name: string, age: years): person {
    return { name, age };
}

test("should create a person object with the given name and age", () => {
    const actual = newPerson("Laios", 27);
    const expected = { name: "Laios", age: 27 };
    expect(actual).toBe(expected);
});
