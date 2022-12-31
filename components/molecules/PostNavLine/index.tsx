import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { twMerge } from 'tailwind-merge';
import A from "../../atoms/A";
import parseDate from "../../utils/parseDate";

interface PostNavlineProps {
    date: string;
    tags: string[];
}

const PostNavline: FC<PostNavlineProps> = ({ date, tags }) => {
    const router = useRouter();

    return (
        <div
            className="flex flex-row justify-between mb-8 text-gray-500"
        >
            <div>
                {parseDate(date)}
                {(date && tags.length > 0) && (
                    <span className="mx-1">
                        •
                    </span>
                )}
                {
                    tags && tags.length > 0 && tags.map((tag, index) => (
                        <A
                            key={index}
                            href={`/tags/${tag}`}
                            className={"bg-gray-200 mx-1 px-1 rounded-md font-light text-sm py-1 cursor-pointer hover:text-black"}
                        >
                            {tag}
                        </A>
                    ))
                }
            </div>
            <span
                className="underline cursor-pointer flex-end"
                onClick={router && (() => router.back())}
            >
                Back
            </span>
        </div>
    )
}

export default PostNavline;