import downloadIcon from '@ace.icons/download.svg?inline';
import shareIcon from '@ace.icons/share.svg?inline';
import removeIcon from '@ace.icons/x.svg?inline';
import * as AceMenu from '@ace/components';

const name = 'ace-menu';
const meta = {
    id: 'ace-menu.component',
    name: name,
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

            <doc-desc>
                <p>
                    Use <doc-tag>${name}</doc-tag> to render a general purpose menu that contains one or more <doc-tag>ace-option</doc-tag> items. Used in navigation, context menus and drop menus.
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
                name: name,
                type: 'component',
                desc: `<p>Renders the menu root component inside which all of the following components below can be added.</p>`,
                slots: [
                    {
                        name: 'default',
                        desc: `Menu body content.`
                    }
                ],
                events: [
                    {
                        name: 'option', value: 'any',
                        desc: `Emitted when user selects an <doc-tag>ace-option</doc-tag> with <doc-param>value</doc-param>. The option <doc-param>value</doc-param> is emitted as <doc-value>$event</doc-value>.`
                    },
                    {
                        name: 'focuswithinout',
                        desc: `Emitted when menu loses focus.`
                    }
                ]
            },
            {
                name: 'ace-option-header',
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
                        desc: `Group content.`
                    }
                ],
                functions: [
                    {
                        name: 'open',
                        desc: `Opens the option group.`
                    },
                    {
                        name: 'close',
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
                        desc: `Option value. If provided, this value is emitted in <doc-event>input</doc-event> event when this option is selected.`
                    }, 
                    {
                        name: 'icon', type: 'string',
                        desc: `Optional icon (icon name) to display for the option.`
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
                        desc: `Emitted when user selects this option (whether it has value or not). The option <doc-param>value</doc-param> is emitted as <doc-value>$event</doc-value>.`
                    }
                ]
            }
        ],
        examples: [
            {
                name: 'Action items',
                desc: `
                    <p>
                        By default <doc-tag>ace-menu</doc-tag> is a list of options items with no additional built-in functionality.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-menu>
                                <ace-option 
                                    icon="${downloadIcon}"
                                    value="1">
                                    Download
                                </ace-option>
                                <ace-option 
                                    icon="${shareIcon}"
                                    value="2">
                                    Share
                                </ace-option>
                                <ace-option 
                                    icon="${removeIcon}"
                                    value="3">
                                    Remove
                                </ace-option>
                            </ace-menu>
                        \`
                    }
                `
            },
            {
                name: 'Selectable items',
                desc: `
                    <p>
                        Use boolean param <doc-param>selected</doc-param> to set an option selected. If <doc-param>value</doc-param> is provided for the option, both the menu component and the option itself will emit the selected value in <doc-event>option</doc-event> event. Try selecting a value and see console log.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-menu
                                @option="handle($event)">
                                <ace-option 
                                    v-for="option in options"
                                    :selected="option.value === selected"
                                    :value="option.value">
                                    {{option.label}}
                                </ace-option>
                            </ace-menu>
                        \`,
                        data: () => ({
                            selected: null,
                            options: [
                                {label: 'First option', value: 1},
                                {label: 'Second option', value: 2},
                                {label: 'Third option', value: 3},
                                {label: 'Fourth option', value: 4}
                            ]
                        }),
                        methods: {
                            handle(event) {
                                console.log('Option value', event);
                                this.selected = event;
                            }
                        }
                    }
                `
            },
            {
                name: 'Headers and separators',
                desc: `
                    <p>
                        You can add <doc-tag>ace-option-header</doc-tag> headers and <doc-tag>hr</doc-tag> separator lines inside the menu.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-menu>
                                <ace-option-header>
                                    Option set 1
                                </ace-option-header>
                                <ace-option>
                                    Some option 1
                                </ace-option>
                                <ace-option>
                                    Some option 2
                                </ace-option>
                                <ace-option-header>
                                    Option set 2
                                </ace-option-header>
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
                        Options can be grouped under <doc-tag>ace-optiongroup</doc-tag> containers.
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