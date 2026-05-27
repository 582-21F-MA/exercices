Exercice : Propagation

Pour cet exercice, votre tâche est d'implémenter une fonction qui
retourne un `<div>` dans lequel se trouve un paragraphe qui affiche la
balise de l'élément enfant sur lequel l'utilisateur clique. Par exemple,
si le `<div>` contient un `<span>` et un `<em>`, alors `<span>` est
affiché dans le paragraphe lorsque l'utilisateur clique sur le `<span>`,
et `<em>` est affiché lorsque l'utilisateur clique sur le `<em>`. Le
paragraphe est vide lorsque l'utilisateur clique sur le `<div>` parent.

Voir la propriété [tagName].

[tagName]: https://developer.mozilla.org/fr/docs/Web/API/Element/tagName

```js
/**
 * Creates a container that shows which child was clicked.
 * @returns {HTMLElement}
 */
function createTargetInspector() {
    // TODO
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
```
