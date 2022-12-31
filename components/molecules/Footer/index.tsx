import { useEffect, useState } from "react";

const Footer = () => {
    const [name, useName] = useState('')

    useEffect(() => {
        useName(window.origin.replace('https://', '').replace('http://', '').replace('www.', ''));
    }, [])

    return (
        <footer className="mt-16 mb-8 w-full max-w-screen-sm mx-auto">
            <p className="text-gray-500 text-xs">
                2019 - {new Date().getFullYear()} © {name}
            </p>
        </footer>
    )
}

export default Footer;