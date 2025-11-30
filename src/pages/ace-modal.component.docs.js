import plusRoundIcon from '@ace.icons/plus-round-inverse.svg?no-inline';

const meta = {
    id: 'ace-modal.component',
    name: 'ace-modal',
    title: 'Modal',
    desc: `Renders a modal popup.`
};

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <doc-desc>
                Use <code tag>ace-modal</code> to render a modal popup. Used mainly in combination with <doc-link id="ace-dialog.component">dialog</doc-link> component. Opened modal blocks all underlying UI interaction until the modal is closed. See <doc-link id="ace-modal.service">modal service</doc-link> from programmatic use.
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
            name: 'ace-modal',
            type: 'component',
            params: [
                {
                    name: 'id', type: 'string',
                    desc: `Optional ID for the opened modal element.`
                },
                {
                    name: 'appendTo', type: 'HTMLElement', default: 'default',
                    desc: `Target element into which modal is appended. By default app specific container.`
                },
                {
                    name: 'animation', type: 'string', default: 'default',
                    desc: `CSS animation for the modal content. Use "none" to disable.`
                },
                {
                    name: 'background', type: 'string', default: 'default',
                    desc: `CSS background value for the modal container.`
                },
                {
                    name: 'place-items', type: 'string', default: 'start center',
                    desc: `CSS grid place-items value for positioning the modal content.`
                },
                {
                    name: 'margin', type: 'string', default: '10vh 2rem',
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
                    desc: `Emitted when user clicks the modal backdrop or background.`
                }
            ]
        },
        examples: [
            {
                desc: `
                    <p>
                        This example opens a modal dialog &mdash; a dialog within a modal container. Notice that modal automatically applies auto-focus and focus-trapping for the content inside. Interaction with the underlying UI is prevented until the modal is closed.
                    </p>
                `,
                js: `
                    {
                        data: () => ({
                            isOpen: false
                        }),
                        template: \`
                            <ace-button
                                @click="isOpen=true"
                                icon="${plusRoundIcon}">
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
                                            This is a dialog element placed inside 
                                            modal container. Underlying UI cannot 
                                            be interacted with until this modal is 
                                            closed.
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