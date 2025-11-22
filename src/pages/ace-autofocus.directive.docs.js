import {AceAutofocus} from '@ace/directives';
import {AceInput} from '@ace/components';

const name = 'v-ace-autofocus';
const meta = {
    id: 'v-ace-autofocus.directive',
    name: name,
    title: 'Autofocus',
    desc: `Sets focus to target element or the first focusable element inside it.`
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
                    Use <doc-directive>${name}</doc-directive> directive to set focus into the target element or &mdash; if it cannot be focused &mdash; to the first focusable element inside it. The directive has no parameters.
                </p>
            </doc-desc>

            <doc-examples
                :examples="examples">
            </doc-examples>
        </doc-page>
    `,
    data: () => ({
        meta,
        examples: [
            {
                js: `
                    {
                        template: \`
                            <div v-ace-autofocus>
                                <ace-input></ace-input>
                            </div>
                        \`
                    }
                `
            }
        ]
    })
};