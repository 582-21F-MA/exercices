const mountains = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

type mountain = { name: string; height: number; place: string };

function createTr(m: mountain): HTMLTableRowElement {
    const tr = document.createElement("tr");
    tr.append(createTd(m.name));
    tr.append(createTd(m.height.toString()));
    tr.append(createTd(m.place));
    return tr;
}

function createTd(content: string): HTMLElement {
    const td = document.createElement("td");
    td.textContent = content;
    return td;
}

function createTBody(mountains: mountain[]): HTMLElement {
    const tbody = document.createElement("tbody");
    for (const m of mountains) {
        const tr = createTr(m);
        tbody.append(tr);
    }
    return tbody;
}

function main(): void {
    const table = document.querySelector("table") as HTMLTableElement;
    table.append(createTBody(mountains));
}

main();
