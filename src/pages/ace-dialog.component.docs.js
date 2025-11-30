const meta = {
    id: 'ace-dialog.component',
    name: 'ace-dialog',
    title: 'Dialog',
    desc: `Renders a dialog element used with modals.`
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
                    Use <code tag>ace-dialog</code> to render a dialog element. Used mainly in combination with <doc-link id="ace-modal.component">modal</doc-link> to create modal dialogs.
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
            name: 'ace-dialog',
            type: 'component',
            params: [
                { 
                    name: 'type', type: 'string', 
                    desc: `Dialog type:
                        <code val>confirm</code>,
                        <code val>info</code>,
                        <code val>success</code>,
                        <code val>warning</code>,
                        <code val>critical</code>
                    ` 
                },
                {
                    name: 'size', type: 'string', default: 'auto',
                    desc: `Dialog size. Accepts following value options:
                    <code val>auto</code>,
                    <code val>small</code>,
                    <code val>medium</code>,
                    <code val>large</code>,
                    <code val>xlarge</code>`
                },
                {
                    name: 'icon', type: 'string',
                    desc: `Dialog icon displayed in header.`
                },
                {
                    name: 'header', type: 'string',
                    desc: `Dialog header content.`
                },
                {
                    name: 'body', type: 'string',
                    desc: `Dialog body content.`
                },
                {
                    name: 'buttons', type: 'array',
                    desc: `Dialog footer buttons. Each button is an object that can contain any of the parameters available for <doc-link id="ace-button.component">button</doc-link> component.`
                }
            ],
            slots: [
                {
                    name: 'header',
                    desc: `Dialog header content.`
                },
                {
                    name: 'body',
                    desc: `Dialog body content.`
                },
                {
                    name: 'footer',
                    desc: `Dialog footer content.`
                },
                {
                    name: 'default',
                    desc: `Dialog root content.`
                }
            ]
        },
        examples: [
            {
                name: 'Dialog types',
                js: `
                    {
                        template: \`
                            <ace-dialog 
                                v-for="type in types"
                                :type="type">
                                <template v-slot:header>
                                    This is {{type}} dialog
                                </template>
                                <template v-slot:body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </template>
                                <template v-slot:footer>
                                    <ace-button
                                        primary>
                                        Close
                                    </ace-button>
                                </template>
                            </ace-dialog>
                        \`,
                        data: () => ({
                            types: [
                                'default',
                                'confirm',
                                'info',
                                'success',
                                'warning',
                                'critical'
                            ]
                        })
                    }
                `,
                css: `
                    .ace-dialog {
                        margin-bottom: 1rem;
                    }
                `
            },
            {
                name: 'Dialog size',
                desc: `
                    <p>
                        Use <doc-param>size</doc-param> to render dialog in fixed size options. Notice that dialog max-width is always limited by the parent container. For custom sizing, modify the dialog <doc-param>style</doc-param> directly.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-dialog 
                                type="info"
                                :size="selected">
                                <template v-slot:header>
                                    This is {{selected}} dialog
                                </template>
                                <template v-slot:body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </template>
                                <template v-slot:footer>
                                    <ace-button
                                        primary>
                                        Close
                                    </ace-button>
                                </template>
                            </ace-dialog>

                            <br>
                            
                            <ace-input 
                                type="radio"
                                name="size"
                                v-for="option in options"
                                v-model="selected"
                                :option="option">
                                {{option}}
                            </ace-input>
                        \`,
                        data: () => ({
                            selected: 'small',
                            options: [
                                'small',
                                'medium',
                                'large',
                                'xlarge'
                            ]
                        })
                    }
                `
            }
        ]
    })
};
