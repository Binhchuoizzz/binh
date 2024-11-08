import Link from "next/link";

import {FaGithub, FaFacebook,FaLinkedinIn, FaInstagram,FaPhone} from "react-icons/fa";

const socials = [
     {icon: <FaGithub/>, path: 'https://github.com/Binhchuoizzz'},
     {icon: <FaFacebook/>, path: 'https://www.facebook.com/toi.binhducnguyen/'},
     {icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/cve-alert-b700302b2/'},
     {icon: <FaInstagram/>, path: 'https://www.instagram.com/binhchuoiz/?next=%2F'},
     {icon: <FaPhone/>, path: 'https://zalo.me/0922818727'},

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