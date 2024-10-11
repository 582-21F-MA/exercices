// @ts-ignore
import { expect, test } from "https://maxime-pigeon.github.io/t/test.js";

type episode = { title: string; synopsis: string };

function newEpisode(title: string, synopsis: string): episode {
    return { title, synopsis };
}

test("should create a new episode", () => {
    const actual = newEpisode(
        "Hot Pot / Tart",
        "After a crushing loss, Laios, Marcille and Chilchuck quickly reenter the dungeon in order to save Falin, but this time, they have a foolproof survival plan.",
    );
    const expected = {
        title: "Hot Pot / Tart",
        synopsis:
            "After a crushing loss, Laios, Marcille and Chilchuck quickly reenter the dungeon in order to save Falin, but this time, they have a foolproof survival plan.",
    };
    expect(actual).toBe(expected);
});

function summarize(max: number, ep: episode): string {
    if (ep.synopsis.length < max) return ep.synopsis;
    return ep.synopsis.slice(0, max) + "...";
}

test("should return the episode synopsis as is", () => {
    const actual = summarize(5, { title: "abc", synopsis: "def" });
    const expected = "def";
    expect(actual).toBe(expected);
});

test("should return the episode synopsis abridged", () => {
    const actual = summarize(1, { title: "abc", synopsis: "def" });
    const expected = "d...";
    expect(actual).toBe(expected);
});

type serie = { title: string; ongoing: boolean; episodes: episode[] };

function newSerie(title: string, ongoing: boolean, episodes: episode[]): serie {
    return {
        title,
        ongoing,
        episodes,
    };
}

test("should return a new series", () => {
    const episodes = [newEpisode("a", "b")];
    const actual = newSerie("Dungeon Meshi", true, episodes);
    const expected = {
        title: "Dungeon Meshi",
        ongoing: true,
        episodes: [newEpisode("a", "b")],
    };
    expect(actual).toBe(expected);
});
