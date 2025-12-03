const meta = {
    id: 'ace-card.component',
    name: 'ace-card',
    title: 'Card',
    desc: `Renders a multi-purpose layout container.`
};

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <p>
                Use <code tag>ace-card</code> to render card containers, which are often clickable and display images in header area.
            </p>

            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import card and register it globally or locally. Place in template and add content with or without header image.
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
            name: 'ace-card',
            type: 'component',
            params: [
                {
                    name: 'image', type: 'string',
                    desc: `Image <code val>src</code> to show in card header.`
                },
                {
                    name: 'action', type: 'function',
                    desc: `Function to execute when card is clicked.`
                },
                {
                    name: 'to', type: 'string, object',
                    desc: `Route to navigate to when the card is clicked.`
                }
            ],
            slots: [
                {
                    name: 'header',
                    desc: `The card header (image) content.`
                },
                {
                    name: 'default',
                    desc: `The card body content.`
                }
            ]
        },
        code: {
            usage: `
                import {AceCard} from 'ace-card.component';

                const MyComponent = {
                    components: {
                        AceCard
                    },
                    template: \`
                        <ace-card
                            image="my/image.jpg">
                            Content here
                        </ace-card>
                    \`
                };
            `,
        },
        examples: [
            {
                js: `
                    {
                        template: \`
                            <ace-card
                                image="assets/img/coffee.jpg"
                                style="width: 300px">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore et 
                                    dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip 
                                    ex ea commodo consequat.
                                </p>
                            </ace-card>
                        \`
                    }
                `
            }       
        ]
    })
};