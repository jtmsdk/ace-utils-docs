import {AceTabs} from '@ace/components';

const name = 'ace-tabs';
const meta = {
    id: 'ace-tabs.component',
    name: name,
    title: 'Tabs',
    desc: `Renders tab navigation buttons.`
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
                    Use <doc-tag>${name}</doc-tag> to render tab navigation buttons.
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
                desc: `<p>Renders the tab list container.</p>`,
                params: [
                    { 
                        name: 'modelValue', type: 'any', 
                        desc: `Selected <doc-tag>ace-tab</doc-tag> <doc-param>value</doc-param>.`
                    }
                ],
                slots: [
                    {
                        name: 'default',
                        desc: `One or more <doc-tag>ace-tab</doc-tag> elements.`
                    }
                ]
            },
            {
                name: 'ace-tab',
                type: 'component',
                desc: `<p>Renders individual tab button.</p>`,
                params: [
                    { 
                        name: 'value', type: 'any', 
                        desc: `Tab value. When selected, becomes the <doc-tag>ace-tabs</doc-tag> model value.`
                    }
                ],
                slots: [
                    {
                        name: 'default',
                        desc: `Tab label content.`
                    }
                ]
            }
        ],
        examples: [
            {
                js: `
                    {
                        data: () => ({
                            tab: 1
                        }),
                        template: \`
                            <ace-tabs v-model="tab">
                                <ace-tab value="1">First</ace-tab>
                                <ace-tab value="2">Second</ace-tab>
                                <ace-tab value="3">Third</ace-tab>
                            </ace-tabs>
                            
                            <div v-if="tab==1">
                                <p>This is the first tab content</p>
                            </div>
                            <div v-if="tab==2">
                                <p>This is the second tab content</p>
                            </div>
                            <div v-if="tab==3">
                                <p>This is the third tab content</p>
                            </div>
                        \`
                    }
                `
            }
        ]
    })
};