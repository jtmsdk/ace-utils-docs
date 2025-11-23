import aceSpinnerService from 'ace-spinner.service';
window.aceSpinnerService = aceSpinnerService;

const meta = {
    id: 'ace-spinner.service',
    name: 'ace-spinner.service',
    title: 'Spinner service',
    desc: `Used for displaying spinners programmatically.`
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
                    Use <doc-service>ace-spinner.service</doc-service> for opening <doc-link id="ace-spinner.component">spinner</doc-link> instances programmatically. Spinners opened this way are mainly used for blocking parts of the UI or the whole UI while app is loading.
                </p>
            </doc-desc>
            
            <ace-codeblock 
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
            import service from 'ace-spinner.service';
            
            // Create and open a new spinner inside target
            // container using open() method.
            
            let spinnerHook = service.open({
                appendTo: document.getElementById('myTarget'),
                position: 'absolute'
            });

            // Close the spinner by calling close()
            // from the returned hook.

            spinnerHook.close();
        `,
        api: {
            name: 'ace-spinner.service',
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
                        By default, if no parameters are passed for <code>open()</code> call, a default fullscreen spinner is opened. This spinner blocks the entire application UI until closed.
                    </p>
                `,
                js: `
                    // import aceSpinnerService from 'ace-spinner.service';
                    
                    {
                        template: \`
                            <ace-button 
                                @click.stop.prevent="open()">
                                Open spinner
                            </ace-button>
                        \`,
                        methods: {
                            open(event) {
                                let spinner = aceSpinnerService.open();
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
                        Spinners can be opened into target containers. This allows you to block parts of the UI while the rest of the app can still be interacted with. If you do this, remember to close the spinner when the parent component is unmounted.
                    </p>
                `,
                js: `
                    // import aceSpinnerService from 'ace-spinner.service';
                    
                    {
                        template: \`
                            <ace-button 
                                @click="toggle()">
                                Toggle spinner
                            </ace-button>

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
                                    return;
                                }
                                this.spinner = aceSpinnerService.open({
                                    appendTo: document.getElementById('myTarget'),
                                    size: '80px'
                                });
                            }
                        },
                        beforeUnmount() {
                            this.spinner?.close();
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