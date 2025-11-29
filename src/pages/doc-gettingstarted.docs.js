const meta = {
    id: 'gettingstarted',
    name: 'Getting started',
    title: 'Getting started',
    desc: `Getting started with the toolkit.`
};
export default {
    meta,
    template: `
        <doc-page
            id="doc-gettingstarted-page">
            
            <doc-meta
                :meta="meta">
            </doc-meta>

            <ace-msg 
                type="info">
                Ace-utils can be used with or without bundlers, but native browser usage
                requires <a href="https://github.com/guybedford/es-module-shims">es-module-shims</a> polyfill.
            </ace-msg>

            <h2>Bundler</h2>

            <ace-msg>
                This approach is for using ace-utils with Vite bundler.
            </ace-msg>

            <h2>Browser</h2>

            <ace-msg>
                This approach is for using ace-utils without bundlers or build steps.
            </ace-msg>

            <p>
                Ace-utils can be used natively in browser without bundlers or build steps. You only need to download the toolkit sources and make them available for your web app:
            </p>

            <ol>
                <li>
                    <p>
                        Download ace-utils from <ace-link tab href="https://github.com/jtmsdk/ace-utils">GitHub</ace-link> or from npm:
                    </p>

                    <ace-codeblock
                        header="Terminal"
                        code="npm install ace-utils">
                    </ace-codeblock>
                </li>
                <li>
                    <p>
                        Once downloaded, copy all files under <code>ace-utils/src/</code> folder, and make them available for your app. E.g. paste the files inside your app project, or into some other public folder shared on your server.
                    </p>
                </li>
                <li>
                    <p>
                        Include the ace-utils <em>CSS</em> and <em>importmap</em> in your app <code>index.html</code> file. However, since browsers do not support external importmaps yet, you need to load also the <code>es-module-shims</code> polyfill.
                    </p>

                    <ace-codeblock
                        header="index.html"
                        :code="codeImport"
                        lang="html">
                    </ace-codeblock>

                    <p>
                        By default, ace-utils loads <ace-link tab href="https://vuejs.org/">Vue</ace-link> and <ace-link tab href="https://router.vuejs.org/">Vue Router</ace-link> automatically from CDN using the paths defined in importmap. If you want to use your own copies of Vue and Vue Router, you can add another importmap defition after the first one to override paths:
                    </p>

                    <ace-codeblock
                        header="index.html"
                        :code="codeImportOverride"
                        lang="html">
                    </ace-codeblock>
                </li>
                <li>
                    <p>
                        You can now import resources from ace-utils in your application code. Check out component specific documentations to learn how each component is imported and used.
                    </p>
                    <ace-codeblock
                        header="app.js"
                        :code="codeApp">
                    </ace-codeblock>
                </li>
            </ol>
            
        </doc-page>
    `,
    data: () => ({
        meta,
        codeImport: `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>My App</title>

                <!-- Ace-utils CSS styles -->
                <link rel="stylesheet" href="path/to/ace-utils/index.css">

                <!-- es-module-shims polyfill to support external importmaps -->
                <script async src="https://ga.jspm.io/npm:es-module-shims@2.6.2/dist/es-module-shims.js"></script>
                
                <!-- Ace-utils importmap for resource paths, using "-shim" polyfill -->
                <script type="importmap-shim" src="path/to/ace-utils/importmap.json"></script>
                
                <!-- Include your application with "-shim" polyfill -->
                <script type="module-shim" src="app.js"></script>
            </head>
            <body>
                <app></app>
            </body>
            </html>
        `,
        codeImportOverride: `
            <script type="importmap-shim">
                {
                    "imports": {
                        "vue": "path/to/vue.esm-browser.js",
                        "vue-router": "path/to/vue-router.esm-browser.js"
                    }
                }
            </script>
        `,
        codeApp: `
            import {createSiteApp} from 'ace-app';
            import {AceButton} from 'ace-button.component';

            let app = createSiteApp({
                components: {
                    AceButton
                },
                template: \`
                    <h1>My App</h1>
                    <ace-button>
                        Hello World!
                    </ace-button>
                \`
            });

            app.mount('app');
        `
    })
};