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
                    Use <code tag>ace-msg</code> to render inline messages for highlighting information.
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
                        <code val>info</code>,
                        <code val>success</code>,
                        <code val>warning</code>,
                        <code val>critical</code>. 
                        Anything else results in default generic message style.
                    `
                },
                {
                    name: 'icon', type: 'string', 
                    desc: `Icon for the message. Overrides the icon associated with type. Use null or empty string to disable the icon.`
                },
                {
                    name: 'text', type: 'boolean', default: false,
                    desc: `If <code val>true</code>, renders the message in text variant style.`
                },
                {
                    name: 'size', type: 'string', default: 'medium',
                    desc: `Options: <code val>small</code>, <code val>medium</code>, <code val>large</code>. Renders the message in the specified size variant style.`
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