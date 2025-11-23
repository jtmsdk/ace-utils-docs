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

            <doc-desc>
                <p>
                    Use <doc-tag>ace-alert</doc-tag> to render notifications and alerts that draw user attention. See <doc-link id="ace-alert.service">alert service</doc-link> for programmatic use.
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
        api: {
            name: 'ace-alert',
            type: 'component',
            params: [
                { 
                    name: 'type', type: 'string',
                    desc: `
                        Defines the overall styling (color and icon) of the alert. Available types:
                        <doc-value>info</doc-value>, 
                        <doc-value>success</doc-value>,
                        <doc-value>warning</doc-value>,
                        <doc-value>critical</doc-value>,
                        <doc-value>black</doc-value>.
                    `
                },
                {
                    name: 'icon', type: 'string',
                    desc: `Icon to display in the alert. Overrides the alert <doc-param>type</doc-param> default icon.`
                },
                {
                    name: 'closeable', type: 'boolean', default: true,
                    desc: `If true, close-button is shown in the alert. Clicking it emits <doc-event>close</doc-event> event.`
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
                    desc: `Emitted when user tries to close the alert. The alert message component instance is passed as the $event object.`
                }
            ]
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