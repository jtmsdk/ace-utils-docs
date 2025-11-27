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

            <doc-desc>
                <p>
                    Use <doc-tag>ace-accordion</doc-tag> and <doc-tag>ace-accordion-item</doc-tag> to render a list of collapsible and expandable containers.
                </p>
            </doc-desc>

            <doc-api
                :api="api">
            </doc-api>

            <h2>Import</h2>

            <p>
                Import accordion components and register them as global or local components.
            </p>

            <ace-codeblock
                :code="code.import"
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
                        name: 'multiple', type: 'boolean', default: 'false',
                        desc: `If true, multiple items can be opened at the same time.`
                    }
                ],
                slots: [
                    {
                        name: 'default',
                        desc: `Accordion items; one or more <doc-tag>ace-accordion-item</doc-tag> components.`
                    }
                ]
            },
            {
                name: `ace-accordion-item`,
                type: 'component',
                params: [
                    {
                        name: 'open', type: 'boolean',
                        desc: `If true, this item is initially opened when mounted in DOM.`
                    },
                ],
                slots: [
                    {
                        name: 'header',
                        desc: `Accordion item header content.`
                    },
                    {
                        name: 'body',
                        desc: `Accordion item body content.`
                    }
                ]
            }
        ],
        code: {
            import: `
                import {AceAccordion, AceAccordionItem} from 'ace-accordion.component';

                const MyComponent = {
                    components: {
                        AceAccordion,
                        AceAccordionItem
                    }
                }
            `
        },
        examples: [
            {
                js: `
                    {
                        template: \`
                            <ace-accordion>
                                <ace-accordion-item v-for="item in items">
                                    <template #header>
                                        {{item.header}}
                                    </template>
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