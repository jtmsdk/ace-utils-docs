import {AceDialog} from '@ace/components';

const name = 'ace-dialog';
const meta = {
    id: 'ace-dialog.component',
    name: name,
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
                    Use <doc-tag>${name}</doc-tag> to render a dialog element. Used mainly in combination with <doc-link id="ace-modal.component">modal</doc-link> to create modal dialogs.
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
                    name: 'type', type: 'string', 
                    desc: `Dialog type:
                        <doc-value>confirm</doc-value>,
                        <doc-value>info</doc-value>,
                        <doc-value>success</doc-value>,
                        <doc-value>warning</doc-value>,
                        <doc-value>critical</doc-value>
                    ` 
                },
                {
                    name: 'size', type: 'string', default: 'auto',
                    desc: `Dialog size. Accepts following value options:
                    <doc-value>auto</doc-value>,
                    <doc-value>small</doc-value>,
                    <doc-value>medium</doc-value>,
                    <doc-value>large</doc-value>,
                    <doc-value>xlarge</doc-value>`
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
                            <${name} 
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
                            </${name}>
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
                            <${name} 
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
                            </${name}>

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
