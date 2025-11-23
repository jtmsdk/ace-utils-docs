const meta = {
    id: 'ace-parallax.component',
    name: 'ace-parallax',
    title: 'Parallax',
    desc: `Renders a parallax-scrolling layer container.`
}

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <doc-desc>
                <p>
                    Use <doc-tag>ace-parallax</doc-tag> to render a parallax-scrolling container. Uses CSS 3D transforms and animation frames for performant effect. 
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
    mounted() {
        this.$el.parentElement.style.paddingBottom = '60vh';
    },
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
                                    <doc-value>0</doc-value> = no parallax effect at all; layer scrolls normally along the content.
                                </li>
                                <li>
                                    <doc-value>0.5</doc-value> = the layer moves at 50% of the scrolling speed, dragging behind other content.
                                </li>
                                <li>
                                    <doc-value>-0.5</doc-value> = the layer moves at 50% of the scrolling speed &mdash; to the opposite direction of scrolling.
                                </li>
                                <li>
                                    <doc-value>1</doc-value> = the layer moves at the same rate with scrolling, making it look like the layer is fixed scroll container. Similar in behavior as <code>background-attachment: fixed;</code> CSS rule.
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
        examples: [
            {
                desc: `
                    <p>
                        This example demonstrates parallax effect with different <doc-param>scrollfactors</doc-param>. The <doc-param>target</doc-param> of the component is bound to <doc-value>main</doc-value>, which is the scrolling container on this page. You can place any content onto the parallax layers, altough typically that would be images.
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