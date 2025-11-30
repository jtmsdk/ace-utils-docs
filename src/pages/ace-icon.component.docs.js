import attachIcon from '@ace.icons/attach.svg?no-inline';
import commentInverseIcon from '@ace.icons/comment-inverse.svg?no-inline';
import cameraInverseIcon from '@ace.icons/camera-inverse.svg?no-inline';
import checkmarkRoundIcon from '@ace.icons/checkmark-round.svg?no-inline';
import youtubeIcon from '@ace.icons/youtube.svg?no-inline';

const meta = {
    id: 'ace-icon.component',
    name: 'ace-icon',
    title: 'Icon',
    desc: `Renders an inline SVG icon.`
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
                    Use <code tag>${name}</code> to render an inline SVG icon by providing the target SVG file URL or embedded data URI.
                </p>

                <p>
                    Recommended approach is to load the icons during build, embedding them as inline data URIs in the compiled bundle. This ensures that the icons will be found in the build output, and that they render immediately, without needing to make additional network requests. This does, however, grow the bundle size.
                </p>

                <ace-codeblock
                    :code="usage.bundler">
                </ace-codeblock>

                <p>
                    Alternatively, icons can be loaded during runtime by providing the target SVG file URL. Successfully loaded icons are automatically cached, meaning consecutive instances render instantly.
                </p>

                <ace-codeblock
                    :code="usage.runtime">
                </ace-codeblock>

                <p>
                    Runtime icons can also be preloaded into cache. Once preloaded, icons will render instantly when mounted, even if the network connection would get lost.
                </p>

                <ace-codeblock
                    :code="usage.preload">
                </ace-codeblock>


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
        usage: {
            bundler: `
                import myIcon from './my/assets/my-icon.svg?inline';

                export const MyComponent = {
                    template: \`
                        <ace-icon src="\${myIcon}"></ace-icon>
                    \`
                }
            `,
            runtime: `
                export const MyComponent = {
                    template: \`
                        <ace-icon src="my/assets/my-icon.svg"></ace-icon>
                    \`
                }
            `,
            preload: `
                import {loadIcons} from '@ace/services/ace-icon.service';

                loadIcons([
                    'my/assets/my-icon-1.svg', 
                    'my/assets/my-icon-2.svg'
                ]);

                export const MyComponent = {
                    template: \`
                        <!-- This will now render from preloaded cache -->
                        <ace-icon src="my/assets/my-icon-1.svg"></ace-icon>
                    \`
                }
            `
        },
        api: {
            name: 'ace-icon',
            type: 'component',
            params: [
                {
                    name: 'src', type: 'string',
                    desc: `Target SVG file URL or embedded data URI.`
                },
                { 
                    name: 'size', type: 'string', default: '1em',
                    desc: `Icon size as CSS length value.` 
                },
                { 
                    name: 'color', type: 'string', default: 'currentcolor', 
                    desc: `Icon color as any CSS color value.` 
                }
            ]
        },
        examples: [
            {
                name: 'Example',
                js: `
                    {
                        template: \`
                            <ace-icon src="${attachIcon}"></ace-icon>
                            <ace-icon src="${commentInverseIcon}"></ace-icon>
                            <ace-icon src="${cameraInverseIcon}"></ace-icon>
                        \`
                    }
                    
                `
            },
            {
                name: 'Icon size',
                js: `
                    {
                        template: \`
                            <ace-icon 
                                src="${checkmarkRoundIcon}" size="20">
                            </ace-icon>
                            <ace-icon 
                                src="${checkmarkRoundIcon}" size="2rem">
                            </ace-icon>
                            <ace-icon 
                                src="${checkmarkRoundIcon}" size="40px">
                            </ace-icon>
                        \`
                    }
                    
                `
            },
            {
                name: 'Icon color',
                js: `
                    {
                        template: \`
                            <ace-icon 
                                src="${youtubeIcon}" size="34px" color="#ffa500">
                            </ace-icon>
                            <ace-icon 
                                src="${youtubeIcon}" size="34px" color="red">
                            </ace-icon>
                            <ace-icon 
                                src="${youtubeIcon}" size="34px" color="rgb(46, 184, 46)">
                            </ace-icon>
                        \`
                    }
                    
                `
            }
        ]
    })
}