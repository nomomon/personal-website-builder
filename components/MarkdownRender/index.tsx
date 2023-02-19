import { FC, ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import MarkdownComponents from '@/components/MarkdownComponents';

interface MarkdownRenderProps {
    markdown: string;
}

const MarkdownRender: FC<MarkdownRenderProps> = ({
    markdown,
}): ReactElement => {
    return (
        <ReactMarkdown
            className="markdown-body"
            components={MarkdownComponents}
            rehypePlugins={[rehypeKatex]}
            remarkPlugins={[remarkGfm, remarkMath]}
        >
            {markdown}
        </ReactMarkdown>
    );
};

export default MarkdownRender;
