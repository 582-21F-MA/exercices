function main() {
    const now = new Date();
    const body = document.querySelector("body");
    const currentYear = now.getFullYear();
    body.append(createSelect(1, 31, now.getDate()));
    body.append(createSelect(1, 12, now.getMonth() + 1));
    body.append(createSelect(1990, currentYear, currentYear));
}

main();

/**
 * Creates a <select> with a range of options from min to max.
 * The option whose value matches selected is selected by default.
 * @param {number} min
 * @param {number} max
 * @param {number} selected
 * @returns {HTMLSelectElement}
 */
function createSelect(min, max, selected) {
    const select = document.createElement("select");
    for (let i = min; i <= max; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        if (i === selected) option.selected = true;
        select.append(option);
    }
    return select;
}

test("create a <select> with options from min to max", () => {
    const select = createSelect(1, 3, 2);
    const options = select.querySelectorAll("option");
    expect(options.length).toBe(3);
    expect(options[0].textContent).toBe("1");
    expect(options[1].textContent).toBe("2");
    expect(options[2].textContent).toBe("3");
    expect(options[0].value).toBe("1");
    expect(options[1].value).toBe("2");
    expect(options[2].value).toBe("3");
    expect(options[0].selected).toBe(false);
    expect(options[1].selected).toBe(true);
    expect(options[2].selected).toBe(false);
});
