/**
 * Creates a label with an input of the given type.
 * @param {string} label
 * @param {string} type
 * @param {string} name
 * @returns {HTMLLabelElement}
 */
function createField(label, type, name) {
    const labelEl = document.createElement("label");
    const input = document.createElement("input");
    labelEl.textContent = label;
    input.type = type;
    input.name = name;
    labelEl.append(input);
    return labelEl;
}

test("create a field with the given label, type and name", () => {
    expect(createField("foo", "text", "bar").outerHTML)
        .toBe("<label>foo<input type=\"text\" name=\"bar\"></label>");
    expect(createField("bar", "date", "foo").outerHTML)
        .toBe("<label>bar<input type=\"date\" name=\"foo\"></label>");
});

/**
 * Creates a fieldset with the given legend and radio inputs.
 * @param {string} legend
 * @param {Array<{label: string, value: string}>} radios
 * @returns {HTMLFieldSetElement}
 */
function createRadios(legend, radios) {
    const fieldset = document.createElement("fieldset");
    const legendEl = document.createElement("legend");
    legendEl.textContent = legend;
    fieldset.append(legendEl);
    const fields = radios.map(radio =>
        createField(radio.label, "radio", radio.value)
    );
    fieldset.append(...fields);
    return fieldset;
}

test("create a textfield with the given radio inputs", () => {
    const html = createRadios(
        "Sexe",
        [
            { label: "Homme", value: "homme" },
            { label: "Femme", value: "femme" },
        ],
    ).outerHTML;
    expect(html)
        .toContain("<legend>Sexe</legend");
    expect(html)
        .toContain("<label>Homme<input type=\"radio\" name=\"homme\"></label>");
    expect(html)
        .toContain("<label>Femme<input type=\"radio\" name=\"femme\"></label>");
});

/**
 * Creates a table with the given rows.
 * Numerical cells have a "num" CSS class.
 * @param {Array<Array<string|number>>} rows
 * @returns {HTMLTableElement}
 */
function createTable(rows) {
    const table = document.createElement("table");
    const trs = rows.map(row => {
        const tr = document.createElement("tr");
        const tds = row.map(cell => {
            const td = document.createElement("td");
            td.textContent = cell;
            if (typeof cell === "number") td.classList.add("num");
            return td;
        });
        tr.append(...tds);
        return tr;
    });
    table.append(...trs);
    return table;
}

test("creates a table with the given rows", () => {
    const html = createTable([["Alice", 30], ["Bob", 25]]).outerHTML;
    expect(html).toContain("<td>Alice</td>");
    expect(html).toContain("<td class=\"num\">30</td>");
    expect(html).toContain("<td>Bob</td>");
    expect(html).toContain("<td class=\"num\">25</td>");
});
