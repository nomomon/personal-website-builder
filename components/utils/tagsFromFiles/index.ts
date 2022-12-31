import matter from "gray-matter";

const tagsFromFiles = (fileTexts: string[]): string[] => {
    const tags = fileTexts.map(text => {
        // tags in frontmatter
        const { data: { tags: fTags } } = matter(text);

        // tags in content
        const tagRegex = /(?<=#)\w+/g;
        const cTags = text.match(tagRegex) || [];
        const tags = [...fTags || [], ...cTags];

        return tags as string[];
    }).flat();

    const uniqueTags = tags.filter((tag, index, self) => {
        return tag && self.indexOf(tag) === index;
    });

    return uniqueTags;
}

export default tagsFromFiles;