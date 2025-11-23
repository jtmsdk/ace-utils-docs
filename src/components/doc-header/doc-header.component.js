import menuIcon from '@ace.icons/menu.svg';
import {AceButton} from '@ace/components';

export const DocHeader = {
    inject: ['app'],
    components: {
        AceButton
    },
    template: `
        <header class="doc-header">
            <ace-button transparent
                @click="app.toggleMenu()"
                icon="${menuIcon}">
            </ace-button>
            <router-link 
                class="doc-header-link" 
                to="/">
                <h1>
                    Ace-Utils
                </h1> 
            </router-link>
        </header>
    `
}
