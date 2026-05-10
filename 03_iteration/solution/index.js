/**
 * Returns the sum of all numbers.
 * @param {Array<number>} numbers
 * @returns {number}
 */
function sum(numbers) {
    let total = 0;
    for (const n of numbers) total += n;
    return total;
}

expect(sum([])).toBe(0);
expect(sum([1])).toBe(1);
expect(sum([1, 2, 3])).toBe(6);

/**
 * Returns the average of all numbers.
 * @param {Array<number>} numbers
 * @returns {number}
 */
function average(numbers) {
    const length = numbers.length;
    if (length === 0) return 0;
    return sum(numbers) / length;
}

expect(average([])).toBe(0);
expect(average([2])).toBe(2);
expect(average([1, 2, 3])).toBe(2);

/**
 * Returns true if all numbers are equal.
 * @param {Array<number>} numbers
 * @returns {boolean}
 */
function areAllSame(numbers) {
    const first = numbers[0];
    return numbers.every(n => n === first);
}

expect(areAllSame([])).toBe(true);
expect(areAllSame([1])).toBe(true);
expect(areAllSame([1, 1, 1])).toBe(true);
expect(areAllSame([1, 2, 1])).toBe(false);

/**
 * Returns true if numbers are sorted in ascending order.
 * @param {Array<number>} numbers
 * @returns {boolean}
 */
function isSortedAsc(numbers) {
    let prev = numbers[0];
    for (const n of numbers) {
        if (n < prev) return false;
        prev = n;
    }
    return true;
}

expect(isSortedAsc([])).toBe(true);
expect(isSortedAsc([1, 2, 3])).toBe(true);
expect(isSortedAsc([1, 1, 2])).toBe(true);
expect(isSortedAsc([3, 2, 1])).toBe(false);

/**
 * Returns true if numbers are sorted in descending order.
 * @param {Array<number>} numbers
 * @returns {boolean}
 */
function isSortedDesc(numbers) {
    let prev = numbers[0];
    for (const n of numbers) {
        if (n > prev) return false;
        prev = n;
    }
    return true;
}

expect(isSortedDesc([])).toBe(true);
expect(isSortedDesc([3, 2, 1])).toBe(true);
expect(isSortedDesc([3, 3, 1])).toBe(true);
expect(isSortedDesc([1, 2, 3])).toBe(false);

/**
 * Returns the array with duplicates removed.
 * @param {Array<number>} numbers
 * @returns {Array<number>}
 */
function uniques(numbers) {
    return numbers.filter((n, i) => numbers.indexOf(n) === i);
}

expect(uniques([])).toEqual([]);
expect(uniques([1, 2, 3])).toEqual([1, 2, 3]);
expect(uniques([1, 1, 2])).toEqual([1, 2]);
expect(uniques([1, 1, 1])).toEqual([1]);

/**
 * Returns true if at least two numbers are equal.
 * @param {Array<number>} numbers
 * @returns {boolean}
 */
function areTwoSame(numbers) {
    return numbers.some((n, i) => numbers.indexOf(n) !== i);
}

expect(areTwoSame([])).toBe(false);
expect(areTwoSame([1, 2, 3])).toBe(false);
expect(areTwoSame([1, 2, 1])).toBe(true);
expect(areTwoSame([1, 1, 1])).toBe(true);

/**
 * Returns true if all numbers are unique.
 * @param {Array<number>} numbers
 * @returns {boolean}
 */
function areUniques(numbers) {
    return !areTwoSame(numbers);
}

expect(areUniques([])).toBe(true);
expect(areUniques([1, 2, 3])).toBe(true);
expect(areUniques([1, 2, 1])).toBe(false);
