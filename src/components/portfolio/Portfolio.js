import React, { useState } from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";
import ProjectModal from './ProjectModal';

export default function Portfolio({innerRef, darkMode }) {
    const [open, setOpen] = React.useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpen = (project) => {
        setSelectedProject(project);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        setSelectedProject(null);
    }

    return (
        <Box id={'portfolio'} ref={innerRef}>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index} onclick={() => handleOpen(project)}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
            {selectedProject && (
                <ProjectModal
                    open={open}
                    handleClose={handleClose}
                    project={selectedProject}
                    darkMode={darkMode}
                />
            )}
        </Box>
    );
};