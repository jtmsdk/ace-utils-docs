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
        npm: {
            install: `npm install ace-utils`
        }
    }),
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <ace-msg 
                type="info">
                ace utils is not is not available for public use.
            </ace-msg>
        </doc-page>
    `
};