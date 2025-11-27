import heartIcon from '@ace.icons/heart-edgy-inverse.svg';
import arrowRightIcon from '@ace.icons/arrow-right.svg';

export default {
    meta: {
        id: 'welcome',
        name: 'welcome',
        title: 'Welcome'
    },
    data: () => ({
        lines: [
            'SPAs, PWAs',
            'ES modules',
            'Vue 3'
        ]
    }),
    computed: {
        year() {
            return (new Date()).getFullYear();
        }
    },
    template: `
        <doc-page class="doc-page-welcome">
            <header>
                <h1>Ace-Utils</h1>
                <h2>Frontend Toolkit | Design System</h2>
                <ace-msg icon="">
                    &copy; {{year}} Jussi Mänttäri
                </ace-msg>
            </header>
            
            <section>
                <h3 v-for="(line, index) in lines"
                    :style="{animationDelay: (0.4 + 0.2 * index) + 's'}">
                    <ace-icon 
                        src="${heartIcon}">
                    </ace-icon> 
                    <span>{{line}}</span>
                </h3>
            </section>

            <section>
                <ace-button 
                    to="pages/introduction"
                    size="large"
                    icon="${arrowRightIcon}">
                    Read more
                </ace-button>
            </section>
        </doc-page>
    `
}