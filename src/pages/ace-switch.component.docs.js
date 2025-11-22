import {AceSwitch} from '@ace/components';

const name = 'ace-switch';
const meta = {
    id: 'ace-switch.component',
    name: name,
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
                    Use <doc-tag>${name}</doc-tag> to render a toggle switch input.
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
                    desc: `If <doc-value>true</doc-value>, input is disabled.`
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
                        Use switch to toggle settings or features "on" or "off". Once touched, switch sets the bound model value either <doc-value>true</doc-value> or <doc-value>false</doc-value>.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <${name} v-model="value1">
                                First (value={{''+value1}})
                            </${name}>
                            <br>
                            <${name} v-model="value2">
                                Second (value={{''+value2}})
                            </${name}>
                            <br>
                            <${name} v-model="value3">
                                Third (value={{''+value3}})
                            </${name}>
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
                name: 'size',
                desc: `
                    <p>
                        Use <doc-param>size</doc-param> param to increase or decrese the size of the toggle switch control.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <${name} 
                                size="80px">
                            </${name}>
                        \`
                    }
                    
                `
            }
        ]
    })
};