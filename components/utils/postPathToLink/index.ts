import textToUrl from "../textToUrl";

const postPathToLink = (path: string) => {
    const pathArray = path.split('/')
    const postSlug = pathArray[pathArray.length - 1].slice(0, -3);
    const prepedPostSlug = textToUrl(postSlug);
    return prepedPostSlug;
}

export default postPathToLink;