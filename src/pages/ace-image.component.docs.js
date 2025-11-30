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

            <doc-desc>
                <p>
                    Use <code tag>ace-image</code> to render an image.
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
        api: {
            name: 'ace-image',
            type: 'component',
            params: [
                {
                    name: 'src', type: 'string',
                    desc: `The src path of the image to display.`
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
                    desc: `Alternate text for image in case it cannot be displayed or in case user uses a screen reader.`
                },
                {
                    name: 'enter-effect', type: 'string',
                    desc: `Animation effect shown when image is mounted. Options:
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
                },
                {
                    name: 'placeholder', type: 'boolean', default: false,
                    desc: `If <code val>true</code>, placeholder is displayed while the image is loading.`
                }
            ],
            events: [
                {
                    name: 'load', value: 'Event',
                    desc: `Emitted when the src target image has been loaded.`
                },
                {
                    name: 'error', value: 'Event',
                    desc: `Emitted if loading of the src target image fails.`
                }
            ]
        },
        examples: [
            {
                name: 'Default use',
                desc: `
                    <p>
                        By default <code tag>ace-image</code> behaves just as native <code tag>img</code>: image loads eagerly and reserves the full size of the image up to the maximum size limited by parent container.
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
                        The component allows applying an animation effect to how the image is shown. Try toggling between the options below to see how the effect behaves.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-image 
                                src="assets/img/porvoo.jpg" 
                                :enter-effect="selected">
                            </ace-image>
            
                            <br>
            
                            <div v-for="option in options">
                                <ace-input 
                                    type="radio"
                                    v-model="selected" 
                                    :option="option">
                                    {{option}}
                                </ace-input>
                            </div>
                        \`,
                        data: () => ({
                            selected: 'fadeincolor',
                            options: [
                                'fadeincolor',
                                'fadein'
                            ]
                        })
                    }
                `
            },
            {
                name: 'Error placeholder',
                desc: `
                    <p>
                        If the target image does not exist or fails to load, an error placeholder image will be displayed instead.
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
                        Set <doc-param name="loading" value="lazy"></doc-param> to lazy-load the image. Lazy-loaded images are not loaded until they intersect with the viewport; i.e. until user scrolls them into view.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <p>
                                There's an image with lazy-loading at the bottom of this example. Once you scroll down, the image will be loaded and an alert will be shown on top of the screen.
                            </p>
            
                            <p style="height: 60vh">
                                So, keep scrolling...
                            </p>
            
                            <p>
                                ...and here it is:
                            </p>
            
                            <ace-image
                                enter-effect="fadeincolors"
                                src="assets/img/nature.jpg"
                                loading="lazy"
                                @load="onload($event)">
                            </ace-image> 
                        \`,
                        methods: {
                            onload(event) {
                                console.log('onload', event);
                                aceAlertService.open({
                                    type: 'info', 
                                    header: 'Lazy-loading: image loaded!'
                                });
                            }
                        }
                    }
                `
            }
        ]
    })
};