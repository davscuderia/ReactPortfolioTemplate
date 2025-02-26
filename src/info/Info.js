import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["#7BAF2F", "#f75511"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "David",
    lastName: "Prat",
    initials: "DP", // the example uses first and last, but feel free to use three or more if you like.
    position: "un développeur web",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'préparé avec du café'
        },
        {
            emoji: '🌎',
            text: 'Situé en France'
        },
        {
            emoji: "💼",
            text: "Développeur Web junior"
        },
        {
            emoji: "📧",
            text: <a href="mailto:davidprat08@etik.com">davidprat08@etik.com</a>,
        }
    ],
    socials: [
        {
            link: "https://github.com/davscuderia",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/david-prat-08-etik/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/DavPrat08",
            icon: "fa-brands fa-x-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: ` Bonjour ! Je suis David. Je suis un développeur web. Le développement web c'est une reconversion professionnelle enrichissante, fraîchement diplômé de chez OpenClassRooms.
            J'y ai acquis des compétences en JavaScript, React, Node.js, HTML, CSS et en gestion de bases de données.
            Je conçois et optimise des sites web et applications, tout en relevant les défis liés à la performance et à la correction de bugs.
            Mon parcours antérieur m’a forgé des compétences essentielles : organisation, communication, recherche et adaptation aux réglementations.
            Curieux et persévérant, j’aime apprendre, partager mes connaissances et progresser en équipe. Mon objectif ? Concevoir des solutions web performantes et évolutives.`,
    skills:
        {
            proficientWith: ['JavaScript', 'React', 'GitHub', 'HTML5', 'CSS3', 'NodeJS'],
            exposedTo: ['VScode', 'Figma', 'Canva', 'Ubuntu', 'IA'],
            learning: ['Angular', 'Rust']
        }
    ,
    hobbies: [
        {
            label: 'Moto',
            emoji: '🏍️'
        },
        {
            label: 'Bricolage',
            emoji: '🛠️'
        },
        {
            label: 'cryptomonnaies',
            emoji: '🪙🔗'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Projet Nina C.",
            live: "https://davscuderia.github.io/Nina-Carducci-Dev/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/davscuderia/Nina-Carducci-Dev.git", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Projet Kasa", 
            live: "",       
            source: "https://github.com/davscuderia/kasa.git",
            image: mock2
        },
        {
            title: "Projet Sophie B.",
            live: "",
            source: "https://github.com/davscuderia/Portfolio-architecte-sophie-bluel-1.git",
            image: mock3
        },
        {
            title: "Projet Booki",
            live: "",
            source: "https://github.com/davscuderia/Booki.git",
            image: mock4
        },
        {
            title: "Projet Mon Vieux Grimoire",
            live: "",
            source: "https://github.com/davscuderia/Mon-vieux-Grimoire.git",
            image: mock5
        }
    ]
}