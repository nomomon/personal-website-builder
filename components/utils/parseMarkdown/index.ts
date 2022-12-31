// @ts-ignore
import mdtl from 'markdown-it-task-lists';
import mdmj from 'markdown-it-mathjax3';
import mdh from 'markdown-it-highlightjs';
import mdc from 'markdown-it-container';
import md from 'markdown-it';

const mdSettings = {
    html: true,
    linkify: true,
    breaks: true,
    typographer: true,
}

const highlightSettings = {
    inline: false,
}

const parseMarkDown = (text: string) => {
    const mdText = md(mdSettings)
        // .use(mdi, idSettings)
        .use(mdmj, {})
        .use(mdc, 'callout', {
            validate: (params: string) => {
                return params.trim().match(/^\[\!(.*)\]\s+(.*)$/);
            },
            render: (tokens: any, idx: number) => {
                const m = tokens[idx].info.trim().match(/^\[\!(.*)\]\s+(.*)$/);
                if (tokens[idx].nesting === 1) {
                    return `<div class="callout callout-${m[1].toLowerCase()}"><div class="callout-title"><span class="callout-icon"></span>${m[2]}</div><div class="callout-content"> `;
                } else {
                    return '</div></div>';
                }
            }
        })
        .use(mdtl, { label: true, labelAfter: true })
        .use(mdh, highlightSettings)
        .render(text);
    return mdText;
}

export default parseMarkDown;