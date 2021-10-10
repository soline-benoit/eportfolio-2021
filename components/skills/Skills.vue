<template>
  <div class="flex justify-center w-full mb-10">
    <Skill v-for="(skill, k) in skills" :key="`skill-${k}`" :skill="skill"/>
  </div>
</template>

<script>
import Skill from '@/components/skills/Skill'
export default {
  name: 'Skills',
  components: { Skill },
  data() {
    return {
      skills: {
        1: {
          number: 'X',
          title: 'Lorem ipsum'
        },
        2: {
          number: 'X',
          title: 'Lorem ipsum'
        },
        3: {
          number: 'X',
          title: 'Lorem ipsum'
        },
      }
    }
  }
}
</script>
