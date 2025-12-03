const meta = {
    id: 'ace-alert.component',
    name: 'ace-alert',
    title: 'Alert',
    desc: `Renders notification or alert that draws user attention.`
};

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <p>
                Use <code tag>ace-alert</code> to render notifications or alerts that draw user attention. See <doc-link id="ace-alert.service">alert service</doc-link> for programmatic use.
            </p>

            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import alert and register it globally or locally. Place in template and add content with params or slots.
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
        api: {
            name: 'ace-alert',
            type: 'component',
            params: [
                { 
                    name: 'type', type: 'string',
                    desc: `
                        Defines the overall styling (color and icon) of the alert. Available types:
                        <code val>info</code>, 
                        <code val>success</code>,
                        <code val>warning</code>,
                        <code val>critical</code>,
                        <code val>black</code>.
                    `
                },
                {
                    name: 'header', type: 'string',
                    desc: `Alert header or title content.`
                },
                {
                    name: 'body', type: 'string',
                    desc: `Alert body or message content.`
                },
                {
                    name: 'icon', type: 'string',
                    desc: `Icon to display in the alert. Overrides the alert <doc-param>type</doc-param> default icon.`
                },
                {
                    name: 'closeable', type: 'boolean', default: true,
                    desc: `If true, close-button is shown in the alert. Clicking it emits <code event>close</code> event.`
                }
            ],
            slots: [
                {
                    name: 'header',
                    desc: `Alert header or title content.`
                },
                {
                    name: 'body',
                    desc: `Alert body or message content. Same as the default slot.`
                },
                {
                    name: 'default',
                    desc: `Alert body or message content.`
                }
            ],
            events: [
                {
                    name: 'close', value: 'this',
                    desc: `Emitted when user tries to close the alert. The alert message component instance is passed as the <code>$event</code> object.`
                }
            ]
        },
        code: {
            usage: `
                import {AceAlert} from 'ace-alert.component';

                const MyComponent = {
                    components: {
                        AceAlert
                    },
                    template: \`
                        <ace-alert type="info">
                            <template #header>
                                This is header
                            </template>
                            <template #body>
                                This is body
                            </template>
                        </ace-alert>
                    \`
                };
            `
        },
        examples: [
            {
                name: 'Alert types',
                js: `
                    {
                        template: \`
                            <ace-alert
                                v-for="type in types"
                                :type="type">
                                <template #header>
                                    This is header
                                </template>
                                <template #body>
                                    This is {{type || 'undefined or default'}} type alert.
                                </template>
                            </ace-alert>
                        \`,
                        data: () => ({
                            types: [
                                undefined,
                                'info',
                                'success',
                                'warning',
                                'critical',
                                'black'
                            ]
                        })
                    }
                `,
                css: `
                    .ace-alert {
                        margin-bottom: 1rem;
                    }
                `
            }
        ]
    })
};