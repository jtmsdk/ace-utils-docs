const meta = {
    id: 'ace-popover.component',
    name: 'ace-popover',
    title: 'Popover',
    desc: `Renders a popover container positioned relative to a target element.`
};
export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <p>
                Use <code tag>ace-popover</code> to render a popover element that can be positioned relative to another target element.
            </p>

            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import popover and register it globally or locally. Place in template and toggle visible using <code>v-if</code>. Provide element relative to which popover is positioned using <code param>relativeTo</code> param.
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
            name: 'ace-popover',
            type: 'component',
            params: [
                {
                    name: 'relativeTo', type: 'HTMLElement, string', default: null,
                    desc: `Target element relative to which the popover is positioned, either as CSS selector or HTMLElement. If <code val>falsy</code>, auto-positioning is disabled, and popover appears in the middle of the viewport.`
                },
                {
                    name: 'placement', type: 'string', default: 'bottom-start',
                    desc: `Placement of the popover relative to the target element. Options:
                        <code val>top</code>,
                        <code val>top-start</code>,
                        <code val>top-end</code>,
                        <code val>bottom</code>,
                        <code val>bottom-start</code>,
                        <code val>bottom-end</code>,
                        <code val>left</code>,
                        <code val>left-start</code>,
                        <code val>left-end</code>,
                        <code val>right</code>,
                        <code val>right-start</code>,
                        <code val>right-end</code>.
                    `
                },
                {
                    name: 'distance', type: 'number', default: 0,
                    desc: `Distance in pixels between popover and relative element.`
                },
                {
                    name: 'offset', type: 'number', default: 0,
                    desc: `Offset in number of pixels from the calculated position.`
                }
            ],
            slots: [
                {
                    name: 'default',
                    desc: `The popover body content.`
                }
            ],
            events: [
                {
                    name: 'close',
                    desc: `Emitted when user dismisses the popover.`
                }
            ]
        },
        code: {
            usage: `
                import {AcePopover} from 'ace-popover.component';
            
                const MyComponent = {
                    components: {AcePopover},
                    template: \`
                        <button
                            id="myButton"
                            @click="isOpen=!isOpen">
                            Toggle Popover
                        </button>
                        <ace-popover
                            v-if="isOpen"
                            relativeTo="#myButton"
                            @close="isOpen=false">
                            Hello there!
                        </ace-popover>
                    \`
                };
            `
        },
        examples: [
            {
                js: `
                    {
                        template: \`
                            <ace-button
                                id="myButton"
                                @click="isOpen=!isOpen">
                                Toggle Popover
                            </ace-button>
                            <ace-popover
                                v-if="isOpen"
                                @close="isOpen=false"
                                relativeTo="#myButton"
                                distance="5"
                                class="box">
                                Hello there!
                            </ace-popover>
                        \`,
                        data: () => ({
                            isOpen: false
                        })
                    }
                `,
                css: `
                    .box {
                        border: 1px solid lightgray;
                        border-radius: 10px;
                        background: white;
                        padding: 1em;
                    }
                `
            }
        ]
    }),
};
