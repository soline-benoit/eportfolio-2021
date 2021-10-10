<template>
  <div :class="{experience: true, left: isSchool, right: isWork}" :data-aos="dataAos()" data-aos-once="true">
    <div class="bullet">
      <div class="blob">
        {{ experience.title }}
      </div>
      <p class="year">{{ experience.year }}</p>
    </div>
    <div class="text">
      <div class="category"><strong>{{ experience.description }}</strong></div>
      <div v-if="isSchool" class="place">
        <span v-html="writePlace(experience.place)"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
  props: {
    experience: {
      type: Object,
      default: null,
    },
    type: {
      type: String,
      default: null,
    }
  },
  data() {
    return {
      isSchool: this.type === 'school',
      isWork: this.type === 'work',
    }
  },
  methods: {
    writePlace(place) {
      const res = ['at']

      if (place.the) {
        res.push('the')
      }
      res.push(`<em>${place.school}</em>`)
      if (place.city) {
        res.push('of')
        res.push(place.city)
      }

      return res.join(' ')
    },
    dataAos() {
      return 'zoom-out-' + (this.isWork ? 'left' : 'right');
    }
  }
}
</script>
