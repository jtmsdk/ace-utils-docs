import {AceFooter} from '@ace/components';

const name = 'ace-footer';
const meta = {
    id: 'ace-footer.component',
    name: name,
    title: 'Footer',
    desc: `Renders footer section shown at the bottom of pages.`
};

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <doc-desc>
                <p>
                    Use <doc-tag>${name}</doc-tag> to render footer section used at the bottom of pages.
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
            slots: [
                {
                    name: 'default', 
                    desc: `The footer body content.`
                }
            ]
        },
        examples: [
            {
                js: `
                    {
                        template: \`
                            <${name}>
                                &copy; {{year}} John Doe | Powered by ace utils
                            </${name}>
                        \`,
                        data: () => ({
                            year: (new Date()).getFullYear()
                        })
                    }
                `
            }
        ]
    })
}