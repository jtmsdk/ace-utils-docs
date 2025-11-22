import {AceTable} from '@ace/components';

export const DocParams = {
    components: {AceTable},
    props: ['params'],
    template: `
        <div class="doc-params">
            <ace-table class="doc-table">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>type</th>
                        <th>default</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in params" :key="item.name">
                        <td class="name">
                            <doc-param>{{item.name}}</doc-param>
                        </td>
                        <td class="type">
                            {{item.type}}
                        </td>
                        <td class="default">
                            <doc-value :type="(typeof item.default)">{{item.default !== undefined ? item.default : 'undefined'}}</doc-value>
                        </td>
                        <td class="desc">
                            <component :is="{template: item.desc}"></component>
                        </td>
                    </tr>
                </tbody>
            </ace-table>
        </div>
    `
};