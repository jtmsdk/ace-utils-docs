export const DocLink = {
    props: {
        scroll: {type: String, default: 'true'},
        id: String
    },
    template: `
        <router-link class="doc-link" :to="to">
            <slot>{{id}}</slot>
        </router-link>
    `,
    computed: {
        to() {
            return `/pages/${this.id}`;
        }
    }
};