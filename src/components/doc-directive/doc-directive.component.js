export const DocDirective = {
    props: {
        name: String,
        arg: {type: String, default: 'arg'},
        value: {type: String, default: 'value'}
    },
    template: `
        <span class="doc-directive">
            <slot>{{name}}:{{arg}}="<doc-value>{{value}}</doc-value>"</slot>
        </span>
    `
};