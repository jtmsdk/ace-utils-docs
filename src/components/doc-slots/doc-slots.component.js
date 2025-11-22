import {AceTable} from '@ace/components';

export const DocSlots = {
    components: {AceTable},
    props: ['slots'],
    template: `
        <div class="doc-slots">
            <ace-table class="doc-table">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="slot in slots">
                        <td class="name"><doc-param>{{slot.name}}</doc-param></td>
                        <td class="desc"><component :is="{template: slot.desc}"></component></td>
                    </tr>
                </tbody>
            </ace-table>
        </div>
    `
};