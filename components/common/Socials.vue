<template>
  <ul :id="id" :class="classes">
    <li v-for="(social, k) in socials" :key="`socials-${k}-${id}`">
      <SocialLink :name="social.name" :url="social.url"/>
    </li>
  </ul>
</template>

<script>
import SocialLink from '@/components/common/SocialLink'
export default {
  name: 'Socials',
  components: { SocialLink },
  props: {
    id: {
      default: '',
      type: String
    },
    classes: {
      default: '',
      type: String
    }
  },
  data() {
    return {
      socials: [
        {name: 'instagram', url: '#'},
        {name: 'linkedin', url: '#'},
        {name: 'twitter', url: '#'},
        {name: 'github', url: '#'},
      ]
    };
  }
}
</script>
