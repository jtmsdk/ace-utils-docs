import {DocExampleEditor} from './doc-example-editor/doc-example-editor';
import {DocExamplePreview} from './doc-example-preview/doc-example-preview';

export const DocExample = {
    components: {
        DocExampleEditor,
        DocExamplePreview
    },
    props: {
        example: {type: Object},
        readonly: {type: Boolean, default: false}
    },
    data() {
        return {
            isDescShown: false,
            isJSShown: false,
            isCSSShown: false,
            data: {
                js: this.example.js,
                css: this.example.css
            }     
        }
    }, 
    template: `
        <section class="doc-example">

            <div class="doc-example-header">
                <div class="doc-example-name">
                    {{name || 'Example'}}
                </div>
                <div class="doc-example-controls">
                    <span 
                        v-if="example.desc"
                        @click="toggleDesc()" 
                        :class="{active: isDescShown}">
                        description
                    </span>
                    <span 
                        @click="toggleJS()" 
                        :class="{active: isJSShown}">
                        js
                    </span>
                    <span 
                        @click="toggleCSS()" 
                        :class="{active: isCSSShown}">
                        css
                    </span>
                </div>
                <div class="doc-example-descriptioncontainer">
                    <div class="doc-example-desc" 
                        v-show="isDescShown">
                        <component :is="description"></component>
                    </div>
                    <div class="doc-example-params" v-if="example.params">
                        <doc-expander>
                            params
                        </doc-expander>
                        <doc-params 
                            :params="example.params">
                        </doc-params>
                    </div>
                </div>
            </div>
            
            <doc-example-editor 
                header="JS"
                key="js" 
                v-on:update="updateJS($event)" 
                v-if="isJSShown" 
                :text="data.js">
            </doc-example-editor>

            <doc-example-editor 
                header="CSS"
                key="css" 
                v-on:update="updateCSS($event)" 
                v-if="isCSSShown" 
                :text="data.css">
            </doc-example-editor>

            <doc-example-preview
                :js="data.js"
                :css="data.css">
            </doc-example-preview>
            
        </section>
    `,
    computed: {
        description() {
            return {
                data: this.example.data,
                template: `<div>${this.example.desc}</div>` 
            };
        },
        name() {
            return this.example.name;
        }
    },
    methods: {
        updateJS(event) {
            this.data.js = event.value;
        },
        updateCSS(event) {
            this.data.css = event.value;
        },
        toggleDesc() {
            this.isDescShown = !this.isDescShown;  
        },
        toggleJS() {
            this.isJSShown = !this.isJSShown;
        },
        toggleCSS() {
            this.isCSSShown = !this.isCSSShown;
        }
    }
};