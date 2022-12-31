import { FC } from "react";
import Page from "../../components/organisms/Page";
import deepReadFilesSync from "../../components/utils/deepReadFilesSync";
import fs from 'fs';
import postPathToLink from "../../components/utils/postPathToLink";
import parsePost from "../../components/utils/parsePost";
import PostNavline from "../../components/molecules/PostNavLine";

interface PostProps {
    path: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
    md: string;
}

const Post: FC<PostProps> = ({ title, md, date, tags }) => {
    return (
        <Page
            title={title}
            useNavLine={false}
        >
            <PostNavline
                date={date}
                tags={tags}
            />
            <div
                className='markdown-body'
                dangerouslySetInnerHTML={{ __html: md }}
            />
        </Page>
    );
};

export async function getStaticPaths() {
    const filePaths = deepReadFilesSync('public');

    const filesParam = filePaths.map(path => ({
        params: {
            fileName: postPathToLink(path)
        }
    }));

    return {
        paths: filesParam,
        fallback: true
    }
}

export async function getStaticProps(
    { params: { fileName } }: { params: { fileName: string } }
) {
    const filePath = deepReadFilesSync('public').find(path => (
        postPathToLink(path) === fileName
    )) as string;

    const file = parsePost({
        path: filePath,
        text: fs.readFileSync(filePath, 'utf-8')
    });

    return {
        props: {
            ...file
        }
    };
}

export default Post;