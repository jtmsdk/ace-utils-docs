export const DocExamples = {
    props: ['examples'],
    template: `
        <div class="doc-examples">
            <h2 class="item-header">Examples</h2>
            <doc-example v-for="example in examples" 
                :key="example.name" 
                :example="example">
            </doc-example>
        </div>
    `
};