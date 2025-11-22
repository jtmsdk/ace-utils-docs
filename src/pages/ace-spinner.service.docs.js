
import {ComButton} from 'com-button.component';
import comSpinnerService from 'com-spinner.service';
window.comSpinnerService = comSpinnerService;

const name = 'comSpinnerService';

export default {
    template: `
        <doc-meta
            :meta="meta">
        </doc-meta>
        
        <doc-desc>
            <p>
                Use <doc-service>${name}</doc-service> for opening <doc-link id="com-spinner.component">spinner</doc-link> instances programmatically. Spinners opened this way are mainly used for blocking parts of the UI or the whole UI while app is loading.
            </p>
        </doc-desc>
        
        <com-codeblock 
            :code="usage">
        </com-codeblock>

        <doc-api
            :api="api">
        </doc-api>

        <doc-examples
            :examples="examples">
        </doc-examples>
    `,
    data: () => ({
        meta: {
            id: name,
            name: name,
            title: 'Spinner service',
            desc: `Used for displaying spinners programmatically.`
        },
        usage: `
            import comSpinnerService from 'com-spinner.service';
            
            // Create and open a new spinner inside target
            // container using open() method.
            
            let spinnerHook = comSpinnerService.open({
                appendTo: document.getElementById('myTarget'),
                position: 'absolute'
            });

            // Close the spinner by calling close()
            // from the returned hook.

            spinnerHook.close();
        `,
        api: {
            name: name,
            type: 'service',
            functions: [
                {
                    name: 'open(options)',
                    desc: `
                        <p>
                            Opens a spinner with given options. If no options are provided, opens a default fullscreen spinner that blocks user interaction for the whole app.
                        </p>
                    `,
                    params: [
                        {
                            name: 'id', type: 'string',
                            desc: `Optional ID for the opened spinner instance. If not provided, unique ID will be generated.`
                        },
                        {
                            name: 'appendTo', type: 'HTMLElement', default: 'default',
                            desc: `Target element into which the spinner is appended. By default a toolkit specific container.`
                        },
                        {
                            name: 'position', type: 'string', default: 'fixed',
                            desc: `CSS position for the opened spinner.`
                        },
                        {
                            name: 'background', type: 'string', default: 'transparent',
                            desc: `CSS background value for spinner background.`
                        },
                        {
                            name: 'size', type: 'number, string', default: '120px',
                            desc: `Spinner size as number of pixels or CSS length value.`
                        }
                    ]
                }, 
                {
                    name: 'close(id)',
                    desc: `
                        <p>
                            Closes spinner with given ID. If no ID is provided, closes the default fullscreen spinner. If no such spinner exists, does nothing.
                        </p>
                    `,
                    params: [
                        {
                            name: 'id', type: 'string',
                            desc: `Target spinner ID.`
                        }
                    ]
                }, 
                {
                    name: 'closeAll()',
                    desc: `
                        <p>
                            Closes all spinners opened with this service. If no spinners are open, does nothing.
                        </p>
                    `
                }
            ]    
        },
        examples: [
            {
                name: 'Default use',
                desc: `
                    <p>
                        By default, if no parameters are passed for <code>open()</code> method, a default fullscreen spinner is opened. This spinner blocks the entire application UI until closed. Fullscreen spinner should be used when application is loading data or current view and must not be interrupted.
                    </p>
                `,
                components: {
                    ComButton
                },
                js: `
                    // import comSpinnerService from 'com-spinner.service';
                    
                    {
                        template: \`
                            <com-button 
                                @click.stop.prevent="open()"
                                icon="plus-round-inverse">
                                Open spinner
                            </com-button>
                        \`,
                        methods: {
                            open(event) {
                                let spinner = comSpinnerService.open();
                                setTimeout(() => window.onclick = () => {
                                    spinner.close();
                                });
                            }
                        }
                    }
                `
            },
            {
                name: 'Opening in container',
                desc: `
                    <p>
                        Spinners can also be opened inside specific target containers. This allows you to block parts of the UI while the rest of the app can still be interacted with.
                    </p>
                `,
                components: {
                    ComButton
                },
                js: `
                    // import comSpinnerService from 'com-spinner.service';
                    
                    {
                        template: \`
                            <com-button 
                                @click="toggle()"
                                icon="plus-round-inverse">
                                Toggle spinner
                            </com-button>

                            <div id="myTarget"></div>
                        \`,
                        data: () => ({
                            spinner: null
                        }),
                        methods: {
                            toggle() {
                                if (this.spinner) {
                                    this.spinner.close();
                                    this.spinner = null;
                                } else {
                                    this.spinner = comSpinnerService.open({
                                        appendTo: document.getElementById('myTarget'),
                                        position: 'absolute',
                                        size: '80px'
                                    });
                                }
                            }
                        }
                    }
                `,
                css: `
                    #myTarget {
                        position: relative;
                        border: 1px solid lightgray;
                        min-height: 200px;
                        margin-top: 1rem;
                    }
                `
            },
        ]
    })
};