import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About({innerRef}) {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()}:~$</span> sudo apt
                about{firstName} </p>
            <p><span className={Style.green}>(base)</span><span style={{color: info.baseColor}}>about{firstName}:~$</span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()}:~$</span> cd technologies/utilisées 
            </p>
            <p><span className={Style.green}>(base)</span><span style={{color: info.baseColor}}>technologies/utilisées:~/</span> cd..</p>
            <p style={{color: info.baseColor}}> Compétent avec</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Travaille avec</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Apprentissage en cours</p>
            <ul className={Style.skills}>
                {info.skills.learning.map((learningSkill, index) => <li key={index}>{learningSkill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()}:~$</span> cd
                Loisirs/centre d'intérêts</p>
            <p><span className={Style.green}>(main)</span><span style={{color: info.baseColor}}>Loisirs/centre d'intérêts:~/</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}