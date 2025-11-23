const meta = {
    id: 'ace-lightbox.component',
    name: 'ace-lightbox',
    title: 'Lightbox',
    desc: `Renders a slide-show image viewer.`
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
                    Use <doc-tag>ace-lightbox</doc-tag> to render a slide-show viewer for images and videos. Lightbox items can be provided with <doc-param>items</doc-param> param or using the default slot. See also <doc-link id="ace-lightbox.directive">lightbox directive</doc-link> for more convenient lightbox use.
                </p>
            </doc-desc>

            <ace-codeblock
                header="Items param"
                :code="usage">
            </ace-codeblock>

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
        usage: `
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
        api: [
            {
                name: 'ace-lightbox',
                type: 'component',
                params: [
                    {
                        name: 'items', type: 'array',
                        desc: `Array of objects describing the images to be shown in the lightbox. See <doc-param>item</doc-param> API below to see what parameters each item object can have.`
                    },
                    {
                        name: 'item', type: 'object, string, number', default: 'items[0]',
                        desc: `The item to display as pre-selected in lightbox. Can be the item itself, item ID or the item index. If not provided, the first item (index 0) is selected.`
                    },
                    {
                        name: 'closeable', type: 'boolean', default: 'false',
                        desc: `If <doc-value>true</doc-value>, a close button is displayed inside the lightbox. Once clicked, <doc-event>close</doc-event> event is emitted.` 
                    }
                ],
                slots: [
                    {
                        name: 'default',
                        desc: `The lighbox content of one or more <doc-link id="ace-image.component">images</doc-link>. Alternative way to provide the lighbox content (overrides the <doc-param>items</doc-param> param).
                        Each image can have params listed in the <doc-param>item</doc-param> API below.`
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
                        desc: `A component object to be rendered as the lightbox item. If provided, overrides other item params.`
                    }
                ]
            }
    
        ],
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