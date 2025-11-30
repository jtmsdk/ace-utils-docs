import {reactive} from 'vue';

export const DocApi = {
    props: ['api'],
    computed: {
        apis() {
            let apis = reactive(Array.isArray(this.api) ? this.api : [this.api]);
            apis.forEach(api => {
                let tab = api.params ? 1 : api.slots ? 2 : api.events ? 3 : 4;
                api.selectedTab = tab;
            });
            return apis;
        }
    },
    template: `
        <div class="doc-api">
            <h2>API</h2>
            <ace-accordion>
                <ace-accordion-item 
                    v-for="a in apis"
                    :key="a.name"
                    :expanded="a.expanded">

                    <ace-accordion-item-header>
                        <code tag v-if="a.type === 'component'">{{a.name}}</code>
                        <doc-directive v-else-if="a.type === 'directive'">
                            {{a.name}}
                        </doc-directive>
                        <doc-service v-else-if="a.type === 'service'">
                            {{a.name}}
                        </doc-service>
                        <doc-param v-else-if="a.type === 'object'">
                            {{a.name}}: { ... }
                        </doc-param>
                        <doc-param v-else-if="a.type === 'array'">
                            {{a.name}}: [ ... ]
                        </doc-param>
                        <doc-param v-else>{{a.name}}</doc-param>
                    </ace-accordion-item-header>

                    <template v-slot:body>
                        <doc-desc v-if="a.desc" 
                            :desc="a.desc">
                        </doc-desc>
                        
                        <ace-tabs v-model="a.selectedTab">
                            <ace-tab value="1" v-if="a.params">
                                params
                            </ace-tab>
                            <ace-tab value="2" v-if="a.slots">
                                slots
                            </ace-tab>
                            <ace-tab value="3" v-if="a.events">
                                events
                            </ace-tab>
                            <ace-tab value="4" v-if="a.functions">
                                functions
                            </ace-tab>
                        </ace-tabs>

                        <div class="doc-api-body">
                            <doc-params 
                                v-if="a.selectedTab == 1" 
                                :params="a.params">
                            </doc-params>
                            <doc-slots 
                                v-if="a.selectedTab == 2" 
                                :slots="a.slots">
                            </doc-slots>
                            <doc-events 
                                v-if="a.selectedTab == 3" 
                                :events="a.events">
                            </doc-events>
                            <doc-functions 
                                v-if="a.selectedTab == 4" 
                                :functions="a.functions">
                            </doc-functions>
                        </div>
                    </template>
                </ace-accordion-item>
            </ace-accordion>
        </div>
    `
};