import { compile } from 'vue';
import { trimTemplateString, toJS } from '@ace/services/ace-utils.service';
import { AceError } from '@ace/components/ace-error/ace-error.class';
import { sections as SECTIONS } from '../pages/';

let USEDBY = null;

export const docService = {
    import(path) {
        return import(path).then(m => m.default);
    },

    loadPage(id) {
        let item = this.getPageItem(id);
        let file = item.file ? item.file : `${item.id}.docs`;
        let path = `../../pages/${file}`;
        return this.import(path);
    },


    getPageItem(id) {
        // for (let section of SECTIONS) {
        //     for (let item of section.items) {
        //         if (item.id === id) {
        //             return item;
        //         }
        //     }
        // }
        // throw AceError.error404();
    },

    toJS(jsString) {
        return toJS(jsString);
    },

    compile(htmlString) {
        htmlString = htmlString || '';
        return compile(htmlString);
    },

    trimTemplateString(jsString) {
        return trimTemplateString(jsString);
    },

    getUsedBys() {
        if (USEDBY) {
            return USEDBY;
        }
        USEDBY = {};
        SECTIONS.forEach(section => {
            section.items.forEach(item => {
                if (item.uses) {
                    item.uses.forEach(itemID => {
                        USEDBY[itemID] = USEDBY[itemID] || [];
                        USEDBY[itemID].push(item.meta.id);
                    });
                }
            });
        });
        return USEDBY;
    },

    getItemUsedBy(itemID) {
        return this.getUsedBys()[itemID];
    }
};

export default docService;