# Front I-NEED  
  
## Projet fil rouge  
URL : [ici](http://localhost:3000/) I-NEED  

## Expertise Front  
Emma Cassagnettes  
Victor Balducci  

## Installation  
**Cloner le projet**   
git clone  
**Installer les packages:**  
npm i  
**Pour lancer l'application en mode développement:**  
npm start  
**Pour lancer l'application en mode production:**  
npm build  
## Identifiants connexion  

Email : aymericmayeux@gmail.com Mot de passe : intervenant2020% 
Email : eric.priou@hetic.net Mot de passe : intervenant2020%  
Ou  
Création d'un compte sur l'interface  

## Choix Techniques  
| Librairie | Argumentation |  
| --- | --- |  
| React |Technologie imposée.|  
| React Create APP | Architecture créée par create react app qui permet de configurer un environnement de développement facilement. |  
| React Router Dom | Utilisation pour la gestion des routes (router)|  
| Axios | Nous avons choisi d'utiliser la librairie axios puisqu’elle est supportée par tous les navigateurs y compris IE (Notre projet devant être accessible à tous).|  
| MapBox GL JS | Nous avons choisi Mapbox pour sa facilité d'utilisation et la possibilité de customiser notre carte comme on le souhaite. |  
| React Select | Après avoir comparé les différentes librairies disponibles pour construire nos formulaires, React Select nous est apparue comme étant la plus légère et celle qui correspond le mieux à notre besoin. |  
| Sass | Nous avons choisi d'utiliser SASS pour avoir la possibilité d'utiliser les variables, les mixins, etc... |  
| Eslint | Fournit une aide et permet de révéler les erreurs syntaxiques. |  

<br/>

| Solution Utilisée | Argumentation |  
| --- | --- |  
| SVG | Data visualisation --> Concentration des spécialités choisies par arrondissement et par nombre d'habitants. Pas de librairie utilisée. L'utilisation des SVG est suffisante.|  
| Mapbox | Map --> Pointer sur une carte pour localiser précisément un établissement de santé. (Voir argumentaire)|  


## Argumentaire  
*Attention, les dernières fonctionnalités ont été ajoutées pour vous fournir un test complet de notre application : Ajouts d'établissements de santé dans la liste d'un profil, des polices, des commentaires et suppression des librairies inutilisées.*  
  
Nous avons développé le front avec l'aide précieuse de **Cheik Kone** (expertise UX/UI) qui a su nous conseiller, nous aider et refactoriser notre code quand c'était nécessaire.  
Nous mettons à disposition de nos utilisateurs la possibilité de connaitre la concentration des services de santé dans chaque arrondissement et de les enregistrer afin d'anticiper leur visite à Paris pendant les JO 2024.  
Notre application est accessible sans créer de compte. Si l'utilisateur veut stocker ses informations ainsi que ses favoris (centres de santé, pharmacies, hôpitaux), il doit créer un compte et se connecter. Nous avons pensé aux familles, un compte peut donc accueillir plusieurs profils. Par exemple, une mère peut enregistrer ses spécialistes dans sa liste et les hôpitaux dans la liste d'un de ses enfants qui a son profil individuel contenant ses informations personnelles.

**Côté technique :**  

Nous avons réalisé notre interface avec REACT.JS, c'est une librairie JavaScript, déclarative, basée sur des composants qui permet de créer des interfaces utilisateurs.  
Nous avons décidé de découper au maximum notre code en petits composants réutilisables (ex : BoxWrapper / PopWrap)  
Pour notre data visualisation, aucune librairie n'a été nécessaire. Nous avons utilisé des SVG pour permettre l'affichage de la concentration des établissements de santé avec les différents arrondissements.  
Pour notre seconde map, nous avons utilisé Mapbox afin de donner à nos utilisateurs la possibilité de trouver précisément un établissement de santé.  
Cette librairie nous a permis de gérer au mieux la longitude et la latitude de nos points sur la carte. En comparaison de GoogleMap,  MapBox offre des options poussées de personnalisation, les cartes sont basées sur un projet OpenSource, c'est pour ces raisons que nous avons décidé de l'utiliser.  
Concernant le déploiement nous n'avons pour le moment choisi aucune solution (next update).