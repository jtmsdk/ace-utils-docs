const meta = {
    id: 'ace-note.component',
    name: 'ace-note',
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
                    Use <doc-tag>ace-note</doc-tag> to render a block of content used for highlighting additional information regarding current context.
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
            name: 'ace-note',
            type: 'component',
            params: [
                {
                    name: 'header', type: 'string',
                    desc: `Optional header text for the note.`
                }
            ],
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