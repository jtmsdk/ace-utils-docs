export const DocParam = {
    props: {
        name: String,
        value: String
    },
    template: `
        <span class="doc-param"><slot>{{name}}="<doc-value>{{value}}</doc-value>"</slot></span>
    `    
};