import chevronRight from '@ace.icons/chevron-right.svg';
import {slideToggle} from '@ace/services/ace-animation.service';

export const DocExpander = {
    template: `
        <div class="doc-expander" @click="onclick()">
            <ace-icon src="${chevronRight}"></com-icon>
            <slot></slot>
        </div>
    `,
    data: () => ({
        open: false
    }),
    methods: {
        onclick() {
            this.$el.classList.toggle('open');
            slideToggle(this.$el.nextElementSibling, 150);
        }
    }
};