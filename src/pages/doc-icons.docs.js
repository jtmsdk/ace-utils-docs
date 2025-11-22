import { SETTINGS } from '@ace/settings';
import { escape } from '@ace/services/ace-utils.service';
import attachIcon from '@ace.icons/attach.svg';
import aceAlertService from '@ace/services/ace-alert.service';

// Get all .svg files from folder
const files = [];

// Extract icon names and paths from files
let icons = Object.keys(files).map((key) => {
    let fileName = key.split('/').pop() || '';
    return {
        fileName: fileName,
        name: fileName.replace('.svg', ''),
        src: files[key],
        import: `${SETTINGS.PATHS.ICONS}/${fileName}`
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
                    <ace-msg 
                        type="info">
                        Toolkit icons by <a href="https://iconmonstr.com/">iconmonstr.com</a>
                    </ace-msg>
                </p>

                <p>
                    Com:mon toolkit uses SVG files to render inline SVG icons. All icons are rendered using <doc-link id="ace-icon.component">ace-icon</doc-link> component.
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

                <!-- clipboard input -->
                <input type="text" 
                    style="opacity: 0; pointer-events: none;"
                    id="clipboard" 
                    value="">
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
            let input = document.querySelector("input#clipboard");
            input.setAttribute('value', value);
            input.select();
            document.execCommand('copy');
            aceAlertService.closeAll();
            aceAlertService.open({
                icon: attachIcon,
                body: `<b>${escape(value)}</b>`,
                autoclose: 3
            });
        }
    }
};