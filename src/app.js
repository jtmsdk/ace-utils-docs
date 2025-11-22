import { createSiteApp } from 'ace-app';
import { createSiteRouter } from 'ace-app.router';
import { sections } from './pages/index';
import * as ace from '@ace/index';
import * as components from './components/index';
import WelcomePage from './pages/doc-welcome.docs';


const app = createSiteApp({
    globalComponents: {
        ...ace.components,
        ...components
    },
    globalDirectives: {
        ...ace.directives
    },
    provide() {
        return {
            app: this
        }
    },
    data: () => ({
        sections: sections,
        isMenuOpen: true,
        isMenuCollapsed: false,
    }),
    template: `
        <div class="header">
            <doc-header></doc-header>
        </div>
        <div class="body">
            <doc-menu></doc-menu>
            <doc-main></doc-main>
        </div>
    `,
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
});

const routes = [{
    path: '/',
    name: 'home',
    component: WelcomePage
}];

sections.forEach(section => {
    section.items.forEach(item => {
        routes.push({
            path: '/pages/' + item.meta.id,
            name: item.meta.id,
            component: item
        });
    });
});

const router = createSiteRouter({
    routes: routes
});

app.use(router);
app.mount('app');
