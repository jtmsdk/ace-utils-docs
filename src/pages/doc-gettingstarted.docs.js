const meta = {
    id: 'gettingstarted',
    name: 'Getting started',
    title: 'Getting started',
    desc: `Getting started with common toolkit. Installation and application setup.`
}

export default {
    meta,
    data: () => ({
        meta,
        importMapCode: `
            <head>
                <link rel="stylesheet" href="path/to/ace-utils/index.css">
                <script type="importmap" src="path/to/ace-utils/importmap.json"></script>
            </head>
        `,
        importMapOverrideCode: `
            <head>
                <link rel="stylesheet" href="path/to/ace-utils/index.css">
                <script type="importmap" src="path/to/ace-utils/importmap.json"></script>
                <script type="importmap">
                    {
                        "imports": {
                            "vue": "path/to/vue.esm-browser.js",
                            "vue-router": "path/to/vue-router.esm-browser.js"
                        }
                    }
                </script>
            </head>
        `
    }),
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <ace-msg 
                type="info">
                Ace-utils is free to use, but I don't accept requests for features.
            </ace-msg>

            <h2>Vite Bundler</h2>

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
                        Include the ace-utils CSS and importmap in your app <code>index.html</code> file:
                    </p>

                    <ace-codeblock
                        header="index.html"
                        :code="importMapCode"
                        lang="html">
                    </ace-codeblock>

                    <p>
                        By default, ace-utils loads <ace-link tab href="https://vuejs.org/">Vue</ace-link> and <ace-link tab href="https://router.vuejs.org/">Vue Router</ace-link> automatically from CDN using the paths defined in the importmap. If you want to override this behavior and use your own copies of Vue and Vue Router, you can override the paths with another importmap definition:
                    </p>

                    <ace-codeblock
                        header="index.html"
                        :code="importMapOverrideCode"
                        lang="html">
                    </ace-codeblock>
                </li>
                <li>
                    After this, you are good to go. Follow the component specific documentations to see how each component is imported and used.
                </li>
            </ol>
            





        </doc-page>
    `
};