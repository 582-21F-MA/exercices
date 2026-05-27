/**
 * Creates a container that shows which child was clicked.
 * @returns {HTMLElement}
 */
function createTargetInspector() {
    const div = document.createElement("div");
    const p = document.createElement("p");
    div.append(p);
    div.addEventListener("click", (event) => {
        if (event.target === div) {
            p.textContent = "";
            return;
        }
        p.textContent = `<${event.target.tagName.toLowerCase()}>`;
    });
    return div;
}

test("show which child was clicked", () => {
    const div = createTargetInspector();
    const p = div.querySelector("p");

    div.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(p.textContent).toBe("");

    const span = document.createElement("span");
    div.append(span);
    span.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(p.textContent).toBe("<span>");

    div.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(p.textContent).toBe("");

    const em = document.createElement("em");
    div.append(em);
    em.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(p.textContent).toBe("<em>");

    div.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(p.textContent).toBe("");
});
