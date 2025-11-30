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

            <doc-desc>
                <p>
                    Use <code tag>ace-footer</code> to render footer section used at the bottom of pages.
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
            name: 'ace-footer',
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