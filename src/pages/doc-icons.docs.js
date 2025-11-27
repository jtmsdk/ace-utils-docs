import attachIcon from '@ace.icons/attach.svg';
import {escape, copyToClipboard} from '@ace/services/ace-utils.service';
import aceAlertService from '@ace/services/ace-alert.service';

// Get all .svg files
const files = import.meta.glob('@ace.icons/*.svg', { eager: true, query: '?url', import: 'default' });

// Extract icon names and paths to display previews
let icons = Object.keys(files).map((key) => {
    let fileName = key.split('/').pop() || '';
    return {
        src: files[key],
        fileName: fileName,
        name: fileName.replace('.svg', ''),
        import : `@ace.icons/${fileName}`
    };
});

const meta = {
    id: 'icons',
    name: 'Icons',
    title: 'Icons',
    desc: `Available icons.`
};

export default {
    meta,
    data: () => ({
        meta,
        icons: icons,
        searchText: '',
        size: '32px',
        color: 'black',
        bg: 'white'
    }),
    computed: {
        filteredIcons() {
            let text = (this.searchText || '').toLocaleLowerCase();
            return this.icons.filter(icon => icon.name.includes(text));
        }
    },
    template: `
        <doc-page class="doc-page-icons">
            <doc-meta
                :meta="meta">
            </doc-meta>

            <doc-desc>
                <p>
                    Ace-Utils ships with following SVG icons, which you use with
                    <doc-link id="ace-icon.component">ace-icon</doc-link> component. Click or double-click the icons below to copy their source or HTML snippet to clipboard.
                </p>

                <div class="control-panel">
                    <ace-inputgroup>
                        <ace-search
                            style="min-width: 8em"
                            v-model="searchText"
                            v-ace-autofocus
                            placeholder="Search">
                        </ace-search>
                        <ace-button
                            v-for="s in ['16px','24px','32px','64px']" 
                            @click="size = s">
                            {{s}}
                        </ace-button>
                        <ace-button 
                            @click="toggleBg()"
                            icon="">
                            box
                        </ace-button>
                        <ace-input
                            type="color"
                            v-model="color">
                        </ace-input>
                    </ace-inputgroup>
                </div>

                <div class="icons"
                    :style="{
                        '--iconSize': size,
                        '--iconColor': color,
                        '--iconBg': bg
                    }">
                    <div class="icon" 
                        v-for="icon in filteredIcons" :key="icon.name"
                        @dblclick="copyHTML(icon)"
                        @click="copySrc(icon)">
                        <div>
                            <ace-icon 
                                :src="icon.src">
                            </ace-icon>
                        </div>
                        <label>
                            {{icon.name}}
                        </label>
                    </div>
                </div>
            </doc-desc>
        </doc-page>
    `,
    methods: {
        toggleBg() {
            this.bg = this.bg === 'black' ? 'white' : 'black';
        },
        copySrc(icon) {
            this.copy(icon.import);
        },
        copyHTML(icon) {
            this.copy(`<ace-icon src="${icon.import}"></ace-icon>`);
        },
        copy(value) {
            copyToClipboard(value);
            aceAlertService.closeAll();
            aceAlertService.open({
                icon: attachIcon,
                body: `<b>${escape(value)}</b>`,
                autoclose: 3
            });
        }
    }
};