const PrepLink = (link: string) => {
    return link
        .replace(/\.md$/, '')
        .replace(/_/g, '-')
        .replace(/ /g, '-')
        .replace(/[^a-zA-Z0-9-]/g, '-')
        .replace(/-+/g, '-')
        .toLowerCase();
};

export default PrepLink;
