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

            <p>
                Use <code tag>ace-form</code> to render a form element.
            </p>

            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import form and register it globally or locally. Place in template and add form fields inside.
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
            name: 'ace-form',
            type: 'component',
            params: [
                {
                    name: 'name', type: 'string', 
                    desc: `Name of the form, used for reference in scripts.`
                },
                {
                    name: 'action', type: 'string', default: 'current URL', 
                    desc: `The URL to which the form data is sent once submitted. By default sends data to current URL. To handle submit in custom way, bind <code event>submit</code> event and prevent the default action.`
                },
                {
                    name: 'method', type: 'string', default: 'get', 
                    desc: `HTTP method used when sending data: <code val>get</code> or <code val>post</code>.`
                },
                {
                    name: 'enctype', type: 'string', default: 'application/x-www-form-urlencoded', 
                    desc: `Encoding type used when sending form data. Possible values: <code val>application/x-www-form-urlencoded</code>, <code val>multipart/form-data</code> (for file uploads), and <code val>text/plain</code>.`
                },
                {
                    name: 'target', type: 'string', default: '_self', 
                    desc: `Target where the form submission response is opened and displayed.`
                },
                {
                    name: 'novalidate', type: 'boolean', 
                    desc: `If present, default browser form validation is not used.`
                },
                {
                    name: 'autocomplete', type: 'string', default: 'on', 
                    desc: `Either <code val>on</code> to enable or <code val>off</code> to disable.`
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
                },
                {
                    name: 'submit()',
                    desc: `Submits the form programmatically.`
                },
                {
                    name: 'checkValidity()',
                    desc: `Checks the form's fields validity and returns <code val>true</code> if all fields are valid, otherwise returns <code val>false</code>.`
                },
                {
                    name: 'reportValidity()',
                    desc: `Checks the form's fields validity and returns <code val>true</code> if all fields are valid, otherwise returns <code val>false</code>. If any field is invalid, the browser will display the validation error messages.`
                }
            ],
            events: [
                {
                    name: 'submit', $event: 'Event', desc: `Emitted when user submits the form. The native event is passed as <code>$event</code>. Use <code>preventDefault()</code> to prevent the default behavior (which send the form data to <code param>action</code> URL) and to handle the submit without using <code param>action</code>.`
                }
            ]
        },
        code: {
            usage: `
                import {AceForm} from 'ace-form.component';

                const MyComponent = {
                    components: {
                        AceForm
                    },
                    template: \`
                        <ace-form
                            @submit.prevent="onsubmit()">
        
                            ...
        
                            <template #footer>
                                <button
                                    type="submit">
                                    Submit
                                </button>
                            </template>
                        </ace-form>
                    \`,
                }
            `
        },
        examples: [
            {
                name: 'Example',
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
            
                                <template #footer>
                                    <ace-button 
                                        primary
                                        type="submit">
                                        Submit
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