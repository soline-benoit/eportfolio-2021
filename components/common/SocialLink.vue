<template>
  <a :href="url" target="_blank">
    <button class="magnetic rounded-full h-8 w-8 flex items-center justify-center"
            :data-magnetic-clss="name">
      <span class="magnetic-filler" :class="name"></span>
      <span class="magnetic-text">
            <span class="magnetic-text-inner mt-2">
              <i :class="`icon-socials-${name}`"></i>
            </span>
          </span>
    </button>
  </a>
</template>

<script>
export default {
  name: 'SocialLink',
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  }
}
</script>
