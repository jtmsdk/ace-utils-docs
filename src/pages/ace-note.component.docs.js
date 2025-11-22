import {AceNote} from '@ace/components';

const name = 'ace-note';
const meta = {
    id: 'ace-note.component',
    name: name,
    title: 'Note',
    desc: `Renders a highlighted block of content providing additional information.`
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
                    Use <doc-tag>${name}</doc-tag> to render a block of content used for highlighting additional information regarding current context.
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
                    desc: `The note body content.`
                }
            ]
        },
        examples: [
            {
                js: `
                    {
                        template: \`
                            <ace-note
                                header="For your information...">
                                <p>
                                    Note: this provides additional 
                                    information for the current context.
                                    It is separated from the surrounding 
                                    text flow so that it can be understood 
                                    as standalone content.
                                </p>
                            </ace-note>
                        \`
                    }
                `
            }
        ]
    })
};