function handleKeydown(event: KeyboardEvent): void {
    const currentSize = Number(p.style.fontSize.slice(0, -2));

    if (currentSize > 50) {
        p.textContent = "💥";
        return;
    }

    let newSize = currentSize;
    if (event.key === "ArrowUp") {
        newSize = currentSize * 1.1;
    }
    if (event.key === "ArrowDown") {
        newSize = currentSize * 0.9;
    }
    p.style.fontSize = `${newSize}px`;
}

function appendBallon(p: HTMLParagraphElement): void {
    return function () {
        p.textContent = "🎈";
        p.style.fontSize = "16px";
    };
}

function main(): void {
    const p = document.querySelector("p") as HTMLParagraphElement;
    p.style.fontSize = "16px";

    window.addEventListener("keydown", handleKeydown);

    const button = document.querySelector("button") as HTMLButtonElement;
    button.addEventListener("click", appendBallon(p));
}
