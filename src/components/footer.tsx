import * as React from "react"

const links: string[] = [
    "Twitter",
    "LinkedIn",
    "Github",
]

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="px-8 text-gray">
                <p>
                    I'm a coffee loving, tech enthusiast from Melbourne Australia.
                </p>
                <p>F
                    If you'd like to connect with me. Find me on
                    <a className="text-purple"> Twitter</a>, <a href="" className="text-purple">LinkedIn</a>, or <a href="" className="text-purple">Github</a>.
                </p>
            </div>
            <div className="flex flex-row justify-between h-12">
                {links.map((link) => {
                    return <div className="text-center m-auto text-yellow">{link}</div>;
                })}
            </div>
        </footer>
    )
}

export default Footer;
