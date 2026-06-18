/**
 * Entry point;
 */
function main() {
    document.body.append(createApp(["Foo", "Bar", "FooBar"]));
}

main();

/**
 * Creates an app with an unordered list you can filter.
 * @param {Array<string>} items
 * @returns {HTMLDivElement}
 */
function createApp(items) {
    const ul = createUL(items);
    const form = createForm(query => {
        const matchedItems = items.filter(item => item.includes(query));
        const lis = createUL(matchedItems).children;
        ul.replaceChildren(...lis);
    });
    const div = document.createElement("div");
    div.append(form, ul);
    return div;
}

test("filter items in the unordered list", () => {
    const app = createApp(["Foo", "Bar", "FooBar"]);
    const input = app.querySelector("input");
    const ul = app.querySelector("ul");

    expect(ul.outerHTML).toBe(
        "<ul><li>Foo</li><li>Bar</li><li>FooBar</li></ul>",
    );

    input.value = "Foo";
    input.dispatchEvent(new InputEvent("input"));
    expect(ul.outerHTML).toBe("<ul><li>Foo</li><li>FooBar</li></ul>");

    input.value = "Bar";
    input.dispatchEvent(new InputEvent("input"));
    expect(ul.outerHTML).toBe("<ul><li>Bar</li><li>FooBar</li></ul>");
});

/**
 * Creates an unordered list.
 * @param {string[]} items
 * @returns {HTMLUListElement}
 */
function createUL(items) {
    const ul = document.createElement("ul");
    const lis = items.map(item => {
        const li = document.createElement("li");
        li.textContent = item;
        return li;
    });
    ul.append(...lis);
    return ul;
}

test("create an unordered list", () => {
    const ul = createUL(["Foo", "Bar"]);
    expect(ul.outerHTML).toBe("<ul><li>Foo</li><li>Bar</li></ul>");
});

/**
 * Creates a form with a text input.
 * @param {(query: string) => void} onInput
 * @returns {HTMLFormElement}
 */
function createForm(onInput) {
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.append("Search ", input);
    const form = document.createElement("form");
    form.method = "get";
    form.append(label);
    form.addEventListener("submit", event => event.preventDefault());
    input.addEventListener("input", () => onInput(input.value));
    return form;
}

test("onInput is called on input", () => {
    const queries = [];
    const form = createForm(query => queries.push(query));
    const input = form.querySelector("input");

    input.value = "Foo";
    input.dispatchEvent(new InputEvent("input"));
    expect(queries.length).toBe(1);
    expect(queries[0]).toBe("Foo");
});
