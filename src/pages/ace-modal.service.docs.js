import plusRoundIcon from '@ace.icons/plus-round-inverse.svg?inline';
import aceModalService from '@ace/services/ace-modal.service';
import {AceDialog} from '@ace/components';
//@ts-ignore
window.aceModalService = aceModalService;
//@ts-ignore
window.AceDialog = AceDialog;

const name = 'aceModalService';
const meta = {
    id: 'ace-modal.service',
    name: name,
    title: 'Modal service',
    desc: `Used for opening modals programmatically.`
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
                    Use <doc-service>${name}</doc-service> for opening <doc-link id="ace-modal.component">modal</doc-link> instances programmatically, directly from/within application logic without having to place them in any template.
                </p>
            </doc-desc>

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
            import aceModalService from 'ace-modal.service';
            
            // Open new modal instance using open() method.
            // The method returns a hook for the opened
            // modal instance.
            
            let modalHook = aceModalService.open({
                component: {
                    data: () => ({...}),
                    template: \`...\`,
                    methods: {
                        close() {
                            modalHook.close('abc');
                        }
                    }
                }
            });

            // Returned hook contains a promise, which
            // will be resolved when user closes the modal.
            // The value passed in close(value) call is
            // returned in the resolve.

            modalHook.promise.then(result => {
                // result == 'abc'
                ...
            });
        `,
        api: {
            name: name,
            type: 'service',
            functions: [
                {
                    name: 'open(options)',
                    desc: `
                        <p>
                            Opens a new modal instance with the given options. Returns a hook for the opened instance. The table below lists available options.
                        </p>
                    `,
                    params: [
                        {
                            name: 'id', type: 'string',
                            desc: `Optional ID for the opened modal element.`
                        },
                        {
                            name: 'component', type: 'object', 
                            desc: `The component to display inside the modal.`
                        },
                        {
                            name: 'appendTo', type: 'HTMLElement',
                            desc: `Target element into which the modal is appended. By default a toolkit specific container.`
                        },
                        {
                            name: 'animation', type: 'string',
                            desc: `CSS animation for the modal content. Use "none" to disable.`
                        },
                        {
                            name: 'background', type: 'string',
                            desc: `CSS background value for the modal container.`
                        },
                        {
                            name: 'placeItems', type: 'string',
                            desc: `CSS grid place-items value for positioning the modal content.`
                        },
                        {
                            name: 'padding', type: 'string', 
                            desc: `CSS padding for modal container.`
                        },
                        {
                            name: 'onclose', type: 'function',
                            desc: `Callback to execute when modal <doc-event>close</doc-event> event is emitted.`
                        }
                    ]
                }, 
                {
                    name: 'close(id)',
                    desc: `
                        <p>
                            Closes modal with given ID.
                        </p>
                    `,
                    params: [
                        {
                            name: 'id', type: 'string',
                            desc: `The modal ID.`
                        }
                    ]
                }, 
                {
                    name: 'closeAll()',
                    desc: `
                        <p>
                            Closes all modals opened with this service.
                        </p>
                    `
                }
            ]    
        },
        examples: [
            {
                js: `
                    // import aceModalService from 'ace-modal.service';
                    // import {ComDialog} from 'ace-dialog.component';
                    
                    {
                        template: \`
                            <ace-button 
                                @click="open(type)"
                                icon="${plusRoundIcon}">
                                Open modal
                            </ace-button>
                        \`,
                        methods: {
                            open() {
                                let modalHook = aceModalService.open({
                                    onclose: () => modalHook.close(),
                                    component: {
                                        components: {
                                            AceDialog
                                        },
                                        data: () => ({
                                            buttons: [{
                                                label: 'Close',
                                                action: () => modalHook.close(true),
                                                primary: true
                                            }]
                                        }),
                                        template: \`
                                            <ace-dialog
                                                type="info"
                                                size="medium"
                                                header="This is modal dialog"
                                                body="Lorem ipsum yada yada etc."
                                                :buttons="buttons">
                                            </ace-dialog>
                                        \`
                                    }
                                });

                                // See console for hook details
                                console.log('Modal hook', modalHook);

                                // See console for promise result
                                modalHook.promise.then(res => {
                                    console.log('Promise resolved', res);
                                });
                            }
                        }
                    }
                `
            }
        ]
    })
};