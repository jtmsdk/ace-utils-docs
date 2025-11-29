import crossplatformIcon from '@ace.icons/crossplatform.svg';
import packageIcon from '@ace.icons/package.svg';
import coffeeHeartIcon from '@ace.icons/coffee-heart.svg';
import arrowRightIcon from '@ace.icons/arrow-right.svg';

const meta = {
    id: 'introduction',
    name: 'Introduction',
    title: 'Introduction',
    desc: `Introduction to the toolkit.`
};
export default {
    meta,
    inject: ['app'],
    data: () => ({
        meta
    }),
    template: `
        <doc-page 
            id="doc-introduction-page"> 
            
            <doc-meta
                :meta="meta">
            </doc-meta>

            <doc-desc>

                <p>
                    {{app.name}} is a web frontend toolkit for 
                    <a href="https://vuejs.org/" target="_blank">Vue 3</a> apps.
                </p>
                
                <div class="feature">
                    <h2>
                        <ace-icon src="${crossplatformIcon}"></ace-icon>
                        <span>SPAs, PWAs</span>
                    </h2>
                    <p>
                        For responsive SPAs & PWAs that rely on client side routing. 
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
                        Easy to use and customize. No build tools required.
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