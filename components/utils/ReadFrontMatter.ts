import matter, { GrayMatterFile } from 'gray-matter';

interface FrontMatter {
    data: { [key: string]: any };
    content: string;
}

const ReadFrontMatter = (markdown: string): FrontMatter => {
    try {
        const matterResult = matter(markdown);

        if (!matterResult) {
            throw new Error(`No matter result`);
        }

        return matterResult as FrontMatter;
    } catch (e) {
        console.warn(`Error while reading Front matter`, e);
    }

    return {
        data: {},
        content: markdown,
    };
};

export default ReadFrontMatter;
