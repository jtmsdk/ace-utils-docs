import sendIcon from '@ace.icons/send.svg?no-inline';
import aceAlertService from 'ace-alert.service';
window.aceAlertService = aceAlertService;

const meta = {
    id: 'ace-form.component',
    name: 'ace-form',
    title: 'Form',
    desc: `Renders a form element.`
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
                    Use <doc-tag>ace-form</doc-tag> to render a form element.
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
            name: 'ace-form',
            type: 'component',
            params: [
                {
                    name: 'name', type: 'string', 
                    desc: `Name of the form.`
                },
                {
                    name: 'action', type: 'string', default: 'current URL', 
                    desc: `The URL to which the form data is sent once submitted. By default sends data to current URL. To handle submit in custom way, bind <doc-event>submit</doc-event> event and prevent the default action.`
                },
                {
                    name: 'method', type: 'string', default: 'get', 
                    desc: `HTTP method used when sending data: <doc-value>get</doc-value> or <doc-value>post</doc-value>.`
                },
                {
                    name: 'target', type: 'string', default: '_self', 
                    desc: `Target where the form submission response is displayed.`
                },
                {
                    name: 'novalidate', type: 'boolean', 
                    desc: `If present, default browser form validation is not used.`
                },
                {
                    name: 'autocomplete', type: 'string', default: 'on', 
                    desc: `Either <doc-value>on</doc-value> to enable or <doc-value>off</doc-value> to disable. By default enabled.`
                }
            ],
            slots: [
                {
                    name: 'header',
                    desc: `Form header content.`
                },
                {
                    name: 'default', 
                    desc: `Form body contents.`
                },
                {
                    name: 'footer',
                    desc: `Form footer content.`
                }
            ],
            functions: [
                {
                    name: 'reset()',
                    desc: `Resets all form field values.`
                }
            ],
            events: [
                {
                    name: 'submit', $event: 'Event', desc: `Emitted when user submits the form. The native event is passed as <code>$event</code>. Use <code>preventDefault()</code> to prevent the default behavior (which send the form data to <doc-param>action</doc-param> URL) and to handle the submit without using <doc-param>action</doc-param>.`
                }
            ]
        },
        examples: [
            {
                name: 'Default use (browser validation)',
                js: `
                    // import aceAlertService from 'ace-alert.service';
                    {
                        template: \`
                            <ace-form ref="form"
                                @submit.prevent="submit()">
            
                                <ace-input
                                    label="Name"
                                    name="name"
                                    required>
                                </ace-input>
            
                                <ace-input
                                    label="Email"
                                    name="email" 
                                    type="email">
                                </ace-input>
            
                                <ace-textarea 
                                    label="Message"
                                    name="message" 
                                    required>
                                </ace-textarea>
            
                                <template v-slot:footer>
                                    <ace-button primary
                                        type="submit">
                                        <ace-icon src="${sendIcon}"></ace-icon>
                                        <span>Submit</span>
                                    </ace-button>
                                </template>
                            </ace-form>
                        \`,
                        methods: {
                            submit() {
                                // This example relies on browser validation.
                                // At this point the form data is assumed
                                // to be ok. Send the data and process the
                                // reponse:
        
                                this.send()
                                    .then(response => {
                                        // Reset form to prevent resubmit
                                        this.$refs.form.reset();
        
                                        // Provide success feedback
                                        aceAlertService.open({ 
                                            type: 'success', 
                                            header: 'Your message was sent'
                                        });
                                    });
                            },
                            send() {
                                return Promise.resolve()
                            }
                        }
                    }
                `
            }
        ]
    })
}