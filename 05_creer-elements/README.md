# Exercice : Créer des éléments

Implémentez les fonctions ci-dessous. N'oubliez pas de valider votre
code avec des tests automatisés.

```js
/**
 * Creates a label with an input of the given type.
 * @param {string} label
 * @param {string} type
 * @param {string} name
 * @returns {HTMLLabelElement}
 */
function createField(label, type, name) {
    // TODO
}

test("create a field with the given label, type and name", () => {
    // TODO
});

/**
 * Creates a fieldset with the given legend and radio inputs.
 * @param {string} legend
 * @param {Array<{label: string, value: string}>} radios
 * @returns {HTMLFieldSetElement}
 */
function createRadios(legend, radios) {
    // TODO
}

test("create a textfield with the given radio inputs", () => {
    // TODO
});

/**
 * Creates a table with the given rows.
 * Numerical cells have a "num" CSS class.
 * @param {Array<Array<string|number>>} rows
 * @returns {HTMLTableElement}
 */
function createTable(rows) {
    // TODO
}

test("creates a table with the given rows", () => {
    // TODO
});
```
