# EnersyProject - Livrable Ionic

##### 1 - Télécharger et installer [nodejs](https://nodejs.org/ "NodeJs")

##### 2 - Télécharger et décompresser le dossier EnersyProject sur *Download zip*

##### 3 - Installer ionic et cordova
 * 3.1 - Ouvrir un terminal, et exécuter la commande suivante :
```
$ npm install -g cordova ionic
```

##### 4 - Créer un projet Ionic
 * 4.1 - Ouvrir un terminal, et exécuter la commande suivante :
```
$ ionic start EnersyProjectIonic
```
* 4.2 - Ionic vient de créer un projet EnersyProjectIonic avec un dossier www qui contiendra les fichiers sources de l'application.

##### 5 - Ajouter les fichiers téléchargés dans le dossier *EnersyProjectIonic* crée à l'étape 4.1
  * 5.1 - Dans le *EnersyProjectIonic*, ouvrir le dossier <strong>www</strong>.
  * 5.2 - Supprimer tous les fichiers présents dans le dossier www, et ajouter le contenu du dossier EnersyProject, téléchargé sur Github.

##### 6 - Lancer l'application en ligne de commande 
  * 6.1 - Ouvrir un terminal , se placer dans le dossier <strong>EnersyProjectIonic</strong> créé par ionic l'étape 4.1, et exécuter la commande suivante :
```
$ ionic serve
```
* 6.2 - Ionic nous offre la possibilité de choisir entre l'adresse ip , ou localhsot comme url en utilisant le port 8100.
* 6.3 - L'application se lance dans le navigateur par défaut à l'adresse suivante : 
  http://localhost:8100/#/ ou http://adresseip:8100/#/
