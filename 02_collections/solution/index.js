function main() {
    const input = prompt("Saisissez une phrase") ?? "";
    const words = countWords(input);
    alert(wordsToString(words));
}

main();

/**
 * Normalizes the given word.
 * @param {string} word
 * @returns {string}
 */
function normalize(word) {
    const PUNCTUATION = `.,!?;:"()-[]{}@#$%&*`;
    return word
        .toLowerCase()
        .split()
        .filter(char => !PUNCTUATION.includes(char))
        .join("");
}

expect(normalize("Hello")).toEqual("hello");
expect(normalize("word.")).toEqual("word");
expect(normalize("don't")).toEqual("don't");

/**
 * Counts the occurrences of each word in a string.
 * @param {string} str
 * @returns {Map<string, number>}
 */
function countWords(str) {
    const words = str.split(" ").map(normalize);
    const results = new Map();
    for (const word of words) {
        const count = results.get(word) ?? 0;
        results.set(word, count + 1);
    }
    return results;
}

expect(countWords("a a b")).toEqual(new Map([["a", 2], ["b", 1]]));
expect(countWords("Hello, world! Hello.")).toEqual(
    new Map([["hello", 2], ["world", 1]]),
);

/**
 * Formats a word count Map as a string.
 * @param {Map<string, number>} words
 * @returns {string}
 */
function wordsToString(words) {
    let results = "";
    for (const pair of words) {
        results += `${pair[0]} : ${pair[1]}\n`;
    }
    return results;
}

expect(wordsToString(new Map([["a", 1]]))).toEqual("a : 1\n");
expect(wordsToString(new Map([["a", 2], ["b", 1]]))).toEqual("a : 2\nb : 1\n");
