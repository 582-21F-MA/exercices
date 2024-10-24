// @ts-ignore
import { expect, test } from "https://maxime-pigeon.github.io/t/test.js";

type student = { name: string; grade: number };
type cohort = student[];

function addStudent(c: cohort, name: string, grade: number): cohort {
    const newStudent = { name, grade };
    const updatedCohort = c.concat([newStudent]);
    return updatedCohort;
}

function average(c: cohort): number {
    let sum = 0;
    for (const student of c) sum += student.grade;
    return sum / c.length;
}

function getGrade(c: cohort, name: string): number {
    for (const student of c) {
        if (student.name !== name) continue;
        return student.grade;
    }
    return 0;
}

type tokens = { cmd: string; args: string[] };

const cmds = {
    exit: "exit",
    average: "average",
    grade: "grade",
    add: "add",
    usage: "usage",
};

const usage = `
USAGE:
    <name> <grade>  add a student
    average         get the average
    note <name>     get the note of a student
`;

function tokenize(input: string): tokens {
    const words = input.split(" ");
    if (input === "") return { cmd: cmds.usage, args: [] };
    if (words[0] === cmds.exit) return { cmd: cmds.exit, args: [] };
    if (words[0] === cmds.average) return { cmd: cmds.average, args: [] };
    if (words[0] === cmds.grade) {
        const name = words.slice(1).join(" ");
        return { cmd: cmds.grade, args: [name] };
    }
    if (words.length < 2) return { cmd: cmds.usage, args: [] };
    const name = words.slice(0, -1).join(" ");
    const grade = words.slice(-1).join();
    return { cmd: cmds.add, args: [name, grade] };
}

test("should return the grade", () => {
    expect(tokenize("Bob 92").args[1]).toBe("92");
});
test("should return the name", () => {
    expect(tokenize("Bob 92").args[0]).toBe("Bob");
});
test("should return 'add'", () => {
    expect(tokenize("Bob 92").cmd).toBe(cmds.add);
});
test("should return 'grade'", () => {
    expect(tokenize("grade Bob").cmd).toBe(cmds.grade);
});
test("should return the name", () => {
    expect(tokenize("grade Bob").args).toBe(["Bob"]);
});
test("should return 'average'", () => {
    expect(tokenize("average").cmd).toBe(cmds.average);
});
test("should return 'usage'", () => {
    expect(tokenize("").cmd).toBe(cmds.usage);
    expect(tokenize("quit").cmd).toBe(cmds.usage);
});
test("should return 'exit'", () => {
    expect(tokenize("exit").cmd).toBe(cmds.exit);
});

function interfaceLoop(c: cohort = []): void {
    const input = prompt(">")!;
    const t = tokenize(input);
    if (t.cmd === cmds.exit) return;
    if (t.cmd === cmds.usage) console.log(usage);
    if (t.cmd === cmds.average) console.log(average(c));
    if (t.cmd === cmds.grade) console.log(getGrade(c, t.args[0]));
    if (t.cmd === cmds.add) c = addStudent(c, t.args[0], Number(t.args[1]));
    return interfaceLoop(c);
}

interfaceLoop();
