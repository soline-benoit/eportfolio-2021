<template>
  <div class="skill-blob">
    <div>
      <strong>{{ skill.number }}</strong>
      <p>{{ skill.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    skill: {
      type: Object,
      default: null
    }
  }
}
</script>
