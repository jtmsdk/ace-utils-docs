import crossplatformIcon from '@ace.icons/crossplatform.svg';
import packageIcon from '@ace.icons/package.svg';
import coffeeHeartIcon from '@ace.icons/coffee-heart.svg';
import arrowRightIcon from '@ace.icons/arrow-right.svg';
import {AceIcon, AceButton} from '@ace/components';

const meta = {
    id: 'introduction',
    name: 'Introduction',
    title: 'Introduction',
    desc: `Introduction to common toolkit and design system.`
};
export default {
    meta,
    components: {
        AceButton,
        AceIcon
    },
    data: () => ({
        meta
    }),
    template: `
        <doc-page class="doc-page-introduction"> 
            
            <doc-meta
                :meta="meta">
            </doc-meta>

            <doc-desc>

                <p>
                    Ace-Utils is a web frontend toolkit for 
                    <a href="https://vuejs.org/" target="_blank">Vue 3</a> apps.
                </p>
                
                <div class="feature">
                    <h2>
                        <ace-icon src="${crossplatformIcon}"></ace-icon>
                        <span>SPAs, PWAs</span>
                    </h2>
                    <p>
                        Intended for responsive SPAs & PWAs that rely on client side routing. 
                    </p>
                </div>

                <div class="feature">
                    <h2>
                        <ace-icon src="${packageIcon}"></ace-icon>
                        <span>ES modules</span>
                    </h2>
                    <p>
                        Uses ES modules, import maps and code-splitting with dynamic imports.
                    </p>
                </div>

                <div class="feature">
                    <h2>
                        <ace-icon src="${coffeeHeartIcon}"></ace-icon>
                        <span>Simplicity</span>
                    </h2>
                    <p>
                        No complex setup; build tools are optional.
                    </p>
                </div>

                <br><br>

                <ace-button 
                    size="large"
                    to="/pages/gettingstarted">
                    <ace-icon src="${arrowRightIcon}"></ace-icon>
                    Getting started
                </ace-button>
            </doc-desc>
        </doc-page>
    `,
    computed: {
        year() { return (new Date()).getFullYear() }
    }
}