import aceAlertService from 'ace-alert.service';
window.aceAlertService = aceAlertService;

const meta = {
    id: 'ace-alert.service',
    name: 'ace-alert.service',
    title: 'Alert service',
    desc: `Used for displaying alert notifications programmatically.`
}

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>
            
            <p>
                Use <doc-service>ace-alert.service</doc-service> for displaying <doc-link id="ace-alert.component">alert</doc-link> notifications programmatically. Alert notifications are used for action feedback and information tips.
            </p>

            <ace-codeblock 
                :code="usage">
            </ace-codeblock>
            
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
        usage: `
            import service from 'ace-alert.service';
            
            service.open({
                type: 'success',
                header: 'Message sent',
                body: 'Thank you for your feedback!'
            });
        `,
        api: {
            name: 'ace-alert.service',
            type: 'service',
            functions: [
                {
                    name: 'open(options)',
                    desc: `
                        <p>
                            Displays a new alert with given <doc-param>options</doc-param> and returns a hook for the opened alert. The table below lists the available properties in the options object.
                        </p>
                    `,
                    params: [
                        { 
                            name: 'type', type: 'string', 
                            desc: `Alert type, optional. See <doc-link id="ace-alert.component">alert</doc-link> for all available types. If not provided, default alert type is used.`
                        },
                        {
                            name: 'icon', type: 'string',
                            desc: `Alert icon. Overrides the icon defined by <doc-param>type</doc-param>.`
                        },
                        { 
                            name: 'header', type: 'string', 
                            desc: `Alert header content as HTML string (optional).`
                        },
                        { 
                            name: 'body', type: 'string', 
                            desc: `Alert body content as HTML string (optional).`
                        },
                        { 
                            name: 'autoclose', type: 'number, boolean', default: '5',
                            desc: `Number of seconds until the alert is automatically closed, or <code val>false</code> to disable auto-closing.`
                        }
                    ]
                }, 
                {
                    name: 'close(alert)',
                    desc: `
                        <p>
                            Closes given alert. If no such alert is open, does nothing.
                        </p>
                    `,
                    params: [
                        {
                            name: 'alert', type: 'object, string',
                            desc: `The alert hook or string ID of the alert.`
                        }
                    ]
                }, 
                {
                    name: 'closeAll()',
                    desc: `
                        <p>
                            Closes all alerts opened with this service. If no alerts are open, does nothing.
                        </p>
                    `
                }
            ]    
        },
        examples: [
            {
                name: 'Opening alerts',
                desc: `
                    <p>
                        Alerts opened with the service popup in the top area of the screen. Multiple alerts can be opened at the same time. By default all the alerts close themselves automatically within 5 seconds. 
                    </p>
                `,
                js: `
                    // import aceAlertService from 'ace-alert.service';
                    
                    {
                        template: \`
                            <a
                                v-for="type in types"
                                style="margin: 4px"
                                @click="open(type)">
                                {{''+type}}
                            </a>
                        \`,
                        data: () => ({
                            types: [
                                'info', 
                                'success', 
                                'warning', 
                                'critical',
                                undefined
                            ]
                        }),
                        methods: {
                            open(type) {
                                aceAlertService.open({
                                    type: type,
                                    header: \`This is {{type || 'default'}} message\`, 
                                    body: \`This is message body\`
                                });
                            }
                        }
                    }
                `
            }
        ]
    })
};