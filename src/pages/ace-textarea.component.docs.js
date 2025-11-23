const meta = {
    id: 'ace-textarea.component',
    name: 'ace-textarea',
    title: 'Textarea',
    desc: `Renders a multiline text input field.`
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
                    Use <doc-tag>ace-textarea</doc-tag> to render a multiline text input field.
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
            name: 'ace-textarea',
            type: 'component',
            params: [
                {
                    name: 'name', type: 'string',
                    desc: `Form field name.`
                },
                {
                    name: 'modelValue', type: 'string',
                    desc: `Textarea text value.`
                },
                { 
                    name: 'autoresize', type: 'boolean', default: false, 
                    desc: `If <doc-value>true</doc-value>, makes the component grow and shrink according to the text value height.`
                },
                {
                    name: 'minrows', type: 'number', default: 3,
                    desc: `Minimum number of text rows shown in component.`
                },
                {
                    name: 'maxrows', type: 'number', default: 20,
                    desc: `Maximum number of text rows shown in component.`
                },
                {
                    name: 'label', type: 'string',
                    desc: `Label text shown for the textarea.`
                },
                {
                    name: 'spellcheck', type: 'boolean', default: 'true',
                    desc: `If <doc-value>true</doc-value>, applies browser spellchecking for the text value.`
                },
                {
                    name: 'disabled', type: 'boolean',
                    desc: `If <doc-value>true</doc-value>, textarea is disabled.`
                },
                {
                    name: 'required', type: 'boolean',
                    desc: `If <doc-value>true</doc-value>, textarea value is mandatory.`
                }
            ],
            events: [
                {
                    name: 'input', value: 'string',
                    desc: `Emitted when user types into or otherwise changes the textarea value.`
                }
            ]
        },
        examples: [
            {
                js: `
                    {
                        template: \`
                            <ace-textarea
                                autoresize
                                v-model="value">
                            </ace-textarea>
                        \`,
                        data: () => ({
                            value: ''
                        })
                    }
                `
            }
        ]
    })
};