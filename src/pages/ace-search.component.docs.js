import {AceSearch} from '@ace/components';

const name = 'ace-search';
const meta = {
    id: 'ace-search.component',
    name: name,
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
                    Use <doc-tag>${name}</doc-tag> to render a search field.
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
                name: 'Filtering items',
                desc: `
                    <p>
                        When filtering already loaded items, bind the search value with <doc-directive>v-model</doc-directive> and filter the resulting items with a computed property.
                    </p>
                `,
                js: `
                    {
                        template: \`
                            <${name} 
                                v-model="search"
                                placeholder="Filter names">
                            </${name}>
            
                            <br>
            
                            <ace-msg
                                type="info" icon=""
                                v-for="name in filteredNames"
                                style="margin: 2px">
                                {{name}}
                            </ace-msg>
                        \`,
                        data: () => ({
                            search: '',
                            names: [
                                'Anna', 'Annica', 'Andrew',
                                'James', 'Jane', 'Janelle',
                                'John', 'Johanna', 'Johannes',
                                'Jennifer', 'Jeremy', 'Jeremiah',
                                'Michael', 'Miranda',
                                'Patrick', 'Patricia',
                                'Mary', 'Mark', 'Marianna'
                            ]
                        }),
                        computed: {
                            filteredNames() {
                                return this.names
                                    .filter(name => name.toLowerCase()
                                        .includes(this.search.toLowerCase()));
                            }
                        }
                    }   
                `
            },
            {
                name: 'Searching items',
                desc: `
                    <p>
                        When searching with async calls, it is recommended to use value debouncing or explicit search trigger with Enter key. While async call is loading, you can display a load indicator in the search field.
                    </p>
                `,
                js: ` 
                    {
                        template: \`
                            <${name}
                                @search="onsearch"
                                :loading="isLoading"
                                placeholder="Search names">
                            </${name}>

                            <br>
            
                            <ace-msg
                                type="info" icon=""
                                v-for="item in results"
                                style="margin: 2px">
                                {{item}}
                            </ace-msg>
                        \`,
                        data: () => ({
                            isLoading: false,
                            results: []
                        }),
                        methods: {
                            onsearch(txt) {
                                this.isLoading = true;
                                this.mockFetch(txt)
                                    .then(res => this.results = res)
                                    .finally(() => this.isLoading = false);
                            },
                            mockFetch(txt = '') {
                                let names = [
                                    'Anna', 'Annica', 'Andrew',
                                    'James', 'Jane', 'Janelle',
                                    'John', 'Johanna', 'Johannes',
                                    'Jennifer', 'Jeremy', 'Jeremiah',
                                    'Michael', 'Miranda',
                                    'Patrick', 'Patricia',
                                    'Mary', 'Mark', 'Marianna'
                                ];
                                return new Promise(res => {
                                    let result = names
                                        .filter(name => name.toLowerCase()
                                        .includes(txt.toLowerCase()));

                                    setTimeout(() => res(result), 1000);
                                });
                            }
                        }
                    }   
                `
            }
        ]
    })
};