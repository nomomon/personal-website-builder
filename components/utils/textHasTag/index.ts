import matter from "gray-matter";

const textHasTag = (tags: string[], text: string, tag: string): boolean => {
    // check tags in frontmatter
    const tagInFrontmatter = !!tags.includes(tag);

    // check tags in content
    const tagRegex = new RegExp(`#${tag}`, "g");
    const tagInContent = text.search(tagRegex) >= 0;

    return tagInFrontmatter || tagInContent;
}

export default textHasTag;