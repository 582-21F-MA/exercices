# Exercice : Jeu de données

Créez un programme qui permet à un ou une enseignante de créer un jeu de
données contenant le nom et la note des élèves d'une classe à partir de
la ligne de commande. Pour entrer une donnée, l'enseignant·e doit écrire
le nom de l'élève suivit de sa note.

```
> Izuku Midoriya 90
```

Un nom peut contenir un nombre indéterminé d'espace et de caractères. La
note est toujours donnée en dernier.

L'enseignant·e peut également entrer le mot `average`, dans quel cas la
note moyenne des élèves sauvegardé·es est retournée par le programme.

```
> average
75
```

Si l'enseignant·e entre le mot `grade` suivit du nom d'un·e élève, alors
le programme affiche la note de celui ou celle-ci.

```
> note Izuku Midoriya
90
```

Enfin, si une entrée vide est donnée par l'enseignant·e, un message
d'aide contenant les commandes possibles est affiché.

Le programme se termine seulement si l'enseignant·e entre le mot `exit`
dans le terminal. Sinon, il ou elle peut continuer d'exécuter des
commandes indéfiniment.
