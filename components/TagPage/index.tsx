import Head from 'next/head';
import { FC } from 'react';
import A from '../A';
import MarkdownTitle from '../MarkdownTitle';
import PostCard from '../PostCard';
import Post from '@/components/types/Post';

interface TagPageProps {
    tag: string;
    posts: Post[];
}

const TagPage: FC<TagPageProps> = ({ tag, posts }) => {
    return (
        <div className="w-full overflow-y-auto">
            <Head>
                <title>{tag || 'Tag'}</title>
            </Head>
            <MarkdownTitle
                frontmatter={{
                    title: tag,
                }}
            />
            <section className="flex flex-col gap-4 w-full max-w-xl m-auto mt-8 max-sm:px-4">
                {posts.map((post, i) => (
                    <A href={'/' + post.slug}>
                        <PostCard key={i} post={post} />
                    </A>
                ))}
            </section>
        </div>
    );
};

export default TagPage;
