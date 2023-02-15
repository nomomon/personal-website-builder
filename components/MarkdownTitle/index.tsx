import { FC, ReactElement } from 'react';
import PrepDate from '@/components/utils/PrepDate';
import { twMerge } from 'tailwind-merge';

interface MarkdownTitleProps {
    frontmatter: {
        title: string;
        description?: string;
        date?: Date;
        banner?: string;
    };
}

const MarkdownTitle: FC<MarkdownTitleProps> = ({
    frontmatter,
}): ReactElement => {
    const date = PrepDate(frontmatter.date);

    let styleClasses = 'w-full h-64 py-20 flex flex-col items-center';
    if (frontmatter.banner) {
        styleClasses = twMerge(styleClasses, `bg-center bg-cover bg-no-repeat`);
    } else {
        styleClasses = twMerge(
            styleClasses,
            'bg-gradient-to-r from-purple-500 to-red-500'
        );
    }
    let style =
        (frontmatter.banner && {
            backgroundImage: `url(${frontmatter.banner})`,
        }) ||
        undefined;

    return (
        <div className={styleClasses} style={style}>
            <h1 className="text-white text-6xl drop-shadow-md">
                {frontmatter.title}
            </h1>

            <p className="mb-4 text-white opacity-75 font-light">
                {frontmatter.description}
            </p>

            {date && (
                <div className="text-white opacity-75 text-sm font-light py-1 px-4 rounded-md backdrop-blur-xl bg-black/30">
                    {date}
                </div>
            )}
        </div>
    );
};

export default MarkdownTitle;
