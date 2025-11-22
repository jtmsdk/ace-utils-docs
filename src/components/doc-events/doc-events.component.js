import {AceTable} from '@ace/components';

export const DocEvents = {
    components: {
        AceTable
    },
    props: ['events'],
    template: `
        <div class="doc-events">
            <ace-table class="doc-table">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>value</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in events" :key="item.name">
                        <td class="name"><doc-param>{{''+item.name}}</doc-param></td>
                        <td class="event"><doc-value>{{''+(item.value || item.$event)}}</doc-value></td>
                        <td class="desc"><component :is="{template: item.desc}"></component></td>
                    </tr>
                </tbody>
            </ace-table>
        </div>
    `
};