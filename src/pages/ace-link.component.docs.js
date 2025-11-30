const meta = {
    id: 'ace-link.component',
    name: 'ace-link',
    title: 'Link',
    desc: `Renders a hyperlink or router-link.`
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
                    Use <code tag>ace-link</code> to render hyperlinks and router-links.
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
            name: 'ace-link',
            type: 'component',
            params: [
                {
                    name: 'to', type: 'string, object',
                    desc: `Target route, exactly as with <code tag>router-link</code> component. Use this param when the link is used for routing inside app.`
                },
                {
                    name: 'href', type: 'string',
                    desc: `Target href URL, exactly as with <code tag>a</code> element. Use this param when the link is used for external hyperlinks outside app.`
                },
                {
                    name: 'hash', type: 'string',
                    desc: `Target anchor (=element ID). Use this param when the link is used for scrolling to anchor on current page/view.`
                },
                {
                    name: 'disabled', type: 'boolean',
                    desc: `If <code val>true</code>, the link is rendered in disabled state and not clickable.`
                },
                {
                    name: 'download', type: 'boolean',
                    desc: `If <code val>true</code>, specifies that the target href resource will be downloaded once the link is clicked.`
                },
                {
                    name: 'target', type: 'string', default: '_self',
                    desc: `Specifies how to open the link. Default is <code val>_self</code> or the <code tag>base</code> target value. Available values:
                        <ul>
                            <li><code val>_blank</code>: Opens link in new window or tab.</li>
                            <li><code val>_self</code>: Opens link in same frame where it was clicked.</li>
                            <li><code val>_parent</code>: Opens link in parent frame.</li>
                            <li><code val>_top</code>: Opens link in full body of the window.</li>
                        </ul>
                    `
                },
                { 
                    name: 'tab', type: 'boolean', default: false,
                    desc: `If <code val>true</code>, link is opened in new tab. Shorthand for setting target="_blank".`
                }
            ],
            slots: [
                {
                    name: 'default',
                    desc: `The link text content.`
                }
            ]
        },
        examples: [
            {
                name: 'Router-links',
                desc: `
                    <p>
                        Provide <doc-param>to</doc-param> param in order to render a Vue <code tag>router-link</code>. Router-links are used for navigating inside current app views. Router-links take into account current hash mode and/or HTML5 history mode and route the application accordingly without reloading the page.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-link 
                                to="/pages/ace-button.component">
                                See ace-button.
                            </ace-link>    
                        \`
                    }
                `
            },
            {
                name: 'Hyper-links',
                desc: `
                    <p>
                        Provide <doc-param>href</doc-param> param to render a regular <code tag>a</code> hyperlink. Hyperlinks are used for navigating or loading resources outside of the current app or site.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-link tab
                                href="https://www.google.com">
                                https://www.google.com
                            </ace-link>
                        \`
                    }
                `
            },
            {
                name: 'Disabled',
                js: `
                    {
                        template: \`
                            <ace-link disabled
                                href="https://www.google.com">
                                https://www.google.com
                            </ace-link>
                        \`
                    }
                `
            }
        ]
    })
};