const meta = {
    id: 'ace-error.component',
    name: 'ace-error',
    title: 'Error',
    desc: `Renders an error message used on error pages.`
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
                    Use <doc-tag>ace-error</doc-tag> to render error messages. Used mainly on error pages.
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
            name: 'ace-error',
            type: 'component',
            params: [
                {
                    name: 'error', type: 'object', default: '404-error',
                    desc: `The error object, expected to contain <doc-value>name</doc-value>, <doc-value>status</doc-value> and <doc-value>message</doc-value>. If not provided, a generic 404 Not Found -error is used as default.`
                }
            ],
        },
        examples: [
            {
                js: `
                    {
                        template: \`
                            <ace-error
                                :error="error">
                            </ace-error>
                        \`,
                        data: () => ({
                            error: null
                        })
                    }
                `
            }
        ]
    })
};