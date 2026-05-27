# Exercice : Événements

Implémentez les fonctions suivantes :

```js
/**
 * Creates a button displaying 0 initially and incrementing by 1 on every click.
 * @returns {HTMLButtonElement}
 */
function createCounter() {
    // TODO
}

test("create a counter button starting at 0", () => {
    const button = createCounter();
    expect(button.outerHTML).toBe("<button>0</button>");
});

test("increment the counter when clicked", () => {
    const button = createCounter();
    button.dispatchEvent(new MouseEvent("click"));
    expect(button.textContent).toBe("1");
    button.dispatchEvent(new MouseEvent("click"));
    expect(button.textContent).toBe("2");
    button.dispatchEvent(new MouseEvent("click"));
    expect(button.textContent).toBe("3");
});

/**
 * Creates a password field with a visibility toggle.
 * @returns {HTMLLabelElement}
 */
function createPasswordField() {
    // TODO
}

test("create a label with a password and a visiblity button", () => {
    const field = createPasswordField();
    expect(field.outerHTML)
        .toContain("<label>Password");
    expect(field.outerHTML)
        .toContain("<input type=\"password\" name=\"password\">");
    expect(field.outerHTML)
        .toContain("<button>Show</button>");
});

test("toggle password visibility when the button is clicked", () => {
    const field = createPasswordField();
    const input = field.querySelector("input");
    const button = field.querySelector("button");
    button.dispatchEvent(new MouseEvent("click"));
    expect(input.type).toBe("text");
    expect(button.textContent).toBe("Hide");
    button.dispatchEvent(new MouseEvent("click"));
    expect(input.type).toBe("password");
    expect(button.textContent).toBe("Show");
});
```
