const meta = {
    id: 'ace-popper.component',
    name: 'ace-popper',
    title: 'Popper',
    desc: `Renders a popup that can be positioned relative to other elements or coordinates.`
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
                    Use <doc-tag>ace-popper</doc-tag> to render non-blocking popup content, such as tooltips and popovers. Allows positioning the popups relative to other elements or viewport coordinates.
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
            name: 'ace-popper',
            type: 'component',
            params: [
                {
                    name: 'appendTo', type: 'HTMLElement', default: 'document.body',
                    desc: `Target container into which this popper is appended when mounted.`
                },
                {
                    name: 'relativeTo', type: 'HTMLElement, string', default: '"xy"',
                    desc: `Relative to what popper is positioned. If <doc-value>"xy"</doc-value>, popper is positioned using <doc-param>clientX</doc-param> and <doc-param>clientY</doc-param> params. If an html element, popper is positioned relative to the element. If <doc-value>falsy</doc-value>, auto-positioning is disabled, and you need to position the popper manually.`
                },
                {
                    name: 'placement', type: 'string', default: 'bottom-start',
                    desc: `Placement of the popper relative to the target element or coordinates. Available options:
                        <doc-value>top</doc-value>,
                        <doc-value>top-start</doc-value>,
                        <doc-value>top-end</doc-value>,
                        <doc-value>bottom</doc-value>,
                        <doc-value>bottom-start</doc-value>,
                        <doc-value>bottom-end</doc-value>,
                        <doc-value>left</doc-value>,
                        <doc-value>left-start</doc-value>,
                        <doc-value>left-end</doc-value>,
                        <doc-value>right</doc-value>,
                        <doc-value>right-start</doc-value>,
                        <doc-value>right-end</doc-value>.
                    `
                },
                {
                    name: 'clientX', type: 'number', default: 0,
                    desc: `X-coordinate of viewport relative to which this popper is positioned.`
                },
                {
                    name: 'clientY', type: 'number', default: 0,
                    desc: `Y-coordinate of viewport relative to which this popper is positioned.`
                },
                {
                    name: 'distance', type: 'number', default: 0,
                    desc: `Distance in pixels between popper and target element or coordinate relative to which the popper is positioned.`
                },
                {
                    name: 'offset', type: 'number', default: 0,
                    desc: `Offset from the calculated position where the popper is mounted.`
                },
                {
                    name: 'backdrop', type: 'boolean', default: false,
                    desc: `If <doc-value>true</doc-value>, popper is rendered with blocking backdrop. Clicking the backdrop emits <doc-event>close</doc-event> event.`
                },
                {
                    name: 'background', type: 'string',
                    desc: `Popper backdrop or background color.`
                },
                {
                    name: 'component', type: 'object',
                    desc: `The popper content as component. Can also be provided using <doc-param>default</doc-param> slot.`
                }
            ],
            slots: [
                {
                    name: 'default',
                    desc: `The popper body content.`
                }
            ],
            events: [
                {
                    name: 'close',
                    desc: `Emitted when user clicks the popper backdrop.`
                }
            ]
        },
        examples: [
            {
                name: 'Relative to element',
                desc: `
                    <p>
                        Use <doc-param>relativeTo</doc-param> param to position the popper relative to another element. Provide <doc-param>placement</doc-param> to define onto which side the popper should be placed. This example demonstrates different placement options.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <div id="myContainer1">
                                <div class="box"
                                    v-for="placement in placements"
                                    @mouseenter="open($event, placement)"
                                    @mouseout="close()">
                                    {{placement}}
                                </div>
                            </div>

                            <ace-popper
                                v-if="isOpen"
                                :relativeTo="relativeTo"
                                :placement="placement">
                                <ace-msg type="info">
                                    Placement: "{{placement}}"
                                </ace-msg>
                            </ace-popper>
                        \`,
                        data:() => ({
                            isOpen: false,
                            placement: 'top-start',
                            placements: [
                                'top-start',
                                'top',
                                'top-end',
                                'right-start',
                                'right',
                                'right-end',
                                'bottom-end',
                                'bottom',
                                'bottom-start',
                                'left-end',
                                'left',
                                'left-start'
                            ]
                        }),
                        methods: {
                            open(event, placement) {
                                this.placement = placement;
                                this.relativeTo = event.target;
                                this.isOpen = true;
                            },
                            close() {
                                this.isOpen = false;
                            }
                        }
                    }
                `,
                css: `
                    #myContainer1 {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 0.5rem;
                    }
                    .box {
                        margin: auto;
                        border: 1px solid lightblue;
                        border-radius: 8px;
                        padding: 5px;
                    }
                `
            },
            {
                name: 'Relative to coordinates',
                desc: `
                    <p>
                        Use <doc-param>clientX</doc-param> and <doc-param>clientY</doc-param> params to position the popper relative to coordinates. Notice that coordinate positioning only takes effect if <doc-param>relativeTo</doc-param> param is null/undefined.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <div id="myContainer2"
                                @mouseover="isOpen=true"
                                @mouseout="isOpen=false"
                                @mousemove="handle($event)">
                                <ace-popper
                                    v-if="isOpen"
                                    placement="top-start"
                                    :distance="10"
                                    :offset="10"
                                    :clientX="clientX"
                                    :clientY="clientY">
                                    <ace-msg
                                        type="info">
                                        x: {{clientX}} 
                                        y: {{clientY}}
                                    </ace-msg>
                                </ace-popper>
                            </div>
                        \`,
                        data: () => ({
                            isOpen: false,
                            clientX: 0,
                            clientY: 0
                        }),
                        methods: {
                            handle(e) {
                                this.clientX = e.clientX;
                                this.clientY = e.clientY;
                            }
                        }
                    }
                `,
                css: `
                    #myContainer2 {
                        border-radius: 10px;
                        border: 1px solid lightgray;
                        min-height: 300px;
                    }
                `
            }
        ]
    })
};