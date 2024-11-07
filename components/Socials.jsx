import Link from "next/link";

import {FaGithub, FaFacebook,FaLinkedinIn, FaInstagram,FaPhone} from "react-icons/fa";

const socials = [
     {icon: <FaGithub/>, path: ''},
     {icon: <FaFacebook/>, path: ''},
     {icon: <FaLinkedinIn/>, path: ''},
     {icon: <FaInstagram/>, path: ''},
     {icon: <FaPhone/>, path: ''},

]

const Socials = ({containerStyles, iconStyles}) => {
     return (
          <div className={containerStyles}>
               {socials.map((item, index)=>{
                    return <Link key={index} href={item.path} className={iconStyles}>
                         {item.icon}
                    </Link>
               })}
          </div>
     );
};

export default Socials