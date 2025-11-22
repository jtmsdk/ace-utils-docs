import {AceMsg} from '@ace/components';

const name = 'ace-msg';
const meta = {
    id: 'ace-msg.component',
    name: name,
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
                    Use <doc-tag>${name}</doc-tag> to render inline messages for highlighting information.
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
            name: name,
            type: 'component',
            params: [
                {
                    name: 'type', type: 'string', default: 'info',
                    desc: `Available type options:
                        <doc-value>info</doc-value>,
                        <doc-value>success</doc-value>,
                        <doc-value>warning</doc-value>,
                        <doc-value>critical</doc-value>
                    `
                },
                {
                    name: 'icon', type: 'string', 
                    desc: `Icon for the message. Overrides the icon associated with type.`
                },
                {
                    name: 'text', type: 'boolean', default: false,
                    desc: `If <doc-value>true</doc-value>, renders the message in text variant style.`
                },
                {
                    name: 'small', type: 'boolean', default: false,
                    desc: `If <doc-value>true</doc-value>, renders the message in smaller variant style.`
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
                                <ace-msg filled
                                    :type="type">
                                    This is {{type}}
                                </ace-msg>
                            </div>
                        \`,
                        data: () => ({
                            types: [
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
                desc: `
                    <p>
                        Add <doc-param>filled</doc-param> modifier to make the message appear smaller.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <div 
                                v-for="type in types">
                                <ace-msg small filled
                                    :type="type">
                                    This is {{type}}
                                </ace-msg>
                            </div>
                        \`,
                        data: () => ({
                            types: [
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
                                    This is {{type}}
                                </ace-msg>
                            </div>
                        \`,
                        data: () => ({
                            types: [
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