# Exercice : Propagation et tri

La méthode native `toSorted` retourne une copie triée du tableau sur
lequel elle est appelée. 

```ts
const nums = [2, 1, 3];
const sortedNums = nums.toSorted(compare);
```

La fonction prend comme argument une fonction de rappel qui sera
utilisée pour comparer les éléments et déterminer leur ordre. La
fonction de rappel doit avoir deux paramètres, lesquels représentent
deux des éléments à comparer. 

```ts
function compare(n1: number, n2: number): number {
    return n2 - n1;
}
```

Si la fonction de rappel retourne un nombre négatif, alors le premier
élément vient avant le deuxième. Si elle retourne un nombre positif,
alors le deuxième élément vient avant le premier.

```ts
console.log(sortedNums); // => [1, 2, 3]
```

Pour comparer deux chaînes de caractère, on utilise la méthode native
`localeCompare`, laquelle retourne un nombre positif ou négatif.

```ts
const n = "a".localeCompare("b");
console.log(n); // => -1
```

---

Le fichier `index.html` ci-joint inclus une table HTML qui contient le
nom et l'âge de différentes personnes. Concevez un script qui permet de
trier la table en fonction de l'entête sur laquelle on clique. Lorsqu'on
clique à répétition sur la même entête, l'ordre du tri alterne entre
ascendant et descendant. Affichez une flèche après l'entête pour
indiquer l'ordre du tri. Vous ne pouvez pas enregistrer plus d'un
gestionnaire d'évènement.

> [!NOTE] 
> On se rappelle que `querySelectorAll` retourne un objet `NodeList`
> contenant les éléments qui satisfont le sélecteur. Pour convertir un
> objet `NodeList` en tableau, on utilise la méthode native
> `Array.from`.
