// @ts-ignore
import { expect, test } from "https://maxime-pigeon.github.io/t/test.js";

const as = 1, jack = 11, queen = 12, king = 13;
const clubs = 1, diamonds = 2, hearts = 3, spades = 4;

type card = { rank: number; suit: number };

function newCard(rank: number, suit: number): card {
    return { rank, suit };
}

function cardToString(c: card): string {
    let rank = String(c.rank);
    if (c.rank === as) rank = "as";
    if (c.rank === jack) rank = "valet";
    if (c.rank === queen) rank = "reine";
    if (c.rank === king) rank = "roi";
    let suit = "";
    if (c.suit === clubs) suit = "trèfle";
    if (c.suit === diamonds) suit = "carreau";
    if (c.suit === hearts) suit = "coeur";
    if (c.suit === spades) suit = "pique";
    return `${rank} de ${suit}`;
}

type deck = card[];

function newDeck(): deck {
    let d: card[] = [];
    for (let suit = 1; suit <= 4; suit++) {
        for (let rank = 1; rank <= 13; rank++) {
            d.push({ rank, suit });
        }
    }
    return d;
}

function drawCard(d: deck): { deck: deck; card: card } {
    return {
        deck: d.slice(1),
        card: d[0],
    };
}

test("should return the first card from a deck", () => {
    const d = [{ rank: 1, suit: 1 }];
    const actual = drawCard(d).card;
    const expected = { rank: 1, suit: 1 };
    expect(actual).toBe(expected);
});

test("should return the deck minus the first card", () => {
    const d = [{ rank: 1, suit: 1 }];
    const actual = drawCard(d).deck;
    const expected = [];
    expect(actual).toBe(expected);
});
