import {AceFocustrap} from '@ace/directives';

const name = 'v-ace-focustrap';
const meta = {
    id: 'ace-focustrap.directive',
    name: name,
    title: 'Focustrap',
    desc: `Prevents tab-navigation focus from leaving the target element.`
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
                    Use <doc-directive>${name}</doc-directive> directive to trap tab-navigation focus inside the target container. I.e. prevents focus from leaving the element when navigating with tab key.
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
                desc: `
                    <p>
                        Apply focustrap to any container. Once applied, user cannot navigate out of the element using tab. Try hitting tab-key repeatedly in the fields below.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-form 
                                v-ace-focustrap>
                                <ace-input
                                    label="Name">
                                </ace-input>
                                <ace-input
                                    label="Address">
                                </ace-input>
                                <template v-slot:footer>
                                    <ace-button
                                        primary>
                                        Submit
                                    </ace-button>
                                </template>
                            </ace-form>
                        \`
                    }
                `
            }
        ]
    })
};