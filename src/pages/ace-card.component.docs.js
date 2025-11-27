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

            <doc-desc>
                <p>
                    Use <doc-tag>ace-card</doc-tag> to render card containers. Cards are often clickable and display image in header area.
                </p>
            </doc-desc>

            <doc-api
                :api="api">
            </doc-api>

            <h2>Import</h2>

            <p>
                Import card and register it as global or local component.
            </p>

            <ace-codeblock
                :code="code.import"
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
                    name: 'imgsrc', type: 'string',
                    desc: `Image <doc-value>src</doc-value> to show in card header.`
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
            import: `
                import {AceCard} from 'ace-card.component';

                const MyComponent = {
                    components: {
                        AceCard
                    }
                };
            `,
        },
        examples: [
            {
                js: `
                    {
                        template: \`
                            <ace-card
                                imgsrc="some/image.jpg"
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