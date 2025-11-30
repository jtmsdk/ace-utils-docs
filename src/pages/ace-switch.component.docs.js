const meta = {
    id: 'ace-switch.component',
    name: 'ace-switch',
    title: 'Switch',
    desc: `Renders a toggle switch input.`
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
                    Use <code tag>ace-switch</code> to render a toggle switch input.
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
            name: 'ace-switch',
            type: 'component',
            params: [
                {
                    name: 'name', type: 'string',
                    desc: `Form field name.`
                },
                {
                    name: 'modelValue', type: 'boolean',
                    desc: `Input value (on/off).`
                },
                {
                    name: 'label', type: 'string',
                    desc: `Label text shown next to the input.`
                },
                {
                    name: 'disabled', type: 'boolean', default: false,
                    desc: `If <code val>true</code>, input is disabled.`
                },
                {
                    name: 'size', type: 'string', default: '40px',
                    desc: `Switch size as any CSS length value.`
                }
            ],
            slots: [
                {
                    name: 'default',
                    desc: `Label content.`
                }
            ],
            events: [
                {
                    name: 'input', value: 'boolean',
                    desc: `Emitted when user changes the value.`
                }
            ]
        },
        examples: [
            {
                desc: `
                    <p>
                        Use switch to toggle settings or features "on" or "off". Once touched, switch sets the bound model value either <code val>true</code> or <code val>false</code>.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-switch v-model="value1">
                                First (value={{''+value1}})
                            </ace-switch>
                            <br>
                            <ace-switch v-model="value2">
                                Second (value={{''+value2}})
                            </ace-switch>
                            <br>
                            <ace-switch v-model="value3">
                                Third (value={{''+value3}})
                            </ace-switch>
                        \`,
                        data: () => ({
                            value1: null,
                            value2: undefined,
                            value3: true
                        })
                    }
                `
            },
            {
                name: 'Size',
                desc: `
                    <p>
                        Use <doc-param>size</doc-param> param to increase or decrese the size of the toggle switch control.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-switch 
                                size="80px">
                            </ace-switch>
                        \`
                    }
                `
            }
        ]
    })
};