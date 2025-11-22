import searchIcon from '@ace.icons/search.svg?inline';
import dotsIcon from '@ace.icons/dots.svg?inline';
import {AceInputgroup} from '@ace/components';

const name = 'ace-inputgroup';
const meta = {
    id: 'ace-inputgroup.component',
    name: name,
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
                    Use <doc-tag>${name}</doc-tag> to render a group of inputs or buttons, joined together with no space between.
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
            name: name,
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
                            <${name}>
                                <ace-input
                                    placeholder="Search">
                                </ace-input>
                                <ace-button
                                    icon="${searchIcon}">
                                </ace-button>
                                <ace-button
                                    icon="${dotsIcon}">
                                </ace-button>
                            </${name}>
                        \`
                    }
                    
                `
            }
        ]
    })
};