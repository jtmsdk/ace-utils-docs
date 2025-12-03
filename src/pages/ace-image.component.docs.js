import aceAlertService from 'ace-alert.service';
window.aceAlertService = aceAlertService;

const meta = {
    id: 'ace-image.component',
    name: 'ace-image',
    title: 'Image',
    desc: `Renders an image.`
};

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <p>
                Use <code tag>ace-image</code> to render an image.
            </p>

            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>
            
            <p>
                Import image and register it globally or locally. Place in template and provide image source with <code param>src</code> param.
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
            name: 'ace-image',
            type: 'component',
            params: [
                {
                    name: 'src', type: 'string',
                    desc: `The target image URL or data URI.`
                },
                {
                    name: 'ratio', type: 'string',
                    desc: `Aspect ratio for the image, e.g.: "16/9".`
                },
                {
                    name: 'loading', type: 'string', default: 'eager',
                    desc: `Loading method of the image. By default <code val>eager</code> meaning the image is loaded as soon as it is mounted. Use <code val>lazy</code> to lazy-load the image.`
                },
                {
                    name: 'threshold', type: 'number', default: 0,
                    desc: `Threshold percentage for lazy-loading the image. Defines how much of the image element must be within the viewport before it gets loaded. E.g. 0 means as soon as it touches the viewport edge, and 0.5 means as soon as half of the image element is within viewport.`
                },
                {
                    name: 'title', type: 'string',
                    desc: `Title text shown for the image.`
                },
                {
                    name: 'alt', type: 'string',
                    desc: `Alternate text for image in case it cannot be displayed or in case using a screen reader.`
                },
                {
                    name: 'enter-effect', type: 'string',
                    desc: `Animation effect to show when image is viewed in viewport. Options:
                        <code val>fadeincolor</code>, 
                        <code val>fadein</code>
                    `
                },
                {
                    name: 'object-fit', type: 'string',
                    desc: `CSS object-fit value. E.g.: 
                        <code val>contain</code>,
                        <code val>cover</code>,
                        <code val>fill</code>.
                    `
                },
                {
                    name: 'object-position', type: 'string',
                    desc: `CSS object-position value: x and y value pair. E.g.:
                        <code val>50% 50%</code>,
                        <code val>center center</code>,
                        <code val>left center</code>.
                    `
                }
            ],
            events: [
                {
                    name: 'load', value: 'Event',
                    desc: `Emitted when the image has been loaded.`
                },
                {
                    name: 'error', value: 'Event',
                    desc: `Emitted if loading of the image fails.`
                }
            ]
        },
        code: {
            usage: `
                import {AceImage} from 'ace-image.component';

                const MyComponent = {
                    components: {
                        AceImage
                    },
                    template: \`
                        <ace-image 
                            src="my/assets/image.jpg">
                        </ace-image>
                    \`
                };
            `
        },
        examples: [
            {
                name: 'Example',
                desc: `
                    <p>
                        By default <code tag>ace-image</code> behaves just like native <code tag>img</code>. Image loads eagerly and expands to its full size or up to the maximum size limited by the parent container.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-image
                                src="assets/img/coffee.jpg">
                            </ace-image>
                        \`
                    }
                `
            },
            {
                name: 'Enter effects',
                desc: `
                    <p>
                        Enter effect is an animation that is shown when the image becomes visible. Try the options below to see each effect ...in effect.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-image 
                                src="assets/img/porvoo.jpg" 
                                :enter-effect="effect">
                            </ace-image>

                            <br>
            
                            <div v-for="option in effects">
                                <ace-input 
                                    type="radio"
                                    v-model="effect" 
                                    :option="option">
                                    {{option}}
                                </ace-input>
                            </div>
                        \`,
                        data: () => ({
                            effect: 'fadeincolor',
                            effects: [
                                'fadeincolor',
                                'fadein'
                            ]
                        })
                    }
                `
            },
            {
                name: 'Error fallback',
                desc: `
                    <p>
                        If the target image does not exist or fails to load, an error fallback image will be shown instead.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-image 
                                src="this/does/not/exist.jpg">
                            </ace-image>
                        \`
                    }
                `
            },
            {
                name: 'Lazy-loading',
                desc: `
                    <p>
                        Set <code param>loading="lazy"</code> to lazy-load the image, meaning the image is downloaded only once it is about to enter the viewport. This is useful for optimizing page load performance when there are many images on the page. In this example, an alert is shown once the image has been loaded. Use <code param>threshold</code> to define how much of the image must be within viewport before it gets loaded.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-image
                                loading="lazy"    
                                src="assets/img/nature.jpg"    
                                enter-effect="fadein"
                                @load="onload($event)">
                            </ace-image> 
                        \`,
                        methods: {
                            onload(event) {
                                aceAlertService.open({
                                    type: 'info', 
                                    header: 'Lazy-loading example: image loaded!'
                                });
                            }
                        }
                    }
                `
            }
        ]
    })
};