import {AceArticle} from '@ace/components';

const name = 'ace-article';
const meta = {
    id: 'ace-article.component',
    name: name,
    title: 'Article',
    desc: `Renders an article, a self contained document or blog post, styled for readability.`
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
                    Use <doc-tag>${name}</doc-tag> to render an article &mdash; a self contained document or blog post, styled for readability.
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
                    name: 'meta', type: 'object',
                    desc: `
                        <p>
                            Article meta data object. Generates the article header content. Can contain following values:
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
                                <doc-param>date</doc-param>: the article date.
                            </li>
                            <li>
                                <doc-param>author</doc-param>: the article author name.
                            </li>
                        </ul>
                    `
                }
            ],
            slots: [
                {
                    name: 'header',
                    desc: `The article header content. Overrides the <doc-param>meta</doc-param> param.`
                },
                {
                    name: 'body',
                    desc: `The article body content.`
                },
                {
                    name: 'default',
                    desc: `The article body content.`
                }
            ]
        },
        examples: [
            {
                js: `
                    {
                        template: \`
                            <${name}
                                :title="title"
                                :subtitle="subtitle"
                                :date="date"
                                image="assets/img/bird.jpg">

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

                            </${name}>
                        \`,
                        data: () => ({
                            title: 'This is h1 title',
                            subtitle: 'This is optional subtitle',
                            image: 'assets/img/bird.jpg',
                            date: new Date(),
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