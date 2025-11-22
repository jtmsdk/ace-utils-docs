import {h} from 'vue'

export const vStyle = {
    render() {
        return h('style', this.$slots.default)
    }
};