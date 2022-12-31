import { useRouter } from "next/router";
import { FC } from "react";
import { twMerge } from 'tailwind-merge';
import A from "../../atoms/A";
import Link from "../../interfaces/Link";

interface NavlineProps {
    links: Link[];
}

const Navline: FC<NavlineProps> = ({ links }) => {
    const router = useRouter();

    return (
        <div
            className="flex flex-row justify-end mb-8"
        >
            {links.map((link, index) => {
                let linkCss = "ml-4";

                if (router.asPath !== link.href) {
                    linkCss = twMerge(linkCss, "text-gray-500 hover:text-gray-600 underline");
                }
                else {
                    linkCss = twMerge(linkCss, "cursor-default");
                }

                return (
                    <A
                        key={index}
                        href={link.href}
                        className={linkCss}
                    >
                        {link.label}
                    </A>
                )
            })}
        </div>
    )
}

export default Navline;