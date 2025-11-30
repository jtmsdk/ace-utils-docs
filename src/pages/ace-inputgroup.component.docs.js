import searchIcon from '@ace.icons/search.svg?no-inline';
import dotsIcon from '@ace.icons/dots.svg?no-inline';

const meta = {
    id: 'ace-inputgroup.component',
    name: 'ace-inputgroup',
    title: 'Input group',
    desc: `Renders a group of inputs or buttons, joined together with no space between.`
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
                    Use <code tag>ace-inputgroup</code> to render a group of inputs or buttons, joined together with no space between.
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
            name: 'ace-inputgroup',
            type: 'component',
            slots: [
                {
                    name: 'default',
                    desc: `The group content components.`
                }
            ]
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