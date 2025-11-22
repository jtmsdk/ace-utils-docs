export const DocValue = {
    props: {
        type: { type: String, default: 'any' }
    },
    template: `<span class="doc-value" :type="type"><slot></slot></span>`,
};