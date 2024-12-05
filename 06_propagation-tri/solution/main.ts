const rows = Array.from(document.querySelectorAll("tbody tr"));
const tbody = document.querySelector("tbody") as HTMLElement;
const headTr = document.querySelector("thead tr") as HTMLElement;
const headers = Array.from(headTr.children);

headTr.addEventListener("click", handleClick);

function handleClick(event: MouseEvent): void {
    const element = event.target as HTMLElement;
    if (element.nodeName !== "TH") return;
    sortTable(element);
}

function sortTable(th: HTMLElement): void {
    const sortType = th.getAttribute("data-type");
    const isInvalidSortType = sortType !== "string" && sortType !== "number";
    if (isInvalidSortType) return;

    const columnIndex = headers.indexOf(th);
    const isReversed = Array.from(th.classList).includes("desc");

    const updatedRows = rows.toSorted(
        compareRows(columnIndex, sortType, !isReversed),
    );
    tbody.replaceChildren(...updatedRows);

    updateClasses(th, isReversed);
}

function updateClasses(th: HTMLElement, reverse: boolean): void {
    for (const h of headers) h.classList.remove("asc", "desc");
    if (reverse) return th.classList.add("desc");
    th.classList.add("asc");
}

function compareRows(
    columnIndex: number,
    sortType: "string" | "number",
    reverse: boolean,
): (row1: Element, row2: Element) => number {
    return (row1, row2) => {
        const key1 = row1.children[columnIndex].textContent;
        const key2 = row2.children[columnIndex].textContent;
        if (!key1 || !key2) return 0;

        const order = reverse ? -1 : 1;

        if (sortType === "string") {
            return order * key1.localeCompare(key2);
        }
        if (sortType === "number") {
            return order * (Number(key1) - Number(key2));
        }
        return 0;
    };
}
