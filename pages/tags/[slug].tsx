import TagPage from '@/components/TagPage';
import Post from '@/components/types/post';
import PrepLink from '@/components/utils/PrepLink';
import config from '@/configuration';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { FC, ReactElement } from 'react';

interface PageProps {
    tag: string;
    posts: Post[];
}

const Page: FC<PageProps> = ({ tag, posts }): ReactElement => {
    return <TagPage tag={tag} posts={posts} />;
};

export function getStaticPaths() {
    const filePaths = readdirSync(config.srcDir);
    const tags: string[] = [];

    // Get all tags
    filePaths.forEach((filePath) => {
        const path = join(config.srcDir, filePath);
        const file = readFileSync(path, 'utf8');
        const { data } = matter(file);
        const { tags: fileTags } = data;

        if (fileTags) {
            fileTags.forEach((tag: string) => {
                if (!tags.includes(tag)) {
                    tags.push(tag);
                }
            });
        }
    });

    // Create paths
    const paths = tags.map((tag) => ({
        params: {
            slug: PrepLink(tag),
        },
    }));

    return {
        paths: paths,
        fallback: false,
    };
}

export function getStaticProps({ params: { slug } }: any) {
    const tag = slug;
    const filePaths = readdirSync(config.srcDir);

    // Get all posts with tag
    const posts = filePaths.map((filePath) => {
        const path = join(config.srcDir, filePath);
        const file = readFileSync(path, 'utf8');
        const { data } = matter(file);
        const { tags: fileTags } = data;

        if (fileTags && fileTags.includes(tag)) {
            // File name
            const fileName = filePath.split('.')[0];

            return {
                title: fileName,
                slug: PrepLink(fileName),
                ...data,
            };
        }
        return null;
    }).filter((post: any) => post);

    return {
        props: {
            tag,
            posts,
        }
    };
}

export default Page;
