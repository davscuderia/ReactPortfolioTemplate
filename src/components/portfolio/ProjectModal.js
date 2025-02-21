import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ProjectDescription from "./ProjectDescription";

// Styles communs pour la modal
const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
    maxWidth: "800px",
    maxHeight: "80vh",
    overflowY: "auto",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    bgcolor: "#d6c8b4",
    display: "flex",
    flexDirection: "column"
};

const ProjectModal = ({ project, open, handleClose }) => {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={modalStyles}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="h4" component="h2">
                        {project.title}
                    </Typography>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box sx={{ mt: 2, overflowY: "auto" }}>
                    <ProjectDescription project={project} />
                </Box>
            </Box>
        </Modal>
    );
}

export default ProjectModal;