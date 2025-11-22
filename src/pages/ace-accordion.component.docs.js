import { AceAccordion } from "@ace/components";

const name = 'ace-accordion';
const meta = {
    id: 'ace-accordion.component',
    name: name,
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
                    Use <doc-tag>${name}</doc-tag> to render a list of collapsible and expandable containers. 
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
                params: [
                    {
                        name: 'multiple', type: 'boolean', default: 'false',
                        desc: `If true, multiple items can be opened at the same time.`
                    }
                ],
                slots: [
                    {
                        name: 'default',
                        desc: `Accordion items; one or more <doc-tag>${name}-item</doc-tag> components.`
                    }
                ]
            },
            {
                name: `${name}-item`,
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
        examples: [
            {
                js: `
                    {
                        template: \`
                            <${name}>
                                <${name}-item v-for="item in items">
                                    <template #header>
                                        {{item.header}}
                                    </template>
                                    <template #body>
                                        {{item.body}}
                                    </template>
                                </${name}-item>
                            </${name}>
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