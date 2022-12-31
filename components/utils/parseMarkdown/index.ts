import markdownIt from 'markdown-it';

const parseMarkDown = (md: string) => {
    const mdParser = markdownIt();
    return mdParser.render(md);
}

export default parseMarkDown