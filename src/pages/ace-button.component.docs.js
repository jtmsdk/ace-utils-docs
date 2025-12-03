import previousRoundIcon from '@ace.icons/previous-round.svg?no-inline';
import stopRoundIcon from '@ace.icons/stop-round.svg?no-inline';
import playRoundIcon from '@ace.icons/play-round.svg?no-inline';
import nextRoundIcon from '@ace.icons/next-round.svg?no-inline';

const meta = {
    id: 'ace-button.component',
    name: 'ace-button',
    title: `Button`,
    desc: `Renders action button.`
};

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta 
                :meta="meta">
            </doc-meta>

            <p>
                Use <code tag>ace-button</code> to render action buttons.
            </p>

            <doc-api 
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import button and register it globally or locally. Place in template and and label with param or slot.
            </p>

            <ace-codeblock
                :code="code.usage"
                lang="javascript">
            </ace-codeblock>

            <doc-examples 
                :examples="examples">
            </doc-examples>
        </doc-page>
    `,
    data: () => ({
        meta,
        api: {
            name: 'ace-button',
            type: 'component',
            params: [
                {
                    name: 'type', type: 'string', default: 'button',
                    desc: `Button type: <code val>button</code>, <code val>submit</code>, <code val>reset</code>.`
                },
                {
                    name: 'variant', type: 'string',
                    desc: `Button variant/style. You can set the style with e.g. <code>variant="primary"</code> or by applying boolean property <code>primary</code> on the button. Available variants:
                    <code val>primary</code>, 
                    <code val>text</code>, 
                    <code val>outline</code>, 
                    <code val>round</code>.`
                },
                {
                    name: 'label', type: 'string',
                    desc: `Button label text.`
                },
                {
                    name: 'icon', type: 'string',
                    desc: `Icon to display in the button.`
                },
                {
                    name: 'iconsize', type: 'string',
                    desc: `Icon size as CSS length value.`
                },
                {
                    name: 'action', type: 'function',
                    desc: `Function to execute when button is activated.`
                },
                {
                    name: 'to', type: 'string | object',
                    desc: `Route to navigate to when the button is activated.`
                },
                {
                    name: 'size', type: 'string', default: 'medium',
                    desc: `Button size: 
                        <code val>small</code>,
                        <code val>medium</code>,
                        <code val>large</code>.
                    `
                }
            ],
            slots: [
                {
                    name: 'default',
                    desc: `The button label content.`
                }
            ]
        },
        code: {
            usage: `
                import {AceButton} from 'ace-button.component';

                const MyComponent = {
                    components: {
                        AceButton
                    },
                    template: \`
                        <ace-button
                            @click="onclick()">
                            Button label
                        </ace-button>
                    \`
                };
            `
        },
        examples: [
            {
                name: 'Default button',
                js: `
                    {
                        template: \`
                            <ace-button>
                                Default button
                            </ace-button>
                        \`
                    }
                `
            },
            {
                name: 'Primary button',
                js: `
                    {
                        template: \`
                            <ace-button primary>
                                Primary button
                            </ace-button>
                        \`
                    }
                `
            },
            {
                name: 'Text button',
                js: `
                    {
                        template: \`
                            <ace-button text>
                                Section 1
                            </ace-button>
                        \`
                    }   
                `
            },
            {
                name: 'Outline button',
                js: `
                    {
                        template: \`
                            <ace-button outline>
                                Outline button
                            </ace-button>
                        \`
                    }
                `
            },
            {
                name: 'Round button',
                js: `
                    {
                        template: \`
                            <ace-button round 
                                icon="${previousRoundIcon}">
                            </ace-button>
            
                            <ace-button round
                                icon="${playRoundIcon}">
                            </ace-button>
            
                            <ace-button round
                                icon="${stopRoundIcon}">
                            </ace-button>
            
                            <ace-button round
                                icon="${nextRoundIcon}">
                            </ace-button>
                        \`
                    }
                `
            },
            {
                name: 'Button size',
                js: `
                    {
                        template: \`
                            <div style="
                                display: flex; 
                                align-items: center; 
                                gap: 1rem">

                                <ace-button size="large">
                                    Large button
                                </ace-button>
                
                                <ace-button size="medium">
                                    Medium button
                                </ace-button>
                
                                <ace-button size="small">
                                    Small button
                                </ace-button>
                            </div>
                        \`
                    }
                `
            }
        ]
    })
};