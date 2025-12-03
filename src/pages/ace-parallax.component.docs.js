const meta = {
    id: 'ace-parallax.component',
    name: 'ace-parallax',
    title: 'Parallax',
    desc: `Renders a parallax-scrolling layer container.`
}

export default {
    meta,
    template: `
        <doc-page
            style="padding-bottom: 60vh">

            <doc-meta
                :meta="meta">
            </doc-meta>

            <p>
                Use <code tag>ace-parallax</code> to render a parallax-scrolling container. Uses CSS 3D transforms and animation frames for performant effect. 
            </p>

            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import parallax and parallax-layer components and register them globally or locally. Place parallax-layers inside the parallax container, and use layer <code param>scrollfactor</code> params to tweak the effect.
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
        api: [
            {
                name: 'ace-parallax',
                type: 'component',
                params: [
                    {
                        name: 'target', type: 'string, element', default: 'document', 
                        desc: `The target container (element or CSS selector) that is being scrolled for the parallax effect. By default the target is the document itself.`
                    }
                ],
                slots: [
                    {
                        name: 'default',
                        desc: `The component content; parallax layers.`
                    }
                ]
            },
            {
                name: 'ace-parallax-layer',
                type: 'component',
                params: [
                    { 
                        name: 'scrollfactor', type: 'number', default: 0.25, 
                        desc: `
                            <p>
                                Percentage determining the parallax effect strength, i.e. how much slower or faster the layer moves relative to container scrolling.
                            </P>
                            <ul>
                                <li>
                                    <code val>0</code> = no parallax effect at all; layer scrolls normally along the content.
                                </li>
                                <li>
                                    <code val>0.5</code> = the layer moves at 50% of the scrolling speed, dragging behind other content.
                                </li>
                                <li>
                                    <code val>-0.5</code> = the layer moves at 50% of the scrolling speed &mdash; to the opposite direction of scrolling.
                                </li>
                                <li>
                                    <code val>1</code> = the layer moves at the same rate with scrolling, making it look like the layer is fixed scroll container. Similar in behavior as <code>background-attachment: fixed</code> CSS rule.
                                </li>
                            </ul>
                        `
                    }
                ],
                slots: [
                    {
                        name: 'default',
                        desc: `The content of the layer.`
                    }
                ]
            }
        ],
        code: {
            usage: `
                import * as parallax from 'ace-parallax.component';

                const MyComponent = {
                    components: {
                        ...parallax
                    },
                    template: \`
                        <ace-parallax 
                            target="#scrolling-container"
                            style="height: 400px">
                            <ace-parallax-layer>
                                <!-- layer content here -->
                            </ace-parallax-layer>
                        </ace-parallax>
                    \`
                };
            `
        },
        examples: [
            {
                desc: `
                    <p>
                        This example demonstrates parallax effect with different <code param>scrollfactors</code>. The <code param>target</code> of the component is bound to <code val>main</code>, which is the scrolling container on this page. You can place any content onto the parallax layers, altough typically that would be images.
                    </p>
                    <p>
                        Notice that the parallax container is <b>500px high</b>, and the image inside is intentionally made <b>higher</b>. This is necessary for the image to fill the entire parallax container view even when it has been moved (=translated on Y-axis) up or down from its original position.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-parallax 
                                target="main"
                                style="height: 500px">
            
                                <ace-parallax-layer>
                                    <ace-image
                                        src="assets/img/porvoo.jpg"
                                        style="
                                            height: 150%;    
                                            max-width: none;
                                            max-height: none;
                                        ">
                                    </ace-image>
                                </ace-parallax-layer> 
            
                                <ace-parallax-layer 
                                    :scrollfactor="0.5">
                                    <h1 style="color: white">
                                        scrollfactor = 0.5
                                    </h1>
                                </ace-parallax-layer>
            
                                <ace-parallax-layer 
                                    :scrollfactor="0">
                                    <h1 style="color: white">
                                        scrollfactor = 0
                                    </h1>
                                </ace-parallax-layer>
            
                                <ace-parallax-layer 
                                    :scrollfactor="1">
                                    <h1 style="color: white">
                                        scrollfactor = 1
                                    </h1>
                                </ace-parallax-layer>
            
                                <ace-parallax-layer 
                                    :scrollfactor="-0.5">
                                    <h1 style="color: white">
                                        scrollfactor = -0.5
                                    </h1>
                                </ace-parallax-layer>
            
                            </ace-parallax>
                        \`
                    }
                `
            }
        ]
    })
};