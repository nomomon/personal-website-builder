import Navline from "../../molecules/Navline";
import { FC, ReactNode } from "react";
import Footer from "../../molecules/Footer";

interface PageProps {
    title?: string;
    useNavLine?: boolean;
    children: ReactNode;
}

const Page: FC<PageProps> = ({ title, children, useNavLine = true }) => {
    return (
        <>
            <article className="mt-16 min-h-full w-full max-w-screen-sm mx-auto">
                <h1
                    className="mb-8"
                >
                    {title}
                </h1>
                {useNavLine && (
                    <Navline
                        links={[
                            { href: "/", label: "Home" },
                            { href: "/tags/projects/", label: "Projects" },
                            { href: "/tags/blog/", label: "Blog" },
                            { href: "/tags/note/", label: "Notes" }
                        ]}
                    />
                )}
                {children}
            </article>
            <Footer />
        </>
    );
};

export default Page;