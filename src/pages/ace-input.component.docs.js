const meta = {
    id: 'ace-input.component',
    name: 'ace-input',
    title: 'Input',
    desc: `Renders an input field.`
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
                    name: 'v-model', type: 'any',
                    desc: `Use v-model to bind input value.`
                },
                {
                    name: 'option', type: 'string|number|object',
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
                    desc: `Minumum allowed value.`
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
        examples: [
            {
                name: 'Text input',
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
                name: 'Number input',
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
                name: 'Checkbox input',
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
                name: 'Radio input',
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
                name: 'Color input',
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
                name: 'Range input',
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
                name: 'Date input',
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
                name: 'Time input',
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
                name: 'Datetime input',
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