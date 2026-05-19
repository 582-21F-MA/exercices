/**
 * Renders the given task object into an HTML field with its label.
 * The field is checked if the task is done.
 * @param {{name: string, isDone: boolean}} task
 * @returns {HTMLLabelElement}
 */
function renderTask(task) {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = task.isDone;
    label.append(task.name, input);
    return label;
}

test("return an element representing the given task", () => {
    const el = renderTask({ name: "foo", isDone: false });
    expect(el.outerHTML).toBe("<label>foo<input type=\"checkbox\"></label>");
});

test("set checked to true only if the given task is done", () => {
    const el = renderTask({ name: "foo", isDone: true });
    const input = el.querySelector("input");
    expect(input.checked).toBe(true);

    const el2 = renderTask({ name: "foo", isDone: false });
    const input2 = el2.querySelector("input");
    expect(input2.checked).toBe(false);
});

/**
 * Renders the given `date` in French with a "today" class if `date`
 * is `today`.
 * @param {Date} date
 * @param {Date} [today]
 * @returns {HTMLTimeElement}
 */
function renderDate(date, today = new Date()) {
    const time = document.createElement("time");
    time.append(date.toLocaleDateString("fr", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }));
    if (date.toDateString() === today.toDateString()) {
        time.classList.add("today");
    }
    return time;
}

test("return an element representing the given date", () => {
    const date = new Date(2000, 1, 1);
    const el = renderDate(date);
    expect(el.textContent).toBe("mardi 1 février 2000");
});

test("add today class only if given date is today", () => {
    const date = new Date(2000, 1, 1);
    const el = renderDate(date, new Date(2000, 1, 1));
    expect(el.classList.contains("today")).toBe(true);

    const el2 = renderDate(date, new Date(2000, 1, 2));
    expect(el2.classList.contains("today")).toBe(false);

    const el3 = renderDate(date, new Date(2000, 1, 1, 11));
    expect(el3.classList.contains("today")).toBe(true);
});

/**
 * Renders a list of colors, with each item displayed in its respective color.
 * @param {Array<string>} colors
 * @returns {Array<HTMLLIElement>}
 */
function renderColors(colors) {
    return colors.map(color => {
        const li = document.createElement("li");
        li.style.color = color;
        li.append(color);
        return li;
    });
}

test("render the list of colors", () => {
    const lis1 = renderColors(["red"]);
    expect(lis1[0].outerHTML).toBe("<li style=\"color: red;\">red</li>");

    const lis2 = renderColors(["blue", "green"]);
    expect(lis2[0].outerHTML).toBe("<li style=\"color: blue;\">blue</li>");
    expect(lis2[1].outerHTML).toBe("<li style=\"color: green;\">green</li>");
});
