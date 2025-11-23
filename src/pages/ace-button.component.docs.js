import previousRoundIcon from '@ace.icons/previous-round.svg?no-inline';
import stopRoundIcon from '@ace.icons/stop-round.svg?no-inline';
import playRoundIcon from '@ace.icons/play-round.svg?no-inline';
import nextRoundIcon from '@ace.icons/next-round.svg?no-inline';

const meta = {
    id: 'ace-button.component',
    name: 'ace-button',
    title: `Button`,
    desc: `Renders action buttons.`
};

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta 
                :meta="meta">
            </doc-meta>

            <doc-desc>
                Use <doc-tag>ace-button</doc-tag> to render action buttons.
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
            name: 'ace-button',
            type: 'component',
            params: [
                {
                    name: 'type', type: 'string', default: 'button',
                    desc: `Button type: <doc-value>button</doc-value>, <doc-value>submit</doc-value>, <doc-value>reset</doc-value>.`
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
                    name: 'to', type: 'string, object',
                    desc: `Route to navigate to when the button is activated.`
                },
                {
                    name: 'size', type: 'string', default: 'medium',
                    desc: `Button size: 
                        <doc-value>small</doc-value>,
                        <doc-value>medium</doc-value>,
                        <doc-value>large</doc-value>.
                    `
                },
                {
                    name: 'primary', type: 'boolean', default: 'false',
                    desc: `If true, adds primary color styling for the button.`
                },
                {
                    name: 'transparent', type: 'boolean', default: 'false',
                    desc: `If true, creates a transparent text-only button.`
                },
                {
                    name: 'round', type: 'boolean', default: 'false',
                    desc: `If true, makes the button round.`
                }
            ],
            slots: [
                {
                    name: 'default',
                    desc: `The button label content.`
                }
            ]
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
                name: 'Transparent button',
                js: `
                    {
                        template: \`
                            <ace-button transparent>
                                Section 1
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
            }
        ]
    })
};