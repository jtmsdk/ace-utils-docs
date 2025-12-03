const meta = {
    id: 'ace-figure.component',
    name: 'ace-figure',
    title: 'Figure',
    desc: `Renders captions and headers for images and media.`
};

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <p>
                Use <code tag>ace-figure</code> to render captions and title headers for images and other media.
            </p>

            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import figure and register it globally or locally. Place in template and provide header, caption and content.
            </p>

            <ace-codeblock
                :code="code.usage">
            </ace-codeblock>

            <doc-examples
                :examples="examples">
            </doc-examples>

        </doc-page>
    `,
    data: () => ({
        meta,
        api: {
            type: 'component',
            name: 'ace-figure',
            params: [
                {
                    name: 'header', type: 'string',
                    desc: `Header text/HTML content.`
                },
                {
                    name: 'caption', type: 'string',
                    desc: `Caption or footer text/HTML content.`
                }
            ],
            slots: [
                {
                    name: 'header',
                    desc : `Figure header content.`
                },
                {
                    name: 'default',
                    desc: `Figure body content, e.g. an image, diagram or video.`
                },
                {
                    name: 'footer',
                    desc: `Figure footer or caption content.`
                }
            ]
        },
        code: {
            usage: `
                import {AceFigure} from 'ace-figure.component';

                const MyComponent = {
                    components: {
                        AceFigure
                    },
                    template: \`
                        <ace-figure
                            header="This is header title."
                            caption="This is caption.">
                            <ace-image
                                src="my/image.jpg">
                            </ace-image>
                        </ace-figure>
                    \`
                };
            `
        },
        examples: [
            {
                js: `
                    {
                        template: \`
                            <ace-figure
                                header="This is header title content.">
                                <ace-image 
                                    src="assets/img/nature.jpg">
                                </ace-image>
                                <template #footer>
                                    This is footer content, meant for 
                                    description or caption. This image is from
                                    <ace-link href="https://www.pexels.com/">
                                        pexels.com
                                    </ace-link>
                                </template>
                            </ace-figure>
                        \`
                    }
                    
                `
            }
        ]
    })
};