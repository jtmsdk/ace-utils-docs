import {AceSpinner} from '@ace/components';

const name = 'ace-spinner';
const meta = {
    id: 'ace-spinner.component',
    name: name,
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

            <doc-desc>
                <p>
                    Use <doc-tag>${name}</doc-tag> to render a spinning load indicator. See <doc-link id="ace-spinner.service">spinner service</doc-link> for programmatic use.
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
                    name: 'size', type: 'number, string', default: '120px',
                    desc: `Spinner size as number of pixels or as CSS length value.`
                }
            ]
        },
        examples: [
            {
                js: `
                    {
                        template: \`
                            <ace-spinner></ace-spinner>
                        \`
                    }
                `
            }
        ]
    })
};