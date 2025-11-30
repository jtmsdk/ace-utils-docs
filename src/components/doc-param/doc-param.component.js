export const DocParam = {
    props: {
        name: String,
        value: String
    },
    template: `
        <span class="doc-param"><slot>{{name}}="<code val>{{value}}</code>"</slot></span>
    `    
};