import {AceLightbox} from '@ace/directives';

const name = 'v-ace-lightbox';
const meta = {
    id: 'ace-lightbox.directive',
    name: name,
    title: 'Lightbox',
    desc: `Attaches a lightbox instance to the target element.`
};

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <doc-desc>
                <p>
                    Use <doc-directive>${name}</doc-directive> to bind a <doc-link id="ace-lightbox.component">lightbox</doc-link> instance to the target element or media.
                </p>
            </doc-desc>

            <doc-api
                :api="api">
            </doc-api>

            <doc-examples
                :examples="examples">
            </doc-examples>
        </doc-page>
    `,
    data: () => ({
        meta,
        api: [
            {
                name: `${name}:arg="value"`,
                type: 'directive',
                params: [
                    {
                        name: 'arg', type: 'string', default: 'default',
                        desc: `The target lightbox ID. By providing different IDs, content can be grouped into separate lightboxes. If not provided, content is bound to a default lightbox instance.`
                    },
                    {
                        name: 'value', type: 'object',
                        desc: `The lightbox item params. See <doc-link id="ace-lightbox.component">lightbox</doc-link> <doc-param>item</doc-param> API for details.`
                    },
                ]
            }
        ],
        examples: [
            {
                js: `
                    {
                        template: \`
                            <ace-thumbs>
                                <ace-thumb
                                    v-for="item in items"
                                    v-ace-lightbox="item"
                                    :src="item.href">
                                </ace-thumb>
                            </ace-thumbs>    
                        \`,
                        data: () => ({
                            items: [
                                {href: 'assets/img/coffee.jpg', desc: 'Coffee'},
                                {href: 'assets/img/desktop.jpg', desc: 'Desktop'},
                                {href: 'assets/img/porvoo.jpg', desc: 'Porvoo'},
                                {href: 'assets/img/bird.jpg', desc: 'Bird'}
                            ]
                        })
                    }
                    
                `
            }
        ]
    })
};