const meta = {
    id: 'ace-search.component',
    name: 'ace-search',
    title: 'Search',
    desc: `Renders a search field.`
};

export default {
    meta,
    template: `
        <doc-page>
            <doc-meta
                :meta="meta">
            </doc-meta>

            <p>
                Use <code tag>ace-search</code> to render a search field.
            </p>

            <doc-api
                :api="api">
            </doc-api>

            <h2>Usage</h2>

            <p>
                Import the component and register it globally or locally. Place in template and react to value changes or <code event>search</code> event.
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
            name: 'ace-search',
            type: 'component',
            params: [
                { 
                    name: 'value', type: 'string',
                    desc: `Search field text value.`
                },
                { 
                    name: 'loading', type: 'boolean',
                    desc: `If <code val>true</code>, displays a load indicator.`
                },
                {
                    name: 'placeholder', type: 'string',
                    desc: `Placeholder text shown in search field.`
                },
                {
                    name: 'debounce', type: 'number',
                    desc: `If provided, component will debounce model value update with given number of milliseconds.`
                },
                {
                    name: 'disabled', type: 'boolean', default: false,
                    desc: `If <code val>true</code>, search field is disabled.`
                }
            ],
            events: [
                {
                    name: 'search', value: 'string',
                    desc: `Emitted when user hits Enter key in the field. The field value is passed as the <code val>$event</code>.`
                },
                {
                    name: 'clear',
                    desc: `Emitted when the search field value is cleared.`
                }
            ]
        },
        code: {
            usage: `
                import {AceSearch} from 'ace-search.component';

                const MyComponent = {
                    components: {
                        AceSearch
                    },
                    template: \`
                        <ace-search
                            v-model="value">
                        </ace-search>
                    \`
                };
            `
        },
        examples: [
            {
                name: 'Example',
                desc: `
                    <p>
                        React to value changes or <code event>search</code> and <code event>clear</code> events.
                    </p>
                `,
                js: `
                    {
                        data: () => ({
                            text: ''
                        }),
                        template: \`
                            <ace-search 
                                v-model="text"
                                :loading="text"
                                placeholder="Search..."
                                @search="handle('search', $event)"
                                @clear="handle('clear', $event)">
                            </ace-search>
                        \`,
                        methods: {
                            handle() {
                                console.log(...arguments);
                            }
                        }
                    }   
                `
            },
            {
                name: 'Debouncing value',
                desc: `
                    <p>
                        Use <code param>debounce</code> to delay model updates until user stops typing for given milliseconds.
                    </p>
                `,
                js: `
                    {
                        data: () => ({
                            text: ''
                        }),
                        template: \`
                            <ace-search 
                                v-model="text"
                                :debounce="500">
                            </ace-search>
                            
                            <p>Search: {{text}}</p>
                        \`
                    }   
                `
            },
            {
                name: 'Load indicator',
                desc: `
                    <p>
                        Use <code param>loading</code> to show a loading indicator in the search field.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <ace-search 
                                :loading="true">
                            </ace-search>
                        \`
                    }   
                `
            }
        ]
    })
};