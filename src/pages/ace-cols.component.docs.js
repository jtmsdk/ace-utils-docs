const meta = {
    id: 'ace-cols.component',
    name: 'ace-cols',
    title: 'Columns',
    desc: `Renders responsive columns which collapse on defined break points.`
};
export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <p>
                Use <code tag>ace-cols</code> to render responsive (CSS grid based) column layout, which collapses on defined break points. The component responds to available container space; not device/viewport width.
            </p>

            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import columns and register it globally or locally. Place in template, set break points and add content inside.
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
            name: 'ace-cols',
            type: 'component',
            params: [
                {
                    name: 'cols', type: 'number | string', default: 3,
                    desc: `
                        <p>
                            The initial column definition. Either a number of columns or CSS <code param>grid-template-columns</code> value. E.g.: <code val>3</code> or <code val>200px 20% 1fr</code>.
                        </p>
                    `
                },
                {
                    name: 'cols-*', type: 'number | string',
                    desc: `
                        <p>
                            The column break point definitions, e.g.: <code param>cols-400="2"</code> and/or <code param>cols-700="200px 1fr 2fr"</code>. The attribute name specifies the px width of the break point and the value is the number of columns or CSS <code param>grid-template-columns</code> value.
                        </p>
                        <p>
                            You can add as many break point column definitions as you want. Break points trigger with container queries, meaning when the component width itself becomes equal or less than the break point width.
                        </p>
                    `
                },
                {
                    name: 'gap', type: 'string', default: '0 0',
                    desc: `The CSS grid <code param>gap</code> value; defines gap between columns and wrapped rows.`
                }
            ],
            slots: [
                {
                    name: 'default',
                    desc: `The component content.`
                }
            ]
        },
        code: {
            usage: `
                import {AceCols} from 'ace-cols.component';

                const MyComponent = {
                    components: {
                        AceCols
                    },
                    template: \`
                        <ace-cols
                            cols="4"
                            cols-700="2"
                            cols-500="1">
                            <div>...</div>
                            <div>...</div>
                            <div>...</div>
                            <div>...</div>
                        </ace-cols>
                    \`,
                };
            `
        },
        examples: [
            {
                js: `
                    {
                        template: \`
                            <p>
                                Initially 4 column grid, collapses to 2 at 700px and to 1 at 500px.
                            </p>
                            <ace-cols 
                                cols="4"
                                cols-700="2"
                                cols-500="1">
                                <div class="box" v-for="i in 4">
                                    <div class="box" v-for="j in 2">
                                        Box {{i}}-{{j}}
                                    </div>
                                </div>
                            </ace-cols>    
                        \`
                    }
                `,
                css: `
                    .box {
                        border: 1px solid lightgray;
                        background: hsl(0, 0%, 99%);
                        min-height: 50px;
                        margin: 4px;
                        padding: 4px;
                    }
                `
            },
            
        ]
    })
};