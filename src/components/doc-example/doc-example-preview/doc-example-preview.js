import {toJS, getUniqueID} from '@ace/services/ace-utils.service';

export const DocExamplePreview = {
    props: {
        js: String,
        css: String
    },
    template: `
        <div :id="id" class="doc-example-preview">
            <v-style ref="styles"></v-style>
            <component :is="preview"></component>
        </div>
    `,
    data: () => ({
        id: getUniqueID('doc-example-')
    }),
    computed: {
        preview() {
            try {
                this.setStyles(this.scopedCSS);
                let comp = toJS(this.js);
                return comp;
            }
            catch (error) {
                console.error('Failed to preview example', error);
                return null;
            }
        },
        scopedCSS() {
            return `#${this.id} { ${this.css} }`;
        }
    },
    methods: {
        setStyles(css) {
            this.$nextTick(() => {
                if (this.$refs.styles) {
                    this.$refs.styles.$el.innerHTML = css;
                }
            });
        }
    }
};