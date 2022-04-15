import * as React from "react"

const links: string[] = [
    "Twitter",
    "LinkedIn",
    "Github",
]

const Footer = () => {
    return (
        <footer className="flex flex-row justify-between h-12 bg-gray-600">
            {links.map((link) => {
                return <div className="text-center m-auto p-1">{link}</div>;
            })}
        </footer>
    )
}

export default Footer;
