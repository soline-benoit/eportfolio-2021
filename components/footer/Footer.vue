<template>
  <div class="bg-light py-6 flex justify-center">
    <div class="flex items-center">
      <p class="font-mono mr-6 text-sm">Contact:</p>
      <Socials id="footer-social-networks" classes="flex"/>
    </div>
  </div>
</template>

<script>
import Socials from '@/components/common/Socials'

export default {
  name: 'Footer',
  components: { Socials }
}
</script>
