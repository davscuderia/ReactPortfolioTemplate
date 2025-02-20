import React from 'react';

function IconLink(props) {
   const {link, title, icon} = props;
   if (!link) return null;
   return (
      <a href={link} target={"_blank"} rel="noopener noreferrer">
         <i className={icon}/> {title}
      </a>
   );
}

export default IconLink;