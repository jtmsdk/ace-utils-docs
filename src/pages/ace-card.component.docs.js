import {AceCard} from '@ace/components';

const name = 'ace-card';
const meta = {
    id: 'ace-card.component',
    name: name,
    title: 'Card',
    desc: `Renders a multi-purpose layout container.`
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
                    Use <doc-tag>${name}</doc-tag> to render card containers. Card containers group related data and actions and are often clickable.
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
            params: [
                {
                    name: 'image', type: 'string',
                    desc: `Image <doc-value>src</doc-value> to show in card header.`
                }
            ],
            slots: [
                {
                    name: 'image',
                    desc: `The card image content.`
                },
                {
                    name: 'default',
                    desc: `The card body content.`
                }
            ]
        },
        examples: [
            {
                js: `
                    {
                        template: \`
                            <ace-card
                                image="some/image.jpg"
                                style="width: 300px">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore et 
                                    dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip 
                                    ex ea commodo consequat.
                                </p>
                            </ace-card>
                        \`
                    }
                `
            }       
        ]
    })
};