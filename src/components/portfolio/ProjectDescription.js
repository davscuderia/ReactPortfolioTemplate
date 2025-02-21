import React from "react";
import { Typography, Box } from "@mui/material";

const ProjectDescription = ({ project }) => {
    const getDescription = (title) => {
        switch (title) {
            case "Projet Nina C.":
                return (
                    <>
                        <Typography variant="h6">Nina Carducci - Optimisation des performances et du référencement</Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            📍 <strong>Description</strong><br />
                            Dans ce projet, j’ai travaillé en tant que développeur freelance pour optimiser le référencement, la performance et l’accessibilité du site web d’une photographe professionnelle. Mon rôle consistait à identifier les problèmes de chargement et à améliorer la structure du code pour garantir une meilleure visibilité en ligne.
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            ⚙️ <strong>Problématiques rencontrées et solutions</strong><br />
                            • Prise en main des outils d’audit : utilisation de Lighthouse et Wave pour analyser la vitesse de chargement et l’accessibilité du site. J’ai suivi des formations et exploré la documentation officielle pour maîtriser ces outils.<br />
                            • Élaboration d’un cahier de recette : formalisation des tests et recommandations pour garantir une optimisation efficace du site. J’ai bénéficié des conseils de mon mentor pour structurer ce document.
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            🎯 <strong>Compétences développées</strong><br />
                            ✅ Optimisation des performances web (temps de chargement, accessibilité)<br />
                            ✅ Débogage avec Chrome DevTools<br />
                            ✅ Rédaction d’un cahier de recette pour tester et améliorer un site.
                        </Typography>
                    </>
                );
            case "Projet Kasa":
                return (
                    <>
                        <Typography variant="h6">Kasa - Site de location de logements</Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            📍 <strong>Description</strong><br />
                            Kasa est une application web de location immobilière. Ma mission consistait à implémenter le front-end en utilisant React et React Router, afin d’offrir une expérience utilisateur fluide et dynamique. J’ai travaillé sur la logique de présentation des données et la création de composants React modulaires.
                            </Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            ⚙️ <strong>Problématiques rencontrées et solutions</strong><br />
                            • Comprendre la logique des composants React : apprentissage de la gestion des props, du state et du cycle de vie des composants. J’ai suivi des cours OpenClassrooms, exploré la documentation officielle de React et utilisé l’intelligence artificielle pour approfondir mes connaissances.<br />
                            • Intégration de Sass : mise en place des variables et mixins pour une meilleure organisation du code CSS. J’ai consulté la documentation MDN et échangé avec mon mentor pour surmonter les blocages.
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            🎯 <strong>Compétences développées</strong><br />
                            ✅ Initialisation d’une application avec Create React App<br />
                            ✅ Configuration de la navigation entre les pages avec React Router<br />
                            ✅ Développement d’une interface réactive et modulaire avec React<br />
                            ✅ Mise en œuvre d’animations CSS pour améliorer l’expérience utilisateur<br />
                            ✅ Utilisation de Sass pour structurer et optimiser le code CSS.
                        </Typography>
                    </>
                );
            case "Projet Sophie B.":
                return (
                    <>
                        <Typography variant="h6">Sophie Bluel - Portfolio d’architecte</Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            📍 <strong>Description</strong><br />
                            Ce projet consistait à créer une page web dynamique pour une architecte d’intérieur en utilisant JavaScript et en interagissant avec une API. J’ai travaillé sur la partie Front-End, en développant la page de présentation des réalisations de l’architecte à partir d’un HTML fourni.
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            ⚙️ <strong>Problématiques rencontrées et solutions</strong><br />
                            • Découverte de JavaScript et des API : compréhension des requêtes asynchrones et manipulation des données reçues. J’ai suivi des cours OpenClassrooms, utilisé des tutoriels et l’intelligence artificielle pour approfondir mes connaissances.<br />
                            • Gestion des événements et manipulation du DOM : mise en place d’une modale interactive permettant l’ajout et la suppression d’images dynamiques. J’ai testé plusieurs approches pour assurer une interaction fluide avec l’interface.
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            🎯 <strong>Compétences développées</strong><br />
                            ✅ Récupération et gestion des données utilisateur via des formulaires<br />
                            ✅ Gestion des événements utilisateurs avec JavaScript<br />
                            ✅ Manipulation avancée du DOM avec JavaScript<br />
                            ✅ Utilisation d’une API pour récupérer des données dynamiques.
                        </Typography>
                    </>
                );
            case "Projet Booki":
                return (
                    <>
                        <Typography variant="h6">Booki - Intégration d’une interface responsive</Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            📍 <strong>Description</strong><br />
                            Booki est une agence de voyage en ligne. Ma mission principale était d’intégrer l’interface responsive de leur site web à partir d’une maquette fournie.
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            ⚙️ <strong>Problématiques rencontrées et solutions</strong><br />
                            • Première prise en main de l’environnement de développement : découverte de Visual Studio Code, Git et GitHub. J’ai suivi des formations OpenClassrooms et des tutoriels pour monter en compétence.<br />
                            • Gestion des images en CSS : difficulté à ajuster les dimensions et le positionnement. J’ai exploré plusieurs approches (background-size, flexbox, object-fit) jusqu’à trouver la solution optimale.
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            🎯 <strong>Compétences développées</strong><br />
                            ✅ Implémentation d’une interface responsive avec HTML et CSS<br />
                            ✅ Intégration du contenu en respectant une maquette Figma<br />
                            ✅ Versionnement du projet avec Git et GitHub<br />
                            ✅ Installation et configuration d’un environnement de développement front-end
                        </Typography>
                    </>
                );
            case "Projet Mon Vieux Grimoire":
                return (
                    <>
                        <Typography variant="h6">Mon Vieux Grimoire - Développement d’une API pour un site de référencement et notation de livres</Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            📍 <strong>Description</strong><br />
                            Mon Vieux Grimoire est un projet destiné à une chaîne de librairies souhaitant créer un site de référencement et de notation de livres. J’ai développé le back-end du site en construisant un serveur avec Express, connecté à une base de données MongoDB. Ce projet m’a permis d’implémenter un système sécurisé d’authentification, ainsi que des fonctionnalités de gestion des livres, de notation et d’optimisation d’images.
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            ⚙️ <strong>Problématiques rencontrées et solutions</strong><br />
                            • Découverte de Node.js et MongoDB : apprentissage de la gestion d’une base de données NoSQL et des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer). J’ai suivi attentivement les cours et effectué de nombreux tests avec Postman.<br />
                            • Implémentation des bonnes pratiques de Green Code : recherche approfondie et tests sur l’optimisation des requêtes et la gestion des fichiers avec Multer pour minimiser l’empreinte écologique.<br />
                            • Sécurisation des données et gestion des authentifications : mise en place d’une authentification sécurisée avec bcrypt et JWT, et application des bonnes pratiques pour le stockage des mots de passe.
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            🎯 <strong>Compétences développées</strong><br />
                            ✅ Création d’un serveur avec Express et connexion à MongoDB via Mongoose<br />
                            ✅ Implémentation des opérations CRUD pour la gestion des livres et des notations<br />
                            ✅ Mise en place d’un système d’authentification sécurisé (JWT, bcrypt)<br />
                            ✅ Optimisation des images avec Multer et Sharp<br />
                            ✅ Respect des bonnes pratiques du Green Code pour un site éco-responsable<br />
                            ✅ Structuration du projet en architecture MVC pour une meilleure organisation du code.
                        </Typography>
                    </>
                );
            default:
                return "Description non disponible.";
        }
    };

    return (
        <Box>
            {getDescription(project.title)}
        </Box>
    );
};

export default ProjectDescription;
