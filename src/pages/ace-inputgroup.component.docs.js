import searchIcon from '@ace.icons/search.svg?no-inline';
import dotsIcon from '@ace.icons/dots.svg?no-inline';

const meta = {
    id: 'ace-inputgroup.component',
    name: 'ace-inputgroup',
    title: 'Input group',
    desc: `Renders a container that groups inputs and buttons inside together.`
};

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <p>
                Use <code tag>ace-inputgroup</code> to render a container that groups inputs and buttons inside together.
            </p>

            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import input group and register it globally or locally. Place in template with buttons and inputs inside.
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
            name: 'ace-inputgroup',
            type: 'component',
            slots: [
                {
                    name: 'default',
                    desc: `The group content components.`
                }
            ]
        },
        code: {
            usage: `
                import {AceInputgroup} from 'ace-inputgroup.component';

                const MyComponent = {
                    components: {
                        AceInputgroup
                    },
                    template: \`
                        <ace-inputgroup>
                            <!-- Inputs and button go here -->
                        </ace-inputgroup>
                    \`
                };
            `
        },
        examples: [
            {
                js: `
                    {
                        template: \`
                            <ace-inputgroup>
                                <ace-input
                                    placeholder="Search">
                                </ace-input>
                                <ace-button
                                    icon="${searchIcon}">
                                </ace-button>
                                <ace-button
                                    icon="${dotsIcon}">
                                </ace-button>
                            </ace-inputgroup>
                        \`
                    }
                    
                `
            }
        ]
    })
};