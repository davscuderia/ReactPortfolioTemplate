import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import styles from "../BaseLayout.module.scss";
import ProjectDescription from "./ProjectDescription";

const ProjectModal = ({ project, open, handleClose, darkMode }) => {
    console.log(darkMode ? styles.dark : styles.light);
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{
                position: "absolute", 
                top: "50%", left: "50%", 
                transform: "translate(-50%, -50%)", 
                width: "80vw", maxWidth: "800px",  
                boxShadow: 24, 
                p: 4, 
                borderRadius: 2,
                bgcolor:" #d6c8b4"
            }}>
                <Typography variant="h4" component="h2">
                    {project.title}
                </Typography>
                <ProjectDescription project={project} />
            </Box>
        </Modal>
    );
}

export default ProjectModal;