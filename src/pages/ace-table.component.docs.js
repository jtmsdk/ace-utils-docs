import {AceTable} from '@ace/components';

const name = 'ace-table';
const meta = {
    id: 'ace-table.component',
    name: name,
    title: 'Table',
    desc: `Renders a table element.`
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
                    Use <doc-tag>ace-table</doc-tag> to render a table.
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
        api: [
            {
                name: name,
                type: 'component',
                params: [
                    { 
                        name: 'striped', type: 'boolean', 
                        desc: `If <doc-value>true</doc-value>, table is rendered with even-odd row colors.`
                    }
                ],
                slots: [
                    {
                        name: 'default',
                        desc: `Table contents as with native table.`
                    }
                ]
            }
        ],
        examples: [
            {
                name: 'Default',
                js: `
                    {
                        template: \`
                            <ace-table>
                                <tr>
                                    <th>Name</th>
                                    <th>Value</th>
                                    <th>Delta</th>
                                </tr>
                                <tr v-for="item in items">
                                    <td>{{item.name}}</td>
                                    <td>{{item.value}}</td>
                                    <td>{{item.delta}}</td>
                                </tr>
                            </ace-table>
                        \`,
                        data: () => ({
                            items: [
                                {name: 'First', value: 45.5 , delta: 0.5},
                                {name: 'Second', value: 67.2, delta: 1.2},
                                {name: 'Third', value: 50.1, delta: 0.8 }
                            ]
                        })
                    }
                `
            },
            {
                name: 'Striped',
                js: `
                    {
                        template: \`
                            <ace-table striped>
                                <tr>
                                    <th>Name</th>
                                    <th>Value</th>
                                    <th>Delta</th>
                                </tr>
                                <tr v-for="item in items">
                                    <td>{{item.name}}</td>
                                    <td>{{item.value}}</td>
                                    <td>{{item.delta}}</td>
                                </tr>
                            </ace-table>
                        \`,
                        data: () => ({
                            items: [
                                {name: 'First', value: 45.5 , delta: 0.5},
                                {name: 'Second', value: 67.2, delta: 1.2},
                                {name: 'Third', value: 50.1, delta: 0.8 }
                            ]
                        })
                    }
                `
            }
        ]
    })
}