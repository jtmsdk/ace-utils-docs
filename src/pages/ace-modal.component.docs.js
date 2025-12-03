const meta = {
    id: 'ace-modal.component',
    name: 'ace-modal',
    title: 'Modal',
    desc: `Renders a modal dialog.`
};

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <p>
                Use <code tag>ace-modal</code> to render a modal popup. Used mainly in combination with <doc-link id="ace-dialog.component">dialog</doc-link>. Modal opens on top of all other page content, blocking the underlying UI interaction until the modal is closed. See <doc-link id="ace-modal.service">modal service</doc-link> for programmatic use.
            </p>

            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import modal and register it globally or locally. Place modal in template and toggle it visible using <code>v-if</code>.
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
            name: 'ace-modal',
            type: 'component',
            params: [
                {
                    name: 'id', type: 'string',
                    desc: `Optional ID for the opened modal element.`
                },
                {
                    name: 'closeable', type: 'boolean', default: 'true',
                    desc: `If true, modal emits <code>close</code> event when user tries to dismiss it by pressing ESC or clicking the backdrop.`
                },
                {
                    name: 'animation', type: 'string', default: 'default',
                    desc: `CSS animation for the modal content. Use "none" to disable.`
                },
                {
                    name: 'background', type: 'string', default: 'default',
                    desc: `CSS background value for the modal backdrop.`
                },
                {
                    name: 'place-items', type: 'string', default: 'start center',
                    desc: `CSS grid place-items value for positioning the modal content.`
                },
                {
                    name: 'margin', type: 'string', default: '10vh 1rem',
                    desc: `CSS margin for the modal content.`
                }
            ],
            slots: [
                {
                    name: 'default',
                    desc: `Modal body content.`
                }
            ],
            events: [
                {
                    name: 'close',
                    desc: `Emitted when user hits ESC or clicks the backdrop. Only applicable if <code param>closeable</code> is true.`
                }
            ]
        },
        code: {
            usage: `
                import {AceModal} from 'ace-modal.component';

                const MyComponent = {
                    components: {
                        AceModal
                    },
                    data: () => ({
                        isOpen: false
                    }),
                    template: \`
                        <ace-modal
                            v-if="isOpen">
                            <!-- modal content here -->
                        </ace-modal>
                    \`
                };
            `
        },
        examples: [
            {
                desc: `
                    <p>
                        This example opens a modal dialog &mdash; a dialog within a modal. Notice that modal automatically applies auto-focus and focus-trapping for the content inside. Interaction with the underlying UI is prevented until the modal is closed.
                    </p>
                `,
                js: `
                    {
                        data: () => ({
                            isOpen: false
                        }),
                        template: \`
                            <ace-button
                                @click="isOpen=true">
                                Open modal
                            </ace-button>

                            <ace-modal 
                                v-if="isOpen"
                                @close="isOpen=false">
                                <ace-dialog
                                    type="info"
                                    size="medium">
                                    <template #header>
                                        This is modal dialog
                                    </template>
                                    <template #body>
                                        <p>
                                            This is a dialog placed inside modal. 
                                            Underlying UI cannot be interacted 
                                            with until this modal is closed.
                                        </p>
                                    </template>
                                    <template #footer>
                                        <ace-button primary
                                            @click="isOpen=false">
                                            Close
                                        </ace-button>
                                    </template>
                                </ace-dialog>
                            </ace-modal>
                        \`
                    }
                `
            }
        ]        
    })
}