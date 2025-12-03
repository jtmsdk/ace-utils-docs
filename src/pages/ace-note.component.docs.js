const meta = {
    id: 'ace-note.component',
    name: 'ace-note',
    title: 'Note',
    desc: `Renders a note block providing additional information.`
};

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <p>
                Use <code tag>ace-note</code> to render a highlighted block of content used for providing additional information.
            </p>

            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import note and register it globally or locally. Place in template and add content with slot.
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
        code: {
            usage: `
                import {AceNote} from 'ace-note.component';

                const MyComponent = {
                    components: {
                        AceNote
                    },
                    template: \`
                        <ace-note
                            header="Hello there">
                            <!-- Note content here -->
                        </ace-note>
                    \`
                };
            `
        },
        examples: [
            {
                js: `
                    {
                        template: \`
                            <ace-note
                                header="For your information">
                                <p>
                                    This provides additional 
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