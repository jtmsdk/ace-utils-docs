const meta = {
    id: 'colors',
    name: 'Colors',
    title: 'Colors',
    desc: 'Colors'
};

export default {
    meta,
	template: `
        <doc-page class="doc-page-colors">
            <doc-meta
                :meta="meta">
            </doc-meta>

            <doc-desc>
                <h2>
                    Base palette
                </h2>

                <div class="base-colors">
                    <div v-for="(color, name) in colors">
                        <color 
                            v-for="shade in shades"
                            :name="name"
                            :color="color"
                            :lig="shade">
                        </color>
                    </div>
                </div>

            </doc-desc>
        </doc-page>
    `,
    data: () => ({ 
        meta,
        colors: {
            gray:      { hue: 0,   sat: 0 },
            blue:      { hue: 204, sat: 100 },
            matblue:   { hue: 210, sat: 50 },
            cyan:      { hue: 180, sat: 80 },
            green:     { hue: 120, sat: 70 },
            matgreen:  { hue: 120, sat: 35 },
            orange:    { hue: 39,  sat: 100 },
            matorange: { hue: 25,  sat: 70 },
            red:       { hue: 0,   sat: 100 },
            matred:    { hue: 0,   sat: 40 }
        },
        shades: [
            5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,97,98,99
        ]
    }),
    components: {
        color: {
            props: {
                info: {type: Boolean, default: true},
                name: String,
                color: Object,
                lig: Number
            },
            template: `
                <div class="color">
                    <div class="color-square" 
                        :style="{background: hsl}">
                    </div>
                    <div class="color-info" v-if="info">
                        <div class="name">{{n}}</div>
                        <div class="value">{{hsl}}</div>
                    </div>
                </div>
            `,
            computed: {
                n() {
                    return this.getName(this.name, this.lig);    
                },
                hsl() {
                    return this.getHSL(this.color.hue, this.color.sat, this.lig);
                }
            },
            methods: {
                getHSL(hue, sat, lig) {
                    return `hsl(${hue}, ${sat}%, ${lig}%)`;
                },
                getName(name, lig) {
                    return `color-${name}-${lig}`;
                }
            }
        }
    }
};
