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

            <doc-desc>
                <p>
                    Use <doc-tag>ace-search</doc-tag> to render a search field.
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
            name: 'ace-search',
            type: 'component',
            params: [
                { 
                    name: 'value', type: 'string',
                    desc: `Search field text value.`
                },
                { 
                    name: 'loading', type: 'boolean',
                    desc: `If <doc-value>true</doc-value>, displays a load indicator.`
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
                    desc: `If <doc-value>true</doc-value>, search field is disabled.`
                }
            ],
            events: [
                {
                    name: 'search', value: 'string',
                    desc: `Emitted when user hits Enter key in the field. The field value is passed as the <doc-value>$event</doc-value>.`
                },
                {
                    name: 'clear',
                    desc: `Emitted when the search field value is cleared.`
                }
            ]
        },
        examples: [
            {
                name: 'Example',
                js: `
                    {
                        template: \`
                            <ace-search 
                                placeholder="Search..."
                                @search="onSearch"
                                @clear="onClear">
                            </ace-search>
                        \`,
                        methods: {
                            onSearch(e) {
                                console.log('Search', e);
                            },
                            onClear(e) {
                                console.log('Clear', e);
                            }
                        }
                    }   
                `
            },
            {
                name: 'Load indicator',
                js: ` 
                    {
                        template: \`
                            <ace-search
                                v-model="text"
                                :loading="text">
                            </ace-search>
                        \`,
                        data: () => ({
                            text: ''
                        })
                    }   
                `
            }
        ]
    })
};