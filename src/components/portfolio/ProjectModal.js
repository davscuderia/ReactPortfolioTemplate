import React from "react";
import { Modal, Box, Typography } from "@mui/material";

const ProjectModal = ({ project, open, handleClose, darkMode }) => {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{
                 position: "absolute", 
                 top: "50%", left: "50%", 
                 transform: "translate(-50%, -50%)", 
                 width: "80vw", maxWidth: "800px", 
                 bgcolor: darkMode ? "#333" : "#fff", 
                 boxShadow: 24, 
                 p: 4, 
                 borderRadius: 2 
            }}>
                <Typography variant="h4" component="h2">
                    {project.title}
                </Typography>
            </Box>
        </Modal>
    );
}

export default ProjectModal;