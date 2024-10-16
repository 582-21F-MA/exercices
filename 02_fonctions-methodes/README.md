# Exercices : Fonctions et méthodes

Sauvegardez chacun des exercices suivants dans un fichier séparé.

## Inverser un tableau

Concevez une fonction nommée `reverse` qui, étant donné un tableau,
retourne un nouveau tableau dont l'ordre des éléments est inversé.

```ts
const reversed = reverse([1, 2, 3, 4, 5]);
console.log(reversed); // => [5, 4, 3, 2, 1]
```

## Jeu de cartes

Concevez une fonction nommée `newCard` qui, étant donné un nombre entre
1 et 13 et un second nombre entre 1 et 4, retourne un objet de type
`card` qui représente une carte à jouer. Le premier paramètre doit
correspondre à la valeur (*rank* en anglais) de la carte : as, 2 ... 10,
valet, reine, roi. Le deuxième paramètre doit correspondre à l'enseigne
(*rank* en anglais) ou à la « couleur » : trèfle, carreau, cœur, pique.

```ts
const card = newCard(1, 2);
console.log(card); // => { rank: 1, suit: 2 }
```

Dans la portée globale de votre script, définissez des constantes pour
les honneurs (*face* ou *court cards* en anglais) : `ace`, `jack`,
`queen`, et `king`. Définissez aussi des constantes pour les enseignes :
`clubs`, `diamonds`, `hearts`, `spades`. La valeur des constantes doit
correspondre aux nombres ci-dessus.

```ts
const card = newCard(ace, diamonds);
console.log(card); // => { rank: 1, suit: 2 }
```

Concevez ensuite une fonction nommée `toString` qui peut être appelée
sur les objets de type `card`. La fonction doit retourné la
représentation en chaîne de caractère de la carte.

```ts
const str = cardToString(card);
console.log(str); // => "as de carreau"
```

Enfin, concevez une fonction nommée `newDeck` qui retourne un objet
contenant un jeu de 52 cartes et une fonction `drawCard` pour tirer la
première carte d'un jeu.

```ts
const deck = newDeck();
console.log(deck); // => [{ rank: 1, suit: 1 }, { rank: 2, suit: 2 }, ...]
const firstCard = drawCard(deck);
console.log(firstCard); // => { rank: 1, suit: 1 }
console.log(deck); // => [{ rank: 2, suit: 2 }, ...]
```

## Nombre aléatoire

Concevez une fonction nommée `randomNum` qui, étant donné un minimum et
un maximum, retourne un nombre entier aléatoire compris entre le minimum
(inclus) et le maximum (exclu). 

```ts
const r = randomNum(1, 5);
console.log(r); // => 4
console.log(r); // => 1
console.log(r); // => etc.
```

La méthode native `Math.random` retourne un nombre flottant
pseudo-aléatoire compris dans l'intervalle `[0, 1[` (0 est compris, mais
1 est exclue). 

> [!Note]
> Il sera impossible de tester automatiquement cette fonction.


