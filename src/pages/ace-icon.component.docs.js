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

            <p>
                Use <code tag>ace-icon</code> to render an inline SVG icon.
            </p>

            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import icon and register it globally or locally. Place in template and provide the 
                SVG icon <em>runtime</em> URL with <code param>src</code> param. While the icon is downloading, a placeholder is shown. Once the icon is downloaded, it will be cached so that subsequent renders are instant.
            </p>

            <ace-codeblock
                :code="usage.usage">
            </ace-codeblock>

            <p>
                If you're using a bundler (e.g. Vite), you can import icons directly in source code, which will automatically add the icon into the bundle, either as data URI (inline) or as a separate file in build output.
            </p>

            <ace-codeblock
                :code="usage.bundler">
            </ace-codeblock>

            <p>
                Runtime icons can also be preloaded into cache. If preloaded, icons will render instantly when they are mounted in DOM.
            </p>

            <ace-codeblock
                :code="usage.preload">
            </ace-codeblock>

            <doc-examples
                :examples="examples">
            </doc-examples>

        </doc-page>
    `,
    data: () => ({
        meta,
        usage: {
            usage: `
                import {AceIcon} from 'ace-icon.component';

                const MyComponent = {
                    components: {
                        AceIcon 
                    },
                    template: \`
                        <ace-icon 
                            src="my/assets/my-icon.svg">
                        </ace-icon>
                    \`
                };
            `,
            bundler: `
                // Import icon as data URI (inline)
                import myIcon1 from './my/assets/my-icon1.svg?inline';
                // Import icon URL and add the file into bundle
                import myIcon2 from './my/assets/my-icon2.svg?no-inline';

                const MyComponent = {
                    components: {
                        AceIcon 
                    },
                    template: \`
                        <ace-icon 
                            src="\${myIcon1}">
                        </ace-icon>
                        <ace-icon 
                            src="\${myIcon2}">
                        </ace-icon>
                    \`
                };
            `,
            preload: `
                import {AceIcon} from 'ace-icon.component';
                import {loadIcons} from 'ace-icon.service';

                // Preload icons into cache
                loadIcons([
                    'my/assets/my-icon-1.svg', 
                    'my/assets/my-icon-2.svg'
                ]);

                const MyComponent = {
                    components: {
                        AceIcon 
                    },
                    template: \`
                        <!-- Loads from cache -->
                        <ace-icon 
                            src="my/assets/my-icon-1.svg">
                        </ace-icon>
                    \`
                };
            `
        },
        api: {
            name: 'ace-icon',
            type: 'component',
            params: [
                {
                    name: 'src', type: 'string',
                    desc: `Target SVG file URL or data URI.`
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
                            <ace-icon 
                                src="${attachIcon}">
                            </ace-icon>
                            <ace-icon 
                                src="${commentInverseIcon}">
                            </ace-icon>
                            <ace-icon 
                                src="${cameraInverseIcon}">
                            </ace-icon>
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
                                src="${youtubeIcon}" 
                                size="34px" 
                                color="red">
                            </ace-icon>
                            <ace-icon 
                                src="${youtubeIcon}" 
                                size="34px" 
                                color="green">
                            </ace-icon>
                            <ace-icon 
                                src="${youtubeIcon}" 
                                size="34px" 
                                color="orange">
                            </ace-icon>
                        \`
                    }
                    
                `
            }
        ]
    })
}