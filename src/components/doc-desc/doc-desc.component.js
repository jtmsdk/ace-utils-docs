export const DocDesc = {
    props: ['desc', 'data'],
    template: `
        <div class="doc-desc">
            <slot>
                <component 
                    v-if="desc"
                    :is="descComp">
                </component>
            </slot>
        </div>
    `,
    computed: {
        descComp() {
            if (this.desc) {
                return {
                    data: () => this.data || {},
                    template: this.desc
                };
            }
            return null;
        }
    }
};