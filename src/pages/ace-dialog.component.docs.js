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

            <p>
                Use <code tag>ace-dialog</code> to render a dialog element &mdash; not to be confused with native <code tag>dialog</code>. This is normal block element that is intended as the content for native dialogs or <doc-link id="ace-modal.component">modals</doc-link>.
            </p>

            <doc-api 
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import dialog and register it globally or locally. Place in template and provide content using slots or params.
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
            name: 'ace-dialog',
            type: 'component',
            params: [
                { 
                    name: 'type', type: 'string', 
                    desc: `Dialog type:
                        <code val>default</code>,
                        <code val>confirm</code>,
                        <code val>info</code>,
                        <code val>success</code>,
                        <code val>warning</code>,
                        <code val>critical</code>. If not provided, uses default type.
                    ` 
                },
                {
                    name: 'size', type: 'string', default: null,
                    desc: `Dialog size. Accepts following value options:
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
                    desc: `Dialog root element content; for providing complete custom content structure.`
                }
            ]
        },
        code: {
            usage: `
                import {AceDialog} from 'ace-dialog.component';

                const MyComponent = {
                    components: {
                        AceDialog
                    },
                    template: \`
                        <ace-dialog
                            type="info">
                            <template #header>
                                This is header
                            </template>
                            <template #body>
                                This is body
                            </template>
                            <template #footer>
                                <ace-button>
                                    Close
                                </ace-button>
                            </template>
                        </ace-dialog>
                    \`
                };
            `,
        },
        examples: [
            {
                name: 'Dialog types',
                js: `
                    {
                        template: \`
                            <ace-dialog 
                                v-for="type in types"
                                :type="type"
                                header="This is header"
                                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                :buttons="[{label: 'Close', primary: true}]">
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
                        Use <code param>size</code> to render dialog in fixed size options. Notice that dialog max-width is always limited by the parent container. For custom sizing, modify the dialog <code param>style</code> (width, height) directly.
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
