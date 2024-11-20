# Événements

## Étape 1

Concevez une page web qui affiche un ballon de fête (🎈). Lorsque
l'utilisateur ou l'utilisatrice appuie sur la flèche vers le haut de
leur clavier, la ballon gonfle de 10%. Lorsqu'il ou elle appuie sur la
flèche vers le bas de leur clavier, le ballon dégonfle de 10%.

L'attribut CSS `font-size` peut être utilisé pour changer la taille d'un
emoji. Le nom de l'événement déclenché lorsqu'un ou une utilisatrice
appuie sur une touche du clavier est `keydown`. Pour ce type
d'événement, on enregistre le gestionnaire sur l'objet global `window`
qui représente la fenêtre du navigateur. La fonction de rappel recevra
comme argument un objet de type `KeyboardEvent`, lequel a une propriété
`key` dont la valeur est le nom de la touche qui a été appuyée.

## Étape 2

Si la taille du ballon dépasse 100 pixels, alors le ballon explose,
c'est-à-dire qu'il est remplacé par un emoji représentant une explosion
(💥). Bien sûr, une fois le ballon explosé, il n'est plus possible de le
gonfler ou de le dégonflé.

## Étape 3

Ajouter un bouton « nouveau ballon » qui permet de gonfler un nouveau
ballon seulement si le ballon est explosé.
