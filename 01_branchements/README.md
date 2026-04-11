# Exercice : Branchements

Pour cet exercice, on vous demande de travailler en binôme. La
**programmation en binôme** (_pair programming_ en anglais) est une
méthode de travail populaire où deux développeur·ses travaillent
ensemble sur un même poste de travail. La personne qui rédige le code
est appelée la **conductrice**. La seconde personne, appelée
l'**observatrice** ou la **navigatrice**, assiste la conductrice en
décelant les imperfections, en vérifiant que le code implémente
correctement le design et en suggérant des pistes alternatives. Les
rôles s'échangent régulièrement pendant la séance de programmation.

Votre tâche est de concevoir un programme qui détermine le prix de
revente d'un véhicule usagé. Voici les exigences :

- Le programme doit utiliser `prompt` pour demander à l'utilisateur·rice
  la valeur à neuf du véhicule et son année de fabrication.
- La valeur à neuf doit être un nombre positif, tandis que l'année de
  fabrication doit être entre 2000 et l'année courante, obtenue avec
  l'expression `new Date().getFullYear()`. Affichez un message d'erreur
  si un des critères n'est pas respecté.
- Si le véhicule a moins de 3 ans, il coûte 80% de son prix d'origine.
  S'il a plus de 10 ans, il coûte 50%. Si le véhicule a au moins 3 ans
  mais pas plus de 10 ans, il coûte 70% du prix d'origine.
- Utilisez `alert` pour afficher le résultat.

Assurez-vous de cantonner les effets de bord (incluant obtenir l'année
courante) dans la fonction `main`, et d'utiliser les retours anticipés
pour améliorer la lisibilité du code. Évidemment, toutes vos fonctions
auxiliaires doivent être documentées et validées à l'aide de tests
automatisés.
