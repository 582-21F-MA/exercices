# Exercices : Structures de données

Les exercices suivants sont principalement à propos des objets et des
tableaux. N'oubliez pas de tester les fonctions, et d'utiliser les alias
de type. Veuillez placer chaque exercice dans un fichier distinct.

## Salutation

Concevez une fonction nommée `newPerson` qui, étant donné un nom et un
age en années, retourne un objet `person`. 

```ts
const laios = newPerson("Laios Touden", 28);
console.log(laios); // => { name: "Laios Touden", age: 28 }
```

Concevez ensuite une fonction `greet` qui, étant donné un objet
`person`, retourne une phrase de salutation.

```ts
const greeting = greet(laios);
console.log(greeting); // => Bonjour, je m'appelle Laios Touden et j'ai 28 ans.
```

## Séries

Concevez une fonction nommée `newEpisode` qui, étant un titre et un
synopsis, retourne un objet `episode` qui représente un épisode d'une
série télévisée.

```ts
const ep = newEpisode("Hot Pot / Tart", "After a crushing loss, Laios, Marcille and Chilchuck quickly reenter the dungeon in order to save Falin, but this time, they have a foolproof survival plan.");
console.log(ep); // => { title: "Hot Pot / Tart", synopsis: "After a crushing loss, Laios, Marcille and Chilchuck quickly reenter the dungeon in order to save Falin, but this time, they have a foolproof survival plan." }
```

Concevez une fonction nommée `summarize` qui, étant donné un nombre et
un objet de type `episode`, retourne un abrégé du synopsis dont le
nombre de caractères ne dépasse pas le nombre donné. Ajoutez des points
de suspension à la fin de l'abrégé si celui-ci est plus court que le
synopsis.


```ts
const summary = summarize(20, ep);
console.log(summary); // => After a crushing los...
```

Enfin, concevez une fonction nommé `newSerie` qui, étant donnée un
titre, un booléen représentant si la série est en cour ou non, et un
tableau d'épisodes, retourne un objet `serie`.

## Organisation

Considérant qu'une personne salariée est n'importe qui ayant un salaire,
créez un alias de type nommé `salaried` qui représente une personne
salariée. Un salaire est représenté avec des cents.

```ts
type salaried = { /* TODO */ };
```

Créez ensuite deux autres alias : un alias nommé `employee` qui
représente un ou une employées, ainsi qu'un alias nommé `employer` qui
représente un employeur ou une employeuse. Les employé·es et les
employeurs·ses ont un nom et un salaire, mais seul·es les employé·es ont
un ou une superviseur·e, le ou laquelle est un employeur ou une
employeuse.

```ts
type employee = { /* TODO */ };
type employer = { /* TODO */ };
```

Une fois les alias définis, concevez une fonction nommée `newEmployer`
qui, étant donné un nom et un salaire, retourne un objet qui représente
un nouvel employeur ou une nouvelle employeuse. Concevez également une
autre fonction nommée `newEmployee` qui, étant donné un nom, un salaire,
et un objet `employer`, retourne un nouvel objet `employee`.

```ts
const marcile = newEmployer("Marcile", 1000000);
let chilchuk = newEmployee("Chilchuck", 20000, marcile);
```

Concevez une fonction nommée `changeEmployer` qui, étant donné un objet
`employee` et un objet `employer`, change l'employeur ou l'employeuse
courant·e de l'employé·e, et retourne un *nouvel* objet `employee`.

```ts
chilchuk = changeEmployer(chilchuck, marcile);
```

Enfin, créez un dernier alias de type nommé `org` qui représente une
organisation. Une organisation est une liste de personnes salariées.

```ts
type org = /* TODO */
```

Concevez une fonction nommé `avgSalary` qui, étant donné une
organisation, retourne le salaire moyen de celle-ci.

```ts
const avg = avgSalary([marcile, chilchuk]);
console.log(avg); // => 5100
```
