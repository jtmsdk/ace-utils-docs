const meta = {
    id: 'ace-accordion.component',
    name: 'ace-accordion',
    title: 'Accordion',
    desc: `Renders a list of collapsible and expandable containers.`
};

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <p>
                Use <code tag>ace-accordion</code> to render a list of collapsible and expandable containers.
            </p>
   
            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import all accordion component parts and register them as globally or locally. Place in template and add one or more accordion items inside.
            </p>

            <ace-codeblock
                :code="code.usage"
                lang="javascript">
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
                name: 'ace-accordion',
                type: 'component',
                params: [
                    {
                        name: 'multiple', type: 'boolean', default: false,
                        desc: `If true, multiple items can be opened at the same time.`
                    }
                ],
                slots: [
                    {
                        name: 'default',
                        desc: `Accordion items; one or more <code tag>ace-accordion-item</code> components.`
                    }
                ],
                functions: [
                    {
                        name: 'closeAll()',
                        desc: `Closes all accordion items.`
                    },
                    {
                        name: 'openAll()',
                        desc: `Opens all accordion items.`
                    }
                ]
            },
            {
                name: `ace-accordion-item`,
                type: 'component',
                params: [
                    {
                        name: 'header', type: 'string',
                        desc: `Accordion item header text.`
                    },
                    {
                        name: 'disabled', type: 'boolean', default: false,
                        desc: `If true, disables toggling of this item as well as all inputs/controls inside body.`
                    },
                    {
                        name: 'expanded', type: 'boolean', default: false,
                        desc: `If true, this item is initially opened.`
                    }
                ],
                slots: [
                    {
                        name: 'default',
                        desc: `Accordion header content using <code tag>ace-accordion-item-header</code>.`
                    },
                    {
                        name: 'body',
                        desc: `Accordion item body content.`
                    }
                ],
                functions: [
                    {
                        name: 'open()',
                        desc: `Opens the accordion item.`
                    },
                    {
                        name: 'close()',
                        desc: `Closes the accordion item.`
                    },
                    {
                        name: 'toggle()',
                        desc: `Toggles the accordion item open/closed.`
                    }
                ]
            },
            {
                name: `ace-accordion-item-header`,
                type: 'component',
                params: [
                    {
                        name: 'disabled', type: 'boolean', default: false,
                        desc: `If true, disables toggling of this item.`
                    }
                ],
                slots: [
                    {
                        name: 'default',
                        desc: `Accordion item header content.`
                    }
                ]
            }
        ],
        code: {
            usage: `
                import * as accordion from 'ace-accordion.component';

                const MyComponent = {
                    components: {
                        ...accordion
                    },
                    template: \`
                        <ace-accordion>
                            <ace-accordion-item>
                                <ace-accordion-item-header>
                                    This is header
                                <ace-accordion-item-header>
                                <template #body>
                                    This is body
                                </template>
                            </ace-accordion-item>
                        </ace-accordion>
                    \`
                };
            `
        },
        examples: [
            {
                js: `
                    {
                        template: \`
                            <ace-accordion>
                                <ace-accordion-item
                                    v-for="item in items">
                                    <ace-accordion-item-header>
                                        {{item.header}}
                                    </ace-accordion-item-header>
                                    <template #body>
                                        {{item.body}}
                                    </template>
                                </ace-accordion-item>
                            </ace-accordion>
                        \`,
                        data: () => ({
                            items: [
                                {header: 'First', body: 'This is item 1 body'},
                                {header: 'Second', body: 'This is item 2 body'},
                                {header: 'Third', body: 'This is item 3 body'},
                                {header: 'Fourth', body: 'This is item 4 body'}
                            ]
                        })
                    }
                `
            }
        ]
    })
};