import matter from 'gray-matter';

const parseIndex = (text: string) => {
    const { data, content } = matter(text);
    return {
        title: data.title,
        content: content,
    };
}

export default parseIndex;