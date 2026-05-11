/**
 * Counts how many elements are in the given parent including the parent.
 * @param {HTMLElement} parent
 * @returns {number}
 */
function countElements(parent) {
    return parent.querySelectorAll("*").length + 1;
}

test("return the total number of elements including the parent", () => {
    const parent = document.createElement("div");
    expect(countElements(parent)).toBe(1);

    parent.innerHTML = "<h1>Foo</h1>";
    expect(countElements(parent)).toBe(2);

    parent.innerHTML = "<h1>Foo<span>bar</span></h1>";
    expect(countElements(parent)).toBe(3);
});

/**
 * Determines if there's an element in the parent matching the tag.
 * @param {HTMLElement} parent
 * @returns {boolean}
 */
function containsTag(parent, tag) {
    return parent.querySelector(tag) !== null;
}

test("return true if tag is in parent", () => {
    const parent = document.createElement("div");
    expect(containsTag(parent, "span")).toBe(false);

    parent.innerHTML = "<span>foo</span>";
    expect(containsTag(parent, "span")).toBe(true);

    parent.innerHTML = "<h1>Foo<span>bar</span></h1>";
    expect(containsTag(parent, "span")).toBe(true);
});

/**
 * Counts the total number of words in the given element.
 * @param {HTMLElement} element
 * @returns {number}
 */
function wordCount(element) {
    return element.textContent
        .split(" ")
        .filter(str => str.length > 0)
        .length;
}

test("count the total number of words", () => {
    const parent = document.createElement("div");
    expect(wordCount(parent)).toBe(0);

    parent.innerHTML = "<span>foo</span>";
    expect(wordCount(parent)).toBe(1);

    parent.innerHTML = "<span>foo <i>bar super</i></span>";
    expect(wordCount(parent)).toBe(3);
});
