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
            // Ajoutez des cas pour d'autres projets ici
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
