import MarkdownPage from '@/components/MarkdownPage';
import PrepLink from '@/components/utils/PrepLink';
import config from '@/configuration';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { FC, ReactElement } from 'react';

interface IndexProps {
    fileName: string;
    file: string;
}

const Index: FC<IndexProps> = ({ file, fileName }): ReactElement => {
    return <MarkdownPage markdown={file} title={fileName} />;
};

export function getStaticPaths() {
    const filePaths = readdirSync(config.srcDir);
    const paths = filePaths.map((filePath) => {
        return {
            params: {
                slug: PrepLink(filePath),
            },
        };
    });

    return {
        paths: paths,
        fallback: false,
    };
}

export function getStaticProps({ params: { slug } }: any) {
    // Find the file that matches the slug
    const filePaths = readdirSync(config.srcDir);
    const filePath = filePaths.find(
        (filePath) => PrepLink(filePath) === slug
    ) as string;

    // Read the file
    const path = join(config.srcDir, filePath);
    const file = readFileSync(path, 'utf8');

    // File name
    const fileName = filePath.split('.')[0];

    return {
        props: {
            fileName: fileName,
            file: file,
        },
    };
}

export default Index;
