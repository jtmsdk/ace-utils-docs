import {AceThumbs} from '@ace/components';

const meta = {
    id: 'ace-thumbs.component',
    name: 'ace-thumbs',
    title: 'Thumbs',
    desc: `Renders single thumbnail or a set of thumbnails.`
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
                    Use <doc-tag>ace-thumbs</doc-tag> to render a set or gallery of thumbnails. Use <doc-tag>ace-thumb</doc-tag> to render a single thumbnail. While the thumbnail gallery is automatically bound to a <doc-link id="ace-lightbox.component">lightbox</doc-link> instance, individual thumbnails have no built-in functionality.
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
                name: 'ace-thumbs',
                type: 'component',
                params: [
                    {
                        name: 'id', type: 'string',
                        desc: `The thumbnail set ID, which becomes the target lightbox instance ID. If not provided, thumbs will be bound to the default lightbox instance.`
                    },
                    {
                        name: 'items', type: 'array',
                        desc: `The thumbnail items array. Each item in array is an object containing parameters for a thumbnail. See "items" API below for available params.`
                    },
                    {
                        name: 'object-fit', type: 'string',
                        desc: `CSS object-fit value for the thumbnail images.`
                    }
                ],
                slots: [
                    {
                        name: 'default',
                        desc: `The thumbnail set content, one or more thumbnail components.`
                    }
                ]
            },
            {
                name: 'ace-thumb',
                type: 'component',
                params: [
                    {
                        name: 'src', type: 'string',
                        desc: `The thumbnail image URL.`
                    },
                    {
                        name: 'title', type: 'string',
                        desc: `The thumbnail image title.`
                    },
                    {
                        name: 'alt', type: 'string',
                        desc: `The thumbnail image alt text.`
                    },
                    {
                        name: 'object-fit', type: 'string', default: 'cover',
                        desc: `CSS object-fit value for the thumbnail image.`
                    }
                ]
            },
            {
                name: 'items',
                type: 'array',
                params: [
                    {
                        name: 'src', type: 'string',
                        desc: `Thumbnail image URL.`
                    },
                    {
                        name: 'href', type: 'string',
                        desc: `Target lightbox image URL. This will be loaded when thumbnail is clicked.`
                    },
                    {
                        name: 'title', type: 'string',
                        desc: `Image title text.`
                    },
                    {
                        name: 'desc', type: 'string',
                        desc: `Image description or caption.`
                    },
                    {
                        name: 'alt', type: 'string',
                        desc: `Image alt text in case image cannot be displayed.`
                    },
                    {
                        name: 'data-title', type: 'string',
                        desc: `Title text for the lightbox image. Not used for the thumbnail.`
                    },
                    {
                        name: 'data-alt', type: 'string',
                        desc: `Alt text for the lightbox image. Noth used for the thumbnail.`
                    }
                ]
            }
        ],
        examples: [
            {
                name: 'Single thumbnail',
                desc: `
                    <p>
                        The <doc-tag>ace-thumb</doc-tag> renders a single thumbnail. Single thumbnail has no built-in functionality; you can customize and attach any desired behavior to it.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-thumb
                                src="assets/img/coffee-thumb.jpg"
                                href="assets/img/coffee.jpg"
                                title="Coffee">
                            </ace-thumb>    
                        \`
                    }
                `
            },
            {
                name: 'Set of thumbnails',
                desc: `
                    <p>
                        The <doc-tag>ace-thumbs</doc-tag> creates a set of thumbnails. If <doc-param>items</doc-param> param is provided, the thumbnails are automatically bound to a lightbox. If the thumbnails are provided using slot, you need to attach the desired behavior manually.
                    </p>
                `,
                js: `
                    { 
                        template: \`
                            <ace-thumbs
                                id="myImages"
                                :items="items">
                            </ace-thumbs>
                        \`,
                        data: () => ({
                            items: [
                                {
                                    src: 'assets/img/coffee-thumb.jpg',
                                    href: 'assets/img/coffee.jpg',
                                    desc: 'Coffee'
                                },
                                {
                                    src: 'assets/img/desktop-thumb.jpg',
                                    href: 'assets/img/desktop.jpg',
                                    desc: 'Dektop'
                                },
                                {
                                    src: 'assets/img/porvoo-thumb.jpg',
                                    href: 'assets/img/porvoo.jpg',
                                    desc: 'Porvoo'
                                },
                                {
                                    src: 'assets/img/bird-thumb.jpg',
                                    href: 'assets/img/bird.jpg',
                                    desc: 'Bird'
                                }
                            ]
                        })
                    }
                `
            }
        ]
    })
};