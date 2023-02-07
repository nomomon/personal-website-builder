import { FC, ReactElement } from "react";
import ReactMarkdown from 'react-markdown';
import MarkdownComponents from "@/components/MarkdownComponents";

interface MarkdownRenderProps {
    markdown: string;
}

const MarkdownRender: FC<MarkdownRenderProps> = ({ markdown }): ReactElement => {
    return (
        <ReactMarkdown
            components={MarkdownComponents}
            rehypePlugins={[]}
            remarkPlugins={[]}
        >
            {markdown}
        </ReactMarkdown>
    );
};

export default MarkdownRender;
