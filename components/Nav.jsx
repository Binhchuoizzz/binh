"user client";

import Link from "next/link";


const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "Resume",
        path: "/resume",
    },
    {
        name: "Work",
        path: "/work",
    },
    {
        name: "Contact",
        path: "/contact",
    },
]
const Nav = () => {
    return (
        <nav>
            {links.map((link, index) => {
                return (<Link href={link.path} key={index}>
                    {link.name}
                </Link>
                );
            })}
        </nav>
    )
};

export default Nav