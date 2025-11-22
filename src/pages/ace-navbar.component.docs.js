import {AceNavbar} from '@ace/components';

const name = 'ace-navbar';
const meta = {
    id: 'ace-navbar.component',
    name: name,
    title: 'Navbar',
    desc: `Renders a toolbar used in the top area views or pages.`
};

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <ace-msg type="warning">
                Work in progress
            </ace-msg>

            <doc-desc>
                <p>
                    Use <doc-tag>${name}</doc-tag> to render a navigation bar used on top of views and pages.
                </p>
            </doc-desc>

            <doc-api
                :api="api">
            </doc-api>

            <doc-examples
                :examples="examples">
            </doc-examples>
        </doc-page>
    `,
    data: () => ({
        meta,
        api: {
            name: name,
            type: 'component',
            params: [
                {
                    name: 'top', type: 'boolean', default: false,
                    desc: `If <doc-value>true</doc-value>, the navbar is fixed to the top of viewport.`
                }
            ],
            slots: [
                {
                    name: 'default',
                    desc: `Navbar body content.`
                }
            ]
        },
        examples: [
            {
                js: `
                    {
                        template: \`
                            <${name}>
                                <ace-button text>Section 1</ace-button>
                                <ace-button text>Section 2</ace-button>
                                <ace-button text>Section 3</ace-button>
                            </${name}>
                        \`
                    }
                `
            }
        ]
    })
}