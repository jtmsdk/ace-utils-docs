const meta = {
    id: 'ace-lightbox.component',
    name: 'ace-lightbox',
    title: 'Lightbox',
    desc: `Renders a slide-show viewer for media.`
};

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <p>
                Use <code tag>ace-lightbox</code> to render a slide-show viewer for images, videos or custom content.
            </p>

            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import lightbox and register it globally or locally. Place in template and provide content with <code param>items</code> param or default slot.
            </p>

            <ace-codeblock
                :code="code.usage">
            </ace-codeblock>

            <p>
                If <code param>items</code> param is used, each item can be a href, or an object containing item details.
            </p>

            <ace-codeblock
                :code="code.items">
            </ace-codeblock>

            <doc-examples
                :examples="examples">
            </doc-examples>

        </doc-page>
    `,
    data: () => ({
        meta,
        api: [
            {
                name: 'ace-lightbox',
                type: 'component',
                params: [
                    {
                        name: 'items', type: 'array',
                        desc: `Array of objects describing the content to be shown in lightbox. See <code param>items</code> API below to which properties items can have.`
                    },
                    {
                        name: 'item', type: 'object, string, number', default: 'items[0]',
                        desc: `The item to display as initially selected. Can be the item object itself, item ID or the index. If not provided, the first item (index 0) is selected.`
                    },
                    {
                        name: 'closeable', type: 'boolean', default: 'false',
                        desc: `If <code val>true</code>, a close button is displayed inside the lightbox. Once clicked, <code event>close</code> event is emitted.` 
                    },
                    {
                        name: 'keyboard', type: 'boolean', default: 'false',
                        desc: `If <code val>true</code>, the lightbox can be controlled with keyboard arrows (left/right to navigate slides) and esc to close.`
                    }
                ],
                slots: [
                    {
                        name: 'default',
                        desc: `The lighbox content, each child representing one slide. Alternative way to provide the lighbox content, overrides the <code param>items</code> param.`
                    }
                ],
                events: [
                    {
                        name: 'close',
                        desc: `Emitted when user clicks the close button inside the lightbox component.`
                    }
                ]
            },
            {
                name: 'items',
                params: [
                    {
                        name: 'id', type: 'string',
                        desc: `The image ID (optional).`
                    },
                    {
                        name: 'href', type: 'string',
                        desc: `The href URL of the target image.`
                    },
                    {
                        name: 'title', type: 'string',
                        desc: `Title text for the image.`
                    },
                    {
                        name: 'desc', type: 'string',
                        desc: `Description or caption for the image as HTML string.`
                    },
                    {
                        name: 'alt', type: 'string',
                        desc: `Alternate text for image in case it cannot be displayed.`
                    },
                    {
                        name: 'component', type: 'object',
                        desc: `A component object to be rendered as the lightbox item.`
                    }
                ]
            }
    
        ],
        code: {
            usage: `
                import {AceLightbox} from 'ace-lightbox.component';

                const MyComponent = {
                    components: {
                        AceLightbox
                    },
                    template: \`
                        <ace-lightbox
                            :items="items">
                        </ace-lightbox>
                    \`
                };
            `,
            items: `
                // In most simple case, the items can be plain 
                // href-strings for media.
                items = [
                    'my/image1.jpg', 
                    'my/image2.jpg'
                ];

                // However, you can provide also the id, alt, title 
                // and caption for the items. See the  items API above 
                // for all possible values.
                items = [
                    {id: 1, title: '...', href: 'my/image1.jpg', ...},
                    {id: 2, title: '...', href: 'my/image2.jpg', ...}
                ];

                // Items can also be provided as components. 
                // This approach allows you to inject custom content 
                // into the lightbox.
                items = [ 
                    {id: 1, title: '...', component: {...}},
                    {id: 2, title: '...', component: {...}}
                ];
            `,
        },
        examples: [
            {
                desc: `
                    <p>
                        The items shown in lightbox can be provided either with <doc-param>items</doc-param> param or with the <doc-param>default</doc-param> slot. Each item, whether provided as item-object or slotted element, can contain any of the parameters shown in the items API above.
                    </p>
                    <p>
                        By default, when the lightbox is mounted, the first item in the box will be displayed. If you want to open a specific item slide, set the desired item preselected using <doc-param>item</doc-param> param.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-lightbox
                                style="height: 500px"
                                :closeable="false"
                                :items="items">
                            </ace-lightbox>
                        \`,
                        data: () => ({
                            items: [
                                { 
                                    id: 1, 
                                    href: 'assets/img/porvoo.jpg', 
                                    desc: 'This is a description.'
                                },
                                {
                                    id: 2,
                                    href: 'assets/img/nature.jpg',
                                    desc: \`This is also a descripion.\`
                                },
                                { 
                                    id: 3, 
                                    href: 'assets/img/bird.jpg',
                                    desc: 'This is a description as well.'
                                }
                            ]
                        })
                    }
                `
            }
        ]
    })
};