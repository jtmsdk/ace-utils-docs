import {AceCodeblock} from '@ace/components';

const name = 'ace-codeblock';
const meta = {
    id: 'ace-codeblock.component',
    name: name,
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

            <doc-desc>
                <p> 
                    Use <doc-tag>${name}</doc-tag> to render a block of code with syntax highlighting using <a href="https://prismjs.com/">prism.js</a> library.
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
                    name: 'language', type: 'string', default: 'javascript',
                    desc: `
                        The code language, e.g.: <doc-value>html</doc-value>, or <doc-value>javascript</doc-value>. See prismjs <a href="https://prismjs.com/#supported-languages">documentation</a> for full list of supported languages. Notice that the language support must be included in the loaded prism.js bundle.
                    `
                },
                {
                    name: 'header', type: 'string', default: 'language',
                    desc: `The codeblock header title. By default the header displays the <doc-param>language</doc-param> param value.`
                },
                {
                    name: 'code', type: 'string',
                    desc: `The codeblock code content.`
                }
            ]
        },
        examples: [
            {
                js: `
                        {
                            template: \`
                                <p>
                                    Provide the code content with <doc-param>code</doc-param> param. The code does not need to be escaped. If you provide the code with a template string literal, like in this example, it will retain the spacing and line break formatting.
                                </p>
                
                                <ace-codeblock 
                                    language="html"
                                    :code="html">
                                </ace-codeblock>
                
                                <p>
                                    Next example contains javascript. Notice that <doc-param>language</doc-param> param doesn't need to be specified in this case, because <doc-value>javascript</doc-value> is the expected default.
                                </p>
                
                                <ace-codeblock
                                    :code="js">
                                </ace-codeblock>
                            \`,
                            data: () => ({
                                html: \`
                                    <script>
                                        alert('This was not escaped.');
                                    </script>
                                \`,
                                js: \`
                                    let loop = function() {
                                        for (let i = 0; i < 100; i++) {
                                            // do stuff.
                                        }
                                    };
                                \`
                            })
                        }
                `
            }
        ]
    })
};