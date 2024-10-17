// @ts-ignore
import { expect, test } from "https://maxime-pigeon.github.io/t/test.js";

function reverse(arr: any[]): any[] {
    const res: any[] = [];
    for (let i = arr.length - 1; i >= 0; i--) res.push(arr[i]);
    return res;
}

test("should reverse the array", () => {
    const actual = reverse([1, 2, 3]);
    const expected = [3, 2, 1];
    expect(actual).toBe(expected);
});

function reverseInPlace(arr: any[]): void {
    for (let i = 0; i < arr.length / 2; i++) {
        const frontIndex = i;
        const backIndex = arr.length - 1 - i;
        swap(arr, frontIndex, backIndex);
    }
}

test("should reverse the array in place (odd length))", () => {
    const arr = [1, 2, 3];
    reverseInPlace(arr);
    const actual = arr;
    const expected = [3, 2, 1];
    expect(actual).toBe(expected);
});

function swap(arr: any[], frontIndex: number, backIndex: number): void {
    const frontElement = arr[frontIndex];
    arr[frontIndex] = arr[backIndex];
    arr[backIndex] = frontElement;
}

test("should swap two elements in place", () => {
    const arr = [1, 2, 3, 4];
    swap(arr, 1, 2);
    const actual = arr;
    const expected = [1, 3, 2, 4];
    expect(actual).toBe(expected);
});

test("should reverse the array in place (even length)", () => {
    const arr = [1, 2, 3, 4];
    reverseInPlace(arr);
    const actual = arr;
    const expected = [4, 3, 2, 1];
    expect(actual).toBe(expected);
});
