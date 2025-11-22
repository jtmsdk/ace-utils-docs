import {AceCols} from '@ace/components';

const name = 'ace-cols';
const meta = {
    id: 'ace-cols.component',
    name: name,
    title: 'Columns',
    desc: `Renders responsive columns which collapse based on available space.`
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
                    Use <doc-tag>${name}</doc-tag> to render responsive (CSS grid based) column layout, which can be collapsed using break points. The component responds to available space in container; not the overall device/viewport width.
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
                    name: 'cols', type: 'number, string', default: 3,
                    desc: `
                        <p>
                            The base/initial column definitions. Either a number of columns or string representing CSS <doc-param>grid-template-columns</doc-param> value. E.g.: <doc-param name="cols" value="2"></doc-param> or <doc-param name="cols" value="200px 20% 1fr"></doc-param>.
                        </p>
                    `
                },
                {
                    name: 'cols-*', type: 'number, string',
                    desc: `
                        <p>
                            The column break point definitions, e.g.: <doc-param name="cols-400" value="2"></doc-param> and/or <doc-param name="cols-700" value="200px 1fr 2fr"></doc-param>. The attribute name specifies the px width of the break point and the value is the number of columns or CSS <doc-param>grid-template-columns</doc-param> value.
                        </p>
                        <p>
                            You can add as many break point column definitions as you want. Break points trigger with container queries, meaning when the component width itself becomes equal or less than the break point width.
                        </p>
                    `
                },
                {
                    name: 'gap', type: 'string', default: '0 0',
                    desc: `The CSS grid <doc-param>gap</doc-param> value; defines gap between columns and wrapped rows.`
                }
            ],
            slots: [
                {
                    name: 'default',
                    desc: `The component content.`
                }
            ]
        },
        examples: [
            {
                js: `
                    {
                        template: \`
                            <p>
                                Initially 4 column grid, collapses to 2 at 700px and to 1 at 500px.
                            </p>
            
                            <${name} 
                                cols="4"
                                cols-700="2"
                                cols-500="1">
                                <div v-for="n in 8" 
                                    class="box">
                                    {{n}}
                                </div>
                            </${name}>    
                        \`
                    }
                `,
                css: `
                    .box {
                        outline: 1px solid lightgray;
                        background: hsl(0, 0%, 99%);
                        padding: 8px;
                        height: 50px;
                    }
                `
            },
            
        ]
    })
};