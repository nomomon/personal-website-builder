import fs from 'fs';
import { FC } from 'react';
import PostLink from '../../components/molecules/PostLink';
import Page from '../../components/organisms/Page';
import deepReadFilesSync from '../../components/utils/deepReadFilesSync';
import parsePost from '../../components/utils/parsePost';
import postPathToLink from '../../components/utils/postPathToLink';
import tagsFromFiles from '../../components/utils/tagsFromFiles';
import textHasTag from '../../components/utils/textHasTag';

interface TagPageProps {
    title: string;
    posts: {
        path: string;
        title: string;
        description: string;
        content: string;
        date: string;
        tags: string[];
    }[];
}

const TagPage: FC<TagPageProps> = ({ title, posts }) => {
    return (<>
        <Page
            title={`#${title}`}
        >
            <ol className='list-disc'>
                {posts && posts.map(
                    ({ title, description, date, path }, i) => (
                        <PostLink
                            key={i}
                            title={title}
                            description={description}
                            date={date}
                            link={"/posts/" + postPathToLink(path)}
                        />
                    )
                )}
                {
                    (!posts || posts.length == 0) && (
                        <p>Nothing here yet</p>
                    )
                }
            </ol>
        </Page>
    </>)
}

export async function getStaticPaths() {
    const filePaths = deepReadFilesSync('public');
    const fileTexts = filePaths.map(path => {
        return fs.readFileSync(path, 'utf-8')
    });

    const tagsParam = tagsFromFiles(fileTexts).map(tag =>
        ({ params: { tag } })
    );

    return {
        paths: [
            { params: { tag: 'project' } },
            { params: { tag: 'note' } },
            { params: { tag: 'blog' } },
            ...tagsParam,
        ],
        fallback: true
    }
}

export async function getStaticProps(
    { params }: { params: { tag: string } }
) {
    const tag = params.tag;
    const filePaths = deepReadFilesSync('public');
    const files = filePaths.map(path => ({
        path,
        text: fs.readFileSync(path, 'utf-8')
    }));
    const parsedFiles = files
        .map(file => parsePost(file))
        .filter(file => file.publish);

    const taggedFiles = parsedFiles
        .filter(file => textHasTag(file.tags, file.content, tag));

    return {
        props: {
            title: params.tag,
            posts: taggedFiles,
        },
    };
}

export default TagPage;