import downloadIcon from '@ace.icons/download.svg?no-inline';
import shareIcon from '@ace.icons/share.svg?no-inline';
import removeIcon from '@ace.icons/x.svg?no-inline';

const meta = {
    id: 'ace-menu.component',
    name: 'ace-menu',
    title: 'Menu',
    desc: `Renders a general purpose menu element.`
};

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <p>
                Use <code tag>ace-menu</code> to render a general purpose menu that contains one or more <code tag>ace-option</code> items.
            </p>    

            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import menu component parts and register them globally or locally. Place in template and add <code tag>ace-option</code> items inside.
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
        api: [
            {
                name: 'ace-menu',
                type: 'component',
                desc: `<p>Renders the menu root component, inside which all of the options, headers and option groups are added.</p>`,
                slots: [
                    {
                        name: 'default',
                        desc: `Menu body content; options, headers and option groups.`
                    }
                ],
                events: [
                    {
                        name: 'option', value: 'any',
                        desc: `Emitted when user selects an <code tag>ace-option</code> with <code param>value</code>. The option <code param>value</code> is emitted as <code val>$event</code>.`
                    },
                    {
                        name: 'focuswithinout',
                        desc: `Emitted when menu loses focus.`
                    }
                ]
            },
            {
                name: 'ace-option-h',
                type: 'component',
                desc: `<p>Renders a menu header element.</p>`,
                slots: [
                    {
                        name: 'default',
                        desc: `Header content.`
                    }
                ]
            },
            {
                name: 'ace-optiongroup',
                type: 'component',
                desc: `<p>Renders a menu option group.</p>`,
                params: [
                    {
                        name: 'label', type: 'string',
                        desc: `Option group label.`
                    }
                ],
                slots: [
                    {
                        name: 'default',
                        desc: `Group content; options and headers.`
                    }
                ],
                functions: [
                    {
                        name: 'open()',
                        desc: `Opens the option group.`
                    },
                    {
                        name: 'close()',
                        desc: `Closes the option group.`
                    }
                ]
            },
            {
                name: 'ace-option',
                desc: `<p>Renders a menu option.</p>`,
                type: 'component',
                params: [
                    {
                        name: 'label', type: 'string',
                        desc: `Option label text.`
                    }, 
                    {
                        name: 'value', type: 'any',
                        desc: `Option value. If provided, this value is emitted in <code event>option</code> event when this option is selected.`
                    }, 
                    {
                        name: 'selected', type: 'boolean', default: 'false',
                        desc: `If <code val>true</code>, option is rendered in selected state.`
                    },
                    {
                        name: 'icon', type: 'string',
                        desc: `Optional icon <code param>src</code> to display for the option.`
                    }, 
                    {
                        name: 'iconsize', type: 'string',
                        desc: `Optional icon size as CSS length value.`
                    }
                ],
                slots: [
                    {
                        name: 'default',
                        desc: `Option label content.`
                    }
                ],
                events: [
                    {
                        name: 'option', value: 'any',
                        desc: `Emitted when user selects this option (whether it has value or not). The option <doc-param>value</doc-param> is emitted as <code val>$event</code>.`
                    }
                ]
            }
        ],
        code: {
            usage: `
                import * as menu from 'ace-menu.component';

                const MyComponent = {
                    components: {
                        ...menu
                    },
                    template: \`
                        <ace-menu>
                            <ace-option value="1">
                                Option 1
                            </ace-option>
                            <ace-option value="2">
                                Option 2
                            </ace-option>
                            <ace-option value="3">
                                Option 3
                            </ace-option>
                        </ace-menu>
                    \`
                };
            `,
        },
        examples: [
            {
                name: 'Action items',
                desc: `
                    <p>
                        By default <code tag>ace-menu</code> is a list of options items with no built-in functionality. Just like with any elements, you can bind click etc. handlers for the options elements.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-menu>
                                <ace-option 
                                    icon="${downloadIcon}"
                                    @click="handle('Download')">
                                    Download
                                </ace-option>
                                <ace-option 
                                    icon="${shareIcon}"
                                    @click="handle('Share')">
                                    Share
                                </ace-option>
                                <ace-option 
                                    icon="${removeIcon}"
                                    @click="handle('Remove')">
                                    Remove
                                </ace-option>
                            </ace-menu>
                        \`,
                        methods: {
                            handle(e) {
                                window.alert('Action: ' + e);
                            }
                        }
                    }
                `
            },
            {
                name: 'Selectable items',
                desc: `
                    <p>
                        Use boolean param <code param>selected</code> to set option selected. If <code param>value</code> is provided for the option, both the menu component and the option will emit selected option value in <code event>option</code> event. Try selecting a value and see console log.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-menu
                                @option="handle($event, 'from menu')">
                                <ace-option 
                                    v-for="option in options"
                                    @option="handle($event, 'from option')"
                                    :selected="option.value === selected"
                                    :value="option.value">
                                    {{option.label}}
                                </ace-option>
                            </ace-menu>
                        \`,
                        data: () => ({
                            selected: null,
                            options: [
                                {label: 'Select option 1', value: 1},
                                {label: 'Select option 2', value: 2},
                                {label: 'Select option 3', value: 3},
                                {label: 'Select option 4', value: 4}
                            ]
                        }),
                        methods: {
                            handle(option, ...args) {
                                console.log(option, ...args);
                                this.selected = option;
                            }
                        }
                    }
                `
            },
            {
                name: 'Headers and separators',
                desc: `
                    <p>
                        You can add <code tag>ace-option-h</code> headers and <code tag>hr</code> separator lines inside the menu.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-menu>
                                <ace-option-h>
                                    Option set 1
                                </ace-option-h>
                                <ace-option>
                                    Some option 1
                                </ace-option>
                                <ace-option>
                                    Some option 2
                                </ace-option>
                                <ace-option-h>
                                    Option set 2
                                </ace-option-h>
                                <ace-option>
                                    Some option 1
                                </ace-option>
                                <ace-option>
                                    Some option 2
                                </ace-option>
                                <hr>
                                <ace-option>
                                    Some action
                                </ace-option>
                                <ace-option>
                                    Another action
                                </ace-option>
                            </ace-menu>
                        \`
                    }
                `
            },
            {
                name: 'Option groups',
                desc: `
                    <p>
                        Options can be grouped under <code tag>ace-optiongroup</code> containers, which results in collapsible groups with headers.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-menu>
                                <ace-optiongroup
                                    label="Group 1">
                                    <ace-option>
                                        Option 1
                                    </ace-option>
                                    <ace-option>
                                        Option 2
                                    </ace-option>
                                </ace-optiongroup>
                                <ace-optiongroup
                                    label="Group 2">
                                    <ace-option>
                                        Option 1
                                    </ace-option>
                                    <ace-option>
                                        Option 2
                                    </ace-option>
                                </ace-optiongroup>
                                <ace-optiongroup
                                    label="Group 3">
                                    <ace-option>
                                        Option 1
                                    </ace-option>
                                    <ace-option>
                                        Option 2
                                    </ace-option>
                                </ace-optiongroup>
                            </ace-menu>
                        \`
                    }
                `
            }
        ]
    })
};