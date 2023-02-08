import { FC, ReactElement } from 'react';
import PrepDate from '@/components/utils/PrepDate';

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

    return (
        <div className="w-full h-64 py-20 flex flex-col items-center bg-gradient-to-r from-yellow-500 to-green-500">
            <h1 className="text-white text-6xl drop-shadow-md">
                {frontmatter.title}
            </h1>

            <p className="mb-4">{frontmatter.description}</p>

            {date && (
                <div className="text-white py-1 px-4 rounded-md backdrop-blur-xl bg-black/10">
                    {date}
                </div>
            )}
        </div>
    );
};

export default MarkdownTitle;
