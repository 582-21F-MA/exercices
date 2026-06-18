/**
 * Entry point;
 */
function main() {
    document.body.append(createApp());
}

main();

/**
 * Creates an app with an ordered list you can append to.
 * @returns {HTMLDivElement}
 */
function createApp() {
    const ol = document.createElement("ol");
    const form = createForm(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ol.append(li);
    });
    const div = document.createElement("div");
    div.append(form, ol);
    return div;
}

test("add items to the ordered list", () => {
    const app = createApp();
    const form = app.querySelector("form");
    const input = app.querySelector("input");
    const ol = app.querySelector("ol");

    input.value = "Apples";
    form.dispatchEvent(new SubmitEvent("submit"));
    expect(ol.outerHTML).toBe("<ol><li>Apples</li></ol>");

    input.value = "Bananas";
    form.dispatchEvent(new SubmitEvent("submit"));
    expect(ol.outerHTML).toBe("<ol><li>Apples</li><li>Bananas</li></ol>");
});

/**
 * Creates a form with a text input.
 * @param {(item: string) => void} onSubmit
 * @returns {HTMLFormElement}
 */
function createForm(onSubmit) {
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.append("Item ", input);
    const form = document.createElement("form");
    form.method = "post";
    form.append(label);
    form.addEventListener("submit", event => {
        event.preventDefault();
        onSubmit(input.value);
        input.value = "";
    });
    return form;
}

test("create a form with a text input", () => {
    const form = createForm(() => {});
    expect(form.outerHTML).toBe("<form><label>Item <input></label></form>");
});

test("onSubmit is called on form submission", () => {
    const items = [];
    const form = createForm(item => items.push(item));
    const input = form.querySelector("input");

    input.value = "Milk";
    form.dispatchEvent(new SubmitEvent("submit"));
    expect(items.length).toBe(1);
    expect(items[0]).toBe("Milk");
});
