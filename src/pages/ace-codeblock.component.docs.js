const meta = {
    id: 'ace-codeblock.component',
    name: 'ace-codeblock',
    title: 'Codeblock',
    desc: `Renders a block of code with syntax highlighting.`
};

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <p> 
                Use <code tag>ace-codeblock</code> to render a block of code with syntax highlighting using <a href="https://prismjs.com/">prism.js</a> library.
            </p>

            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import codeblock and register it globally or locally. Place in template and provide code using <code param>code</code> and <code param>lang</code> params.
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
            name: 'ace-codeblock',
            type: 'component',
            params: [
                {
                    name: 'lang', type: 'string', default: 'javascript',
                    desc: `
                        The code language, e.g.: <code val>html</code>, or <code val>javascript</code>. See prismjs <a href="https://prismjs.com/#supported-languages">documentation</a> for full list of supported languages.
                    `
                },
                {
                    name: 'header', type: 'string', 
                    desc: `The codeblock header title. If not provided, the <code param>lang</code> param value will be shown in header.`
                },
                {
                    name: 'code', type: 'string',
                    desc: `The codeblock code content.`
                }
            ]
        },
        code: {
            usage: `
                import {AceCodeblock} from 'ace-codeblock.component';

                const MyComponent = {
                    components: {
                        AceCodeblock
                    },
                    template: \`
                        <ace-codeblock
                            lang="html"
                            :code="code">
                        </ace-codeblock>
                    \`,
                    data: () => ({
                        code: \`
                            <script>
                                window.alert('Hello, world!');
                            </script>
                        \`
                    })
                };
            `
        },
        examples: [
            {
                js: `
                    {
                        template: \`
                            <ace-codeblock
                                lang="html"
                                :code="code">
                            </ace-codeblock>
                        \`,
                        data: () => ({
                            code: \`
                                <script>
                                    window.alert('Hello, world!');
                                </script>
                            \` 
                        })  
                    }
                `
            },
            {
                js: `
                    {
                        template: \`
                            <ace-codeblock
                                :code="code">
                            </ace-codeblock>
                        \`,
                        data: () => ({
                            code: \`
                                let loggs = function() {
                                    for (let i = 0; i < 100; i++) {
                                        console.log(i);
                                    }
                                };
                            \`
                        })
                    }
                `
            },
        ]
    })
};