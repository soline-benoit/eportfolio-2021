<script>
import { gsap } from 'gsap'
import 'splitting/dist/splitting.css'
import '@/assets/styles/vendor/splitting-cells.css'

export default {
  name: 'TextReveal',
  props: {
    tag: {
      type: String,
      default: 'p'
    },
    refPassed: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      timelineSettings: {
        staggerValue: .014,
        charsDuration: .5
      },
      text: '',
      animated: false
    }
  },
  computed: {
    dynamicRef() {
      return this.refPassed
    }
  },
  watch: {
    visible(visible) {
      if (visible && !this.animated) {
        this.reveal()
        this.animated = true
      }
    }
  },
  beforeMount() {
    const Splitting = require('splitting/dist/splitting')
    this.text = Splitting.html({ content: this.$slots.default[0].text, by: 'chars' })
  },
  methods: {
    reveal() {
      const $el = this.$refs[this.dynamicRef]

      const $chars = $el.querySelectorAll('.word .char, .whitespace')
      const timeline = gsap.timeline()
        .delay(this.delay)
        .addLabel('switchtime')

      if ($el.classList.contains('hl')) {
        timeline
          .set($el, {
            className: $el.classList + ' hl-animated'
          })
      }

      timeline
        .set($chars, {
          y: '100%'
        }, 'switchtime')
        .to($el, this.timelineSettings.charsDuration, {
          ease: 'Power3.easeOut',
          opacity: 1
        }, this.timelineSettings.staggerValue, 'switchtime')
        .staggerTo($chars, this.timelineSettings.charsDuration, {
          ease: 'Power3.easeOut',
          y: '0%',
          opacity: 1
        }, this.timelineSettings.staggerValue, 'switchtime')
    }
  },
  render(createElement) {
    return createElement(
      this.tag,
      {
        class: { 'overflow-hidden': true, 'opacity-0': true, 'text-reveal': true },
        ref: this.dynamicRef,
        domProps: { innerHTML: this.text },
        props: { visible: this.visible }
      },
      this.$slots.default
    )
  }
}
</script>

<style>
.text-reveal {
  opacity: 0;
}

.hl-animated::before {
  animation: widthin ease-out 1s;
}

@keyframes slidein {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0%); }
}

@keyframes widthin {
  0% { width: 0; }
  100% { width: 105%; }
}
</style>
