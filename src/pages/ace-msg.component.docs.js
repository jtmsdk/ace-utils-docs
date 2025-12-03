const meta = {
    id: 'ace-msg.component',
    name: 'ace-msg',
    title: 'Message',
    desc: `Renders an inline message.`
};

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <p>
                Use <code tag>ace-msg</code> to render inline messages for highlighting information.
            </p>
            
            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import message and register it globally or locally. Place in template and add content with slot.
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
                        Anything else results in default generic style.
                    `
                },
                {
                    name: 'icon', type: 'string', 
                    desc: `Icon for the message. Overrides the icon associated with type. Use null or empty string to disable the icon.`
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
        code: {
            usage: `
                import {AceMsg} from 'ace-msg.component';
                
                const MyComponent = {
                    components: {
                        AceMsg
                    },
                    template: \`
                        <ace-msg 
                            type="info">
                            This is message
                        </ace-msg>
                    \`
                };
            `
        },
        examples: [
            {
                name: 'Message types',
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
                name: 'Small messages',
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
            }
        ] 
    })
};