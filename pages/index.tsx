import fs from 'fs';
import { FC } from 'react';
import Page from '../components/organisms/Page';
import parseIndex from '../components/utils/parseIndex';
import parseMarkdown from '../components/utils/parseMarkdown';

interface IndexProps {
    title: string;
    content: string;
}

const Index: FC<IndexProps> = ({ title, content }) => {
    const md = parseMarkdown(content);

    return (<>
        <Page
            title={title}
        >
            <div
                className='markdown-body'
                dangerouslySetInnerHTML={{ __html: md }}
            />
        </Page>
    </>)
}

export async function getStaticProps() {
    const fileText = fs.readFileSync(`public/README.md`, 'utf-8');
    const props = parseIndex(fileText);
    return {
        props: props
    };
}


export default Index;