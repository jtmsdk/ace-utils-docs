const meta = {
    id: 'ace-input.component',
    name: 'ace-input',
    title: 'Input',
    desc: `Renders an input form field.`
};

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <p>
                Use <code tag>ace-input</code> to render input fields. Supports all native input <a href="https://www.w3schools.com/html/html_form_input_types.asp">types</a>.
            </p>

            <ul>
                <li>
                    For multiline text input, see <doc-link id="ace-textarea.component">textarea</doc-link>. 
                </li>
                <li>
                    For value option selection, see <doc-link id="ace-select.component">select</doc-link>.
                </li>
                <li>
                    For value on/off toggling, see <doc-link id="ace-switch.component">switch</doc-link>.
                </li>
            </ul>

            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import input and register it globally or locally. Place in template and bind value using <code param>v-model</code>.
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
            name: 'ace-input',
            type: 'component',
            params: [
                {
                    name: 'type', type: 'string', default: 'text',
                    desc: `Input type, accepts any valid native input type.`
                },
                {
                    name: 'name', type: 'string',
                    desc: `Input form field name.`
                },
                {
                    name: 'label', type: 'string',
                    desc: `Input label text.`
                },
                {
                    name: 'modelValue', type: 'any',
                    desc: `The input value; use with <code param>v-model</code> directive.`
                },
                {
                    name: 'option', type: 'any',
                    desc: `Option value, applicable when type is <code val>radio</code>.` 
                },
                {
                    name: 'disabled', type: 'boolean',
                    desc: `If <code val>true</code>, sets the input in disabled state.`
                },
                {
                    name: 'required', type: 'boolean',
                    desc: `If <code val>true</code>, makes the input value mandatory.`
                },
                {
                    name: 'autocomplete', type: 'string',
                    desc: `Browser autocomplete <code val>on</code> or <code val>off</code>.`
                },
                {
                    name: 'placeholder', type: 'string',
                    desc: `Placeholder text value.`
                },
                {
                    name: 'minlength', type: 'number',
                    desc: `Minimum character count. Applicable for textual types.`
                },
                {
                    name: 'maxlength', type: 'number',
                    desc: `Maximum character count. Applicable for textual types.`
                },
                {
                    name: 'min', type: 'number',
                    desc: `Minimum allowed value.`
                },
                {
                    name: 'max', type: 'number',
                    desc: `Maximum allowed value.`
                },
                {
                    name: 'step', type: 'number',
                    desc: `Step interval for increasing or decreasing number value.` 
                }
            ],
            slots: [
                {
                    name: 'default',
                    desc: `Input label slot content.`
                }
            ],
            events: [
                {
                    name: 'input', value: 'any',
                    desc: `Emitted when user changes the input value.`
                }
            ]
        },
        code: {
            usage: `
                import {AceInput} from 'ace-input.component';

                const MyComponent = {
                    components: {
                        AceInput
                    },
                    template: \`
                        <ace-input 
                            type="text"
                            v-model="value">
                        </ace-input>
                    \`
                };
            `
        },
        examples: [
            {
                name: 'Type: text',
                js: `
                    {
                        template: \`
                            <ace-input
                                v-model="value">
                            </ace-input>
            
                            <p>value: {{''+value}}</p>
                        \`,
                        data: () => ({
                            value: null
                        })   
                    }
                `
            },
            {
                name: 'Type: number',
                js: `
                    {
                        template: \`
                            <ace-input 
                                type="number"
                                v-model="value">
                            </ace-input>
            
                            <p>value: {{''+value}}</p>
                        \`,
                        data: () => ({
                            value: null
                        })   
                    }
                `
            },
            {
                name: 'Type: checkbox',
                js: `
                    {
                        template: \`
                            <ace-input 
                                type="checkbox"
                                v-model="value1">
                                value: {{''+value1}}
                            </ace-input>
                            
                            <ace-input 
                                type="checkbox"
                                v-model="value2">
                                value: {{''+value2}}
                            </ace-input>
                        \`,
                        data: () => ({
                            value1: null,
                            value2: false
                        })   
                    }
                `
            },
            {
                name: 'Type: radio',
                js: `
                    {
                        template: \`
                            <ace-input 
                                type="radio"
                                name="myGroup"
                                v-model="value"
                                option="First">
                                First option
                            </ace-input>
                            
                            <ace-input 
                                type="radio"
                                name="myGroup"
                                v-model="value"
                                option="Second">
                                Second option
                            </ace-input>
                            
                            <ace-input 
                                type="radio"
                                name="myGroup"
                                v-model="value"
                                option="Third">
                                Third option
                            </ace-input>
            
                            <p>value: {{''+value}}</p>
                        \`,
                        data: () => ({
                            value: null
                        })   
                    }
                `
            },
            {
                name: 'Type: color',
                js: `
                    {
                        template: \`
                            <ace-input
                                type="color"
                                v-model="value">
                                value: {{''+value}}
                            </ace-input>                        
                        \`,
                        data: () => ({
                            value: null
                        })
                    }
                `
            },
            {
                name: 'Type: range',
                js: `
                    {
                        template: \`
                            <ace-input 
                                type="range"
                                v-model="value">
                            </ace-input>
            
                            <p>value: {{''+value}}</p>
                        \`,
                        data: () => ({
                            value: null
                        })   
                    }
                `
            },
            {
                name: 'Type: date',
                js: `
                    {
                        template: \`
                            <ace-input 
                                type="date"
                                v-model="value">
                            </ace-input>
            
                            <p>value: {{''+value}}</p>
                        \`,
                        data: () => ({
                            value: null
                        })   
                    }
                `
            },
            {
                name: 'Type: time',
                js: `
                    {
                        template: \`
                            <ace-input 
                                type="time"
                                v-model="value">
                            </ace-input>
            
                            <p>value: {{''+value}}</p>
                        \`,
                        data: () => ({
                            value: null
                        })   
                    }
                `
            },
            {
                name: 'Type: datetime-local',
                js: `
                    {
                        template: \`
                            <ace-input 
                                type="datetime-local"
                                v-model="value">
                            </ace-input>

                            <p>value: {{''+value}}</p>
                        \`,
                        data: () => ({
                            value: null
                        })
                    }
                `
            }
        ]
    })
};