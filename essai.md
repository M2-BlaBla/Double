#Annotation Studio

![Logo HyperStudio](https://github.com/guidesDeParis/annotation/raw/master/Images/AnnotationStudio-HyperStudioMIT-Logo.jpg)

Développé par HyperStudio au MIT, Annotation Studio est un environnement de travail outillé qui rassemble une suite d'outils d'annotation. Il se présente donc comme un "cabinet d'annotation", par analogie au cabinet de l'humaniste. 
Annotation Studio repose en grande partie sur le système Annotator, développé par Open Knowledge Foundation, qu'il associe à d'autres outils. 

Cette application a été pensée pour la lecture et l'interprétation collaborative et en ligne de corpus en sciences humaines, d'abord dans une perspective pédagogique, mais qui peut également être employée pour la recherche. 

**On a là un outil qui implémente plusieurs briques dont Annotator**

##Fonctionnalités
 Annotator propose une plateforme dans laquelle il est possible d'héberger des textes et de les annoter. 
 
###Les annotations

Annotation Studio permet de créer des annotations libres, qui peuvent être taguées. 

###Gestion des droits d'accès 
Il est possible de gérer les droits d'accès et de modifications des annotations.

###Fonctionnalités supplémentaires

Comme dans Annotator, le plugin Annotorious permet d'annoter des images. Les utilisateurs peuvent charger des ressources externes (textes, vidéo, images, liens).   

###Standards

Annotation Studio étant dérivé d'Annotator, il respecte dans l'ensemble les spécifications d'Open Annotation.


##Projet : contexte de production et aspects juridiques

###Porteur et contexte de production

Développé par HyperStudio au MIT, Annotation Studio s'appuie notamment sur Annotator.

L'ambition était de fournir un cabinet d'annotation pour étudiants et chercheurs en SHS : la dimension collaborative et pédagogique est forte. 


###Activité de la communauté
Elle est assez faible, car nous sommes en présence d'un service web dont les consommateurs sont des universitaires et des étudiants. 
Il y a un forum, peu fréquenté : il totalise une cinquantaine de messages seulement, dont moins de la moitié concernent l'implémentation ou le développement. 


###Documentation
La documentation disponible prend essentiellement la forme de tutoriel d'utilisation de la plateforme implémentée sur le site d'annotation studio (c'est à dire, un service web). 

###Licence
Open source GPL2

##Aspects techniques

###Architecture et langages

Annotation Studio présente une architecture modulaire. 

Langage employé coté client : HTML/CSS/Javascript
Coté serveur : Ruby on Rail et Postgre SQL

###Formats et stockage
Annotation studio encapsule des textes versés en word ou en plein texte. 
Le format des annotations semble être JSON.
Stockage des annotations sur MongoDB par l'intermédiaire d'une api REST

###Pointage
La localisation des passages se fait par XPATH. 

##Liens, applications, retour d'expériences

###Liens vers le site officiel
- [Site officiel d'Annotation Studio](http://www.annotationstudio.org/)

###Github
- [Compte Github de MIT HyperStudio](https://github.com/hyperstudio)
- [Application Rails sur Github](https://github.com/hyperstudio/Annotation-Studio)
- [Application Data Store](https://github.com/hyperstudio/MIT-Annotation-Data-Store)

###La documentation
- [Forum de support](http://support.annotationstudio.org/)


###Applications

En 2012, Annotation Studio a été testé dans deux classes de littérature au MIT. 
Deux exemples ont été documentés sur le site. 

Cet outil est utilisé au Labex les passés dans le présent pour le projet des registres de la Comédie Française. 

![Capture d'écran](https://github.com/guidesDeParis/annotation/raw/master/Images/AnnotationStudio-plateforme-general.jpg)
![Capture d'écran](https://github.com/guidesDeParis/annotation/raw/master/Images/AnnotationStudio-exemple.jpg)
![Capture d'écran](https://github.com/guidesDeParis/annotation/raw/master/Images/AnnotationStudio-plateforme-exemple.JPG)

##Commentaire perso

Comme Textus, Annotation Studio est propose un espace de travail outillé pour annoter des textes qu'elle intègre. 

Je l'ai testé sur des textes déjà implémenté. Intéressant, mais pas performant dans notre cadre.  

