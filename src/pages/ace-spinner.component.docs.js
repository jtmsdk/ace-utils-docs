const meta = {
    id: 'ace-spinner.component',
    name: 'ace-spinner',
    title: 'Spinner',
    desc: `Renders a spinning load indicator.`
};

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <p>
                Use <code tag>ace-spinner</code> to render a spinning load indicator. See <doc-link id="ace-spinner.service">spinner service</doc-link> for programmatic use.
            </p>

            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <doc-examples
                :examples="examples">
            </doc-examples>
        </doc-page>
    `,
    data: () => ({
        meta,
        api: {
            name: 'ace-spinner',
            type: 'component',
            params: [
                { 
                    name: 'size', type: 'number|string', default: '120px',
                    desc: `Spinner size as number of pixels or as CSS length value.`
                }
            ]
        },
        examples: [
            {
                js: `
                    {
                        template: \`
                            <ace-spinner
                                size="120px">
                            </ace-spinner>
                        \`
                    }
                `
            }
        ]
    })
};