const meta = {
    id: 'ace-footer.component',
    name: 'ace-footer',
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

            <p>
                Use <code tag>ace-footer</code> to render footer section used at the bottom of pages.
            </p>
        
            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import footer and register it globally or locally. Place in template and provide content.
            </p>

            <ace-codeblock
                :code="code.usage">
            </ace-codeblock>

            <doc-examples
                :examples="examples">
            </doc-examples>

        </doc-page>
    `,
    data: () => ({
        meta,
        api: {
            name: 'ace-footer',
            type: 'component',
            slots: [
                {
                    name: 'default', 
                    desc: `The footer body content.`
                }
            ]
        },
        code: {
            usage: `
                import {AceFooter} from 'ace-footer.component';

                const MyComponent = {
                    components: {
                        AceFooter
                    },
                    template: \`
                        <ace-footer>
                            &copy; 2025 John Doe | Powered by ace-utils
                        </ace-footer>
                    \`
                };
            `
        },
        examples: [
            {
                js: `
                    {
                        template: \`
                            <ace-footer>
                                &copy; {{year}} John Doe | Powered by ace utils
                            </ace-footer>
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