import {AceProgressbar} from '@ace/components';

const name = 'ace-progressbar';
const meta = {
    id: 'ace-progressbar.component',
    name: name,
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
                    Use <doc-tag>${name}</doc-tag> to render a progress bar.
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
                            <${name}
                                :value="value">
                            </${name}>
            
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