const meta = {
    id: 'ace-blockquote.component',
    name: 'ace-blockquote',
    title: 'Blockquote',
    desc: `Renders a block-style quote.`
}

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <doc-desc>
                <p>
                    Use <code tag>ace-blockquote</code> to render block-style quotes.
                </p>
            </doc-desc>

            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import blockquote and register it globally or locally. Render quote with optional params.
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
            name: 'ace-blockquote',
            type: 'component',
            params: [
                {
                    name: 'quote', type: 'string',
                    desc: `The quote text content.`
                },
                {
                    name: 'author', type: 'string',
                    desc: `The name of the quote author.`
                },
                {
                    name: 'source', type: 'string',
                    desc: `The title of the source or work (book, movie, paper, etc.) from which the quote is from.`
                },
                {
                    name: 'href', type: 'string',
                    desc: `The quote source URL. If provided, makes the source into a link.`
                },
                {
                    name: 'date', type: 'string',
                    desc: `The date of the quote or publication date of the source work.`
                },
                {
                    name: 'desc', type: 'string',
                    desc: `A brief description or context for the quote.`   
                }
            ],
            slots: [
                {
                    name: 'default',
                    desc: `The quote text content.`
                },
                {
                    name: 'caption',
                    desc: `The quote caption or footer content. Use to provide custom caption instead of using params.`
                }
            ]
        },
        code: {
            usage: `
                import {AceBlockquote} from 'ace-blockquote.component';

                const MyComponent = {
                    components: {
                        AceBlockquote
                    },
                    template: \`
                        <ace-blockquote
                            author="John Doe">
                            Quote text content goes here.
                        </ace-blockquote>
                    \`
                }
            ` 
        },
        examples: [
            {
                js: `
                    {
                        template: \`
                            <ace-blockquote
                                author="Albert Einstein">
                                If you can't explain it to a six year old, you don't understand it yourself.
                            </ace-blockquote>
            
                            <ace-blockquote
                                author="Albert Einstein">
                                I never said even half the things that the Internet says I did.
                            </ace-blockquote>    
                        \`
                    }
                `
            }
        ]
    })
};