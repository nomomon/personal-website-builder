// @ts-nocheck
import A from "@/components/A";

const MarkdownComponents = {
    a: (href, children, ...props) => (<A href={href} {...props}>{children}</A>),
}

export default MarkdownComponents;