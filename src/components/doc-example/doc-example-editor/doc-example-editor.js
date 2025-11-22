import {trimTemplateString, debounce} from '@ace/services/ace-utils.service';

// TODO: lisää syntax highligh
// https://css-tricks.com/creating-an-editable-textarea-that-supports-syntax-highlighted-code/

const TAB_SIZE = 4;
const TAB_TXT = ' '.repeat(TAB_SIZE);

export const DocExampleEditor = {
    emits: ['update'],
    props: {
        text: String, 
        header: String
    },
    data() {
        return { 
            viewText: trimTemplateString(this.text)
        };
    },
    template: `
        <div class="doc-example-editor">
            <span class="header">{{header}}</span>
            <textarea ref="textarea" 
                :value="viewText" 
                @input="update($event)"
                @keydown="onkeydown($event)">
            </textarea>
        </div>
    `,
    computed: {
        textarea() {
            return this.$refs?.textarea;
        }
    },
    mounted() {
        this.resize();
    },
    methods: {
        resize() {
            this.textarea.style.height = 'auto';
            this.textarea.style.height = this.textarea.scrollHeight + 20 + 'px';    
        },
        update: debounce(function(event) {
            this.viewText = event?.target?.value;
            this.$emit('update', {
                value: this.viewText
            });
        }, 500),
        onkeydown(e) {
            if (e.key === 'Tab') { 
                e.preventDefault();
                e.stopPropagation();
                let target = e.target;
                let start = target.selectionStart;
                let end = target.selectionEnd;
                let value = this.textarea.value;
                this.textarea.value = value.substring(0, start) + TAB_TXT + value.substring(end);
                target.selectionStart = target.selectionEnd = start + TAB_SIZE;
            }
            this.resize();
        }
    }
};