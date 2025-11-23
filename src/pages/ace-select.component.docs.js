import windowsIcon from '@ace.icons/windows.svg?no-inline';
import linuxIcon from '@ace.icons/linux.svg?no-inline';
import androidIcon from '@ace.icons/android.svg?no-inline';
import menuIcon from '@ace.icons/menu.svg?no-inline';
import penIcon from '@ace.icons/pen.svg?no-inline';
import copyIcon from '@ace.icons/copy.svg?no-inline';
import xIcon from '@ace.icons/x.svg?no-inline';

const meta = {
    id: 'ace-select.component',
    name: 'ace-select',
    title: 'Select',
    desc: `Renders a select input or dropdown.`
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
                    Use <doc-tag>ace-select</doc-tag> to render a select input or a dropdown. Used for selecting value options or triggering actions from a list of available options.
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
        api: [
            {
                name: 'ace-select',
                type: 'component',
                params: [
                    {
                        name: 'name', type: 'string',
                        desc: `Form field name.`
                    },
                    {
                        name: 'label', type: 'string',
                        desc: `Label text for this field.`
                    },
                    {
                        name: 'modelValue', type: 'any',
                        desc: `Selected option value.`
                    },
                    {
                        name: 'options', type: 'array',
                        desc: `Array of available menu options. Options can be primitive values or objects. In case they are objects, check the <doc-param>option</doc-param> API below for available option object properties.`
                    },
                    {
                        name: 'optionlabel', type: 'string', default: 'label',
                        desc: `Only applicable if options are objects. Defines which option property is shown as the option label. `
                    },
                    {
                        name: 'optionvalue', type: 'string',
                        desc: `Only applicable if options are objects. Defines which option property is set as the model value when selected. If not provided, the option object itself it set as the model value.`
                    },
                    {
                        name: 'optionicon', type: 'string', default: 'icon',
                        desc: `Only applicable if options are objects. Defines which option property is shown as the option icon. If <doc-value>false</doc-value>, no icon is shown for the options.`
                    },
                    {
                        name: 'clearable', type: 'boolean', default: true,
                        desc: `If <doc-value>true</doc-value>, control for clearing the selected value is shown in the component.`
                    },
                    {
                        name: 'disabled', type: 'boolean', default: false,
                        desc: `If <doc-value>true</doc-value>, component is disabled.`
                    },
                    {
                        name: 'required', type: 'boolean',
                        desc: `If <doc-value>true</doc-value>, selecting a value is mandatory.`
                    }
                ],
                functions: [
                    {
                        name: 'open()',
                        desc: `Opens the select menu.`
                    },
                    {
                        name: 'close()',
                        desc: `Closes the select menu.`
                    },
                    {
                        name: 'select(option, close)',
                        desc: `Selects the given option and optionally closes the select menu. Returns the option value.`,
                        params: [{
                            name: 'option', type: 'any',
                            desc: `Selected option.`
                        }, {
                            name: 'close', type: 'boolean', default: true,
                            desc: `If <doc-value>true</doc-value>, select menu is closed after the selection.`
                        }]
                    }
                ],
                slots: [
                    {
                        name: 'default',
                        desc: `Select menu body contents. See <doc-link id="ace-menu.component">menu</doc-link> component for menu content elements. Use this slot if you want to provide options with custom functionality/behavior.`
                    },
                    {
                        name: 'trigger',
                        desc: `Select menu trigger element. Use this slot to replace the default select button used for opening the menu.`
                    },
                    {
                        name: 'value',
                        desc: `Select button value content. Use this slot to provide custom content for the selected value shown in select button.`
                    }
                ],
                events: [
                    {
                        name: 'input', value: 'any',
                        desc: `Emitted when user selects an option with the component. The selected option or optionvalue is passed as the <doc-value>$event</doc-value>.`
                    }
                ]
            },
            {
                name: 'option',
                type: 'object',
                params: [
                    {
                        name: 'label', type: 'string',
                        desc: `Text label shown for the option.`
                    },
                    {
                        name: 'icon', type: 'string',
                        desc: `Icon shown for the option.`
                    },
                    {
                        name: 'action', type: 'function',
                        desc: `Callback action to be executed when the option is selected. The option or optionvalue is passed as parameter for the callback.`
                    },
                    {
                        name: 'disabled', type: 'boolean',
                        desc: `If <doc-value>true</doc-value>, option is disabled.`
                    }
                ]
            }
        ],
        examples: [
            {
                name: 'Selecting primitive values',
                desc: `
                    <p>
                        If the provided <doc-param>options</doc-param> are primitive values, the values are displayed and selected as they are.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-select
                                v-model="value"
                                :options="options">
                            </ace-select>
            
                            <p>value: {{value}}</p>
                        \`,
                        data: () => ({
                            value: null,
                            options: [1,2,3,4,5,6,7,8,9,10]
                        })
                    }
                `
            },
            {
                name: 'Selecting objects',
                desc: `
                    <p>
                        If the provided <doc-param>options</doc-param> are objects, the <doc-param>optionlabel</doc-param> property will be displayed as the option label. When user selects an option, the <doc-param>optionvalue</doc-param> property or (if optionvalue is not provided) the option object itself is set as the model value.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-select
                                v-model="value"
                                :options="options">
                            </ace-select>
            
                            <p>value: {{value}}</p>
                        \`,
                        data: () => ({
                            value: null,
                            options: [
                                {label: 'Windows', icon: "${windowsIcon}", value: 1},
                                {label: 'Linux', icon: "${linuxIcon}", value: 2},
                                {label: 'Android', icon: "${androidIcon}", value: 3}
                            ]
                        })
                    }
                `
            },
            {
                name: 'Custom options using slot',
                desc: `
                    <p>
                        Use the <doc-param>default</doc-param> slot to provide the select menu options through the template. With this approach you can fully customize the menu contents, styling and behavior. If the slotted options have <doc-param>value</doc-param>, that value becomes the component model value when selected.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-select
                                v-model="value">
                                <ace-option-header>
                                    String values
                                </ace-option-header>
                                <ace-option value="First">
                                    This is <b>first</b>
                                </ace-option>
                                <ace-option value="Second">
                                    This is <b>second</b>
                                </ace-option>
                                <ace-option value="Third">
                                    This is <b>third</b>
                                </ace-option>
                                <ace-option-header>
                                    Number values
                                </ace-option-header>
                                <ace-option :value="1">
                                    This is <b>1</b>
                                </ace-option>
                                <ace-option :value="2">
                                    This is <b>2</b>
                                </ace-option>
                                <ace-option :value="3">
                                    This is <b>3</b>
                                </ace-option>
                            </ace-select>

                            <p>value: {{value}}</p>
                        \`,
                        data: () => ({
                            value: null
                        })
                    }
                `
            },
            {
                name: 'Custom value using slot',
                desc: `
                    <p>
                        Use <doc-param>value</doc-param> slot to provide the selected value content. This allows you to customize the how the selected option value is displayed inside the select button.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-select 
                                v-model="value"
                                :options="options">
                                <template v-slot:value>
                                    <span>{{value ? 'Start at '+value : ''}}</span>
                                </template>
                            </ace-select>
                        \`,
                        data: () => ({
                            value: null,
                            options: [
                                '08:00',
                                '12:00',
                                '16:00',
                                '20:00'
                            ]
                        })
                    }   
                `
            },
            {
                name: 'Custom trigger using slot',
                desc: `
                    <p>
                        Use <doc-param>trigger</doc-param> slot to replace the default select button. This allows you to trigger the menu from any custom element.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-select 
                                ref="select">
                                <template v-slot:trigger>
                                    <ace-button text
                                        @click="$refs.select.open()"
                                        icon="${menuIcon}">
                                    </ace-button>
                                </template>
                                <ace-option 
                                    icon="${penIcon}"
                                    @click="handle()">
                                    Edit
                                </ace-option>
                                <ace-option 
                                    icon="${copyIcon}"
                                    @click="handle()">
                                    Copy
                                </ace-option>
                                <ace-option 
                                    icon="${xIcon}"
                                    @click="handle()">
                                    Remove
                                </ace-option>
                            </ace-select>
                        \`,
                        methods: {
                            handle() {
                                this.$refs.select.close();
                            }
                        }
                    }
                `
            }
        ]
    })
};