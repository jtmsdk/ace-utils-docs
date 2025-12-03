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

            <p>
                Use <code tag>ace-error</code> to render error messages.
            </p>

            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import error component and register it globally or locally. Place in template and provide the <code>Error</code> object as param.
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
            name: 'ace-error',
            type: 'component',
            params: [
                {
                    name: 'error', type: 'Error', default: '404-error',
                    desc: `The error object, expected to contain <code val>name</code>, <code val>status</code> and <code val>message</code>. If not provided, a generic 404 Not Found -error is used as default.`
                }
            ],
        },
        code: {
            usage: `
                import {AceError} from 'ace-error.component';

                const MyComponent = {
                    components: {
                        AceError
                    },
                    template: \`
                        <ace-error
                            :error="error">
                        </ace-error>
                    \`
                };
            `
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