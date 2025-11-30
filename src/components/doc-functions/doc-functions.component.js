export const DocFunctions = {
    props: ['functions'],
    template: `
        <div class="doc-functions">
            <ace-accordion multiple>
                <ace-accordion-item 
                    v-for="item in functions" 
                    :key="item.name">
                    <ace-accordion-item-header>
                        <doc-function>
                            {{item.name}}
                        </doc-function>
                    </ace-accordion-item-header>
                    <template v-slot:body>
                        <component 
                            :is="{template: item.desc}">
                        </component>
                        <doc-params 
                            v-if="item.params"
                            :params="item.params">
                        </doc-params>
                    </template>
                </ace-accordion-item>
            </ace-accordion>
        </div>
    `
};