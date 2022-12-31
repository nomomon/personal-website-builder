import { FC } from "react";
import A from "../../atoms/A";
import parseDate from "../../utils/parseDate";

interface PostLinkProps {
    title: string;
    description: string;
    date: string;
    link: string;
}

const PostLink: FC<PostLinkProps> = ({
    title, description, date, link
}) => {
    const parsedDate = parseDate(date);

    return (
        <div className="mb-6">
            <A
                href={link}
            >
                <h3 className="mb-2">
                    {title}
                </h3>
            </A>
            <p className="mb-2">
                {description && (
                    <span className="mr-2">{description}</span>
                )}
                <A
                    href={link}
                    className="underline text-gray-500"
                >
                    Read more &rarr;
                </A>
            </p>
            <small className="text-gray-500">
                {parsedDate}
            </small>
        </div>
    )
}

export default PostLink;