import matter from 'gray-matter';
import parseMarkDown from '../parseMarkdown';

interface parsePostProps {
    text: string;
    path: string;
}

const parsePost = ({ text, path }: parsePostProps) => {
    const { data, content } = matter(text);

    const pathArray = path.split('/')
    const title = pathArray[pathArray.length - 1].slice(0, -3);

    const md = parseMarkDown(content);

    return {
        path: path || '',
        title: title || '',
        description: data.description || '',
        date: data.date || '0',
        tags: data.tags || [],
        content: content || '',
        md: md || ''
    };
}

export default parsePost;