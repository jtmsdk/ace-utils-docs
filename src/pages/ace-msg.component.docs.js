const meta = {
    id: 'ace-msg.component',
    name: 'ace-msg',
    title: 'Message',
    desc: `Renders an inline message used for highlighting information.`
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
                    Use <doc-tag>ace-msg</doc-tag> to render inline messages for highlighting information.
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
            name: 'ace-msg',
            type: 'component',
            params: [
                {
                    name: 'type', type: 'string', default: 'info',
                    desc: `Available type options:
                        <doc-value>info</doc-value>,
                        <doc-value>success</doc-value>,
                        <doc-value>warning</doc-value>,
                        <doc-value>critical</doc-value>. 
                        Anything else results in default generic message style.
                    `
                },
                {
                    name: 'icon', type: 'string', 
                    desc: `Icon for the message. Overrides the icon associated with type. Use null or empty string to disable the icon.`
                },
                {
                    name: 'text', type: 'boolean', default: false,
                    desc: `If <doc-value>true</doc-value>, renders the message in text variant style.`
                },
                {
                    name: 'size', type: 'string', default: 'medium',
                    desc: `Options: <doc-value>small</doc-value>, <doc-value>medium</doc-value>, <doc-value>large</doc-value>. Renders the message in the specified size variant style.`
                }
            ],
            slots: [
                { 
                    name: 'default', desc: `Message body content.`
                }
            ]
        },
        examples: [
            {
                name: 'Default messages',
                js: `
                    {
                        template: \`
                            <div 
                                v-for="type in types">
                                <ace-msg
                                    :type="type">
                                    This is {{''+type}}
                                </ace-msg>
                            </div>
                        \`,
                        data: () => ({
                            types: [
                                undefined,
                                'info',
                                'success',
                                'warning',
                                'critical'
                            ]
                        })
                    }
                `
            },
            {
                name: 'Size',
                js: `
                    {
                        template: \`
                            <div 
                                v-for="type in types">
                                <ace-msg size="small"
                                    :type="type">
                                    This is {{''+type}}
                                </ace-msg>
                            </div>
                        \`,
                        data: () => ({
                            types: [
                                undefined,
                                'info',
                                'success',
                                'warning',
                                'critical'
                            ]
                        })
                    }
                `
            },
            {
                name: 'Text variants',
                js: `
                    {
                        template: \`
                            <div 
                                v-for="type in types"
                                style="margin-bottom: 4px">
                                <ace-msg text
                                    :type="type">
                                    This is {{''+type}}
                                </ace-msg>
                            </div>
                        \`,
                        data: () => ({
                            types: [
                                undefined,
                                'info',
                                'success',
                                'warning',
                                'critical'
                            ]
                        })
                    }
                `
            },
        ] 
    })
};