export const DocFunctions = {
    props: ['functions'],
    template: `
        <div class="doc-functions">
            <ace-accordion multiple>
                <ace-accordion-item 
                    v-for="item in functions" 
                    :key="item.name">
                    <template v-slot:header>
                        <doc-function>
                            {{item.name}}
                        </doc-function>
                    </template>
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