const meta = {
    id: 'ace-article.component',
    name: 'ace-article',
    title: 'Article',
    desc: `Renders an article, a self contained document or post.`
};

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <p>
                Use <code tag>ace-article</code> to render an article &mdash; a self contained document or post.
            </p>

            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import article and register it globally or locally. Place in template and provide metadata and content.
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
            name: 'ace-article',
            type: 'component',
            params: [
                {
                    name: 'meta', type: 'object',
                    desc: `
                        <p>
                            Article meta data. Generates article header content. Can contain following values:
                        </p>
                        <ul>
                            <li>
                                <doc-param>title</doc-param>: the article h1 title header.
                            </li>
                            <li>
                                <doc-param>subtitle</doc-param>: the article subtitle header.
                            </li>
                            <li>
                                <doc-param>image</doc-param>: the article header image src.
                            </li>
                            <li>
                                <doc-param>author</doc-param>: the article author name.
                            </li>
                            <li>
                                <doc-param>date</doc-param>: the article date, <code>string</code> or <code>Date</code>.
                            </li>
                        </ul>
                    `
                }
            ],
            slots: [
                {
                    name: 'header',
                    desc: `Article header content. Overrides content provided with <code>meta</code> param.`
                },
                {
                    name: 'body',
                    desc: `Article main or body content. Same as default slot.`
                },
                {
                    name: 'default',
                    desc: `Article main or body content.`
                }
            ]
        },
        code: {
            usage: `
                import {AceArticle} from 'ace-article.component';

                const MyComponent = {
                    components: {
                        AceArticle
                    },
                    template: \`
                        <ace-article
                            :meta="{
                                title: 'This is h1 title',
                                subtitle: 'This is optional subtitle',
                                image: 'my/article/image.jpg',
                                date: new Date(2025, 9, 31),
                                author: 'John Doe'
                            }">
                            ...
                        </ace-article>
                    \`
                };
            `
        },
        examples: [
            {
                js: `
                    {
                        template: \`
                            <ace-article
                                :meta="{
                                    title: 'This is h1 title',
                                    subtitle: 'This is subtitle',
                                    image: 'assets/img/bird.jpg',
                                    date: new Date(),
                                    author: 'Jane Doe'
                                }">

                                <p>
                                    {{lorem}}
                                </p>  
            
                                <h2>This is h2 header</h2>
            
                                <p v-for="n in 2">
                                    {{lorem}}
                                </p>
            
                                <h3>This is h3 header</h3>
            
                                <p v-for="n in 2">
                                    {{lorem}}
                                </p>
            
                                <h4>This is h4 header</h4>
            
                                <p v-for="n in 2">
                                    {{lorem}}
                                </p>
                            </ace-article>
                        \`,
                        data: () => ({
                            lorem: \`
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                occaecat cupidatat non proident, sunt in culpa qui officia 
                                deserunt mollit anim id est laborum.
                            \`
                        })
                    }
    
                `
            }
        ]
    })
};