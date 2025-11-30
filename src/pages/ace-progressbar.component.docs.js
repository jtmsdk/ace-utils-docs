const meta = {
    id: 'ace-progressbar.component',
    name: 'ace-progressbar',
    title: 'Progressbar',
    desc: `Renders a progress bar.`
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
                    Use <code tag>ace-progressbar</code> to render a progress bar.
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
            name: 'ace-progressbar',
            type: 'component',
            params: [
                {
                    name: 'value', type: 'number',
                    desc: `The progress value (out of max).`
                },
                {
                    name: 'unit', type: 'string', default: '%',
                    desc: `The progress value unit.`
                },
                {
                    name: 'max', type: 'number', default: 100,
                    desc: `The progress max/complete value.`
                }
            ],
            slots: [
                {
                    name: 'default',
                    desc: `Progressbar label content.`
                }
            ]
        },
        examples: [
            {
                name: 'value',
                js: `
                    {
                        template: \`
                            <ace-progressbar
                                :value="value">
                            </ace-progressbar>
            
                            <br>
                            
                            <ace-input
                                type="number"
                                v-model="value"
                                :max="100"
                                :min="0">
                            </ace-input>
                        \`,
                        data: () => ({
                            value: 100
                        })
                    }   
                `
            }
        ]
    })
};