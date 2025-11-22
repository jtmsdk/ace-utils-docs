import { nextTick } from 'vue';
import { scrollIntoView } from '@ace/services/ace-dom.service';

export const DocMenu = {
    inject: ['app'],
    data: () => ({
        noScroll: false,
        refs: []
    }),
    template: `
        <div class="doc-menu"
            :class="{
                opened: app.isMenuOpen,
                collapsed: app.isMenuCollapsed
            }">
            <div 
                v-if="app.isMenuCollapsed"    
                class="doc-menu-backdrop"        
                @click="app.toggleMenu(false)">
            </div>
            <ace-menu>
                <ace-optiongroup
                    v-for="(section, sindex) in app.sections"
                    :ref="setSectionRef"
                    :key="section.id"
                    :label="section.title">
                    <ace-option 
                        v-for="item in section.items"
                        @click="selectItem(item)"
                        :selected="item.meta.id === selectedPageID"
                        :key="item.meta.id"
                        :id="item.meta.id">
                        {{item.meta.title}}
                    </ace-option>
                </ace-optiongroup>
            </ace-menu>
        </div>
    `,
    computed: {
        selectedPageID() {
            return this.$route.name;
        }
    },
    watch: {
        $route(to) {
            if (this.noScroll) {
                this.noScroll = false;
                return;
            }
            for (let s = 0; s < this.app.sections.length; s++) {
                let section = this.app.sections[s];
                for (let i = 0; i < section.items.length; i++) {
                    let item = section.items[i];
                    if (item.meta?.id === to.name) {
                        return this.openSection(section, s, item.meta.id);
                    }
                }
            }
        }
    },
    methods: {
        selectItem(item) {
            this.noScroll = true;
            this.$router.push({name: item.meta.id});
        },
        setSectionRef(ref) {
            this.refs.push(ref);
        },
        openSection(section, index, itemID) {
            this.refs[index].open();
            nextTick(() => scrollIntoView(itemID));
        }
    }
};
