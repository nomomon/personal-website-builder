import runtime from 'react/jsx-runtime';
import { runSync } from '@mdx-js/mdx';
import MarkdownComponents from '@/components/MarkdownComponents';

type MdxComponent = React.ExoticComponent<{
    components: Record<string, React.ReactNode>;
}>;

function MDXRender({ markdown }: { markdown: string }) {
    const { default: MdxModuleComponent } = runSync(markdown, runtime) as {
        default: MdxComponent;
    };

    return <MdxModuleComponent components={MarkdownComponents} />;
}

export default MDXRender;