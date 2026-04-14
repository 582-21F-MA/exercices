function main() {
    const originalPrice = Number(prompt("Valeur à neuf"));
    if (Number.isNaN(originalPrice) || originalPrice < 0) {
        alert("La valeur à neuf doit être un nombre positif");
        return;
    }

    const originalYear = Number(prompt("Année de production"));
    if (Number.isNaN(originalYear)) {
        alert("La valeur à neuf doit être un nombre");
        return;
    }
    const currentYear = new Date().getFullYear();
    if (!isYearValid(originalYear, currentYear)) {
        alert(`L'année de production doit être entre 2000 et ${currentYear}`);
        return;
    }

    alert(
        `La valeur de revente est ${resellValue(originalPrice, originalYear, currentYear)}`,
    );
}

main();

/**
 * Determines if the given orginal year is valid.
 * @param {number} originalYear
 * @param {number} currentYear
 * @returns {boolean}
 */
function isYearValid(originalYear, currentYear) {
    const minYear = 2000;
    return originalYear >= minYear && originalYear <= currentYear;
}

expect(isYearValid(1999, 2026)).toBe(false);
expect(isYearValid(2001, 2026)).toBe(true);
expect(isYearValid(2027, 2026)).toBe(false);

/**
 * Computes the resell value for the given price and year.
 * @param {number} originalPrice
 * @param {number} originalYear
 * @param {number} currentYear
 * @returns {number}
 */
function resellValue(originalPrice, originalYear, currentYear) {
    const age = currentYear - originalYear;
    if (age < 3) return 0.8 * originalPrice;
    if (age >= 3 && age <= 10) return 0.7 * originalPrice;
    if (age > 10) return 0.5 * originalPrice;
}

expect(resellValue(100, -1, 0)).toBe(80);
expect(resellValue(100, -5, 0)).toBe(70);
expect(resellValue(100, -15, 0)).toBe(50);
