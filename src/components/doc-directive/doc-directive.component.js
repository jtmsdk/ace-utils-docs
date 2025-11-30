export const DocDirective = {
    props: {
        name: String,
        arg: {type: String, default: 'arg'},
        value: {type: String, default: 'value'}
    },
    template: `
        <span class="doc-directive">
            <slot>{{name}}:{{arg}}="<code val>{{value}}</code>"</slot>
        </span>
    `
};