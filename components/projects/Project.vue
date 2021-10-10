<template>
  <div class="project inline-block my-5 mx-10">
    <div class="image rounded-lg"></div>
    <ScrollView :offset="0">
      <template slot-scope="visibility">
        <TextReveal :key="`project${projectKey}`" :ref-passed="`project${projectKey}`" tag="h5"
                    class="font-mono text-sm my-2 font-bold" :visible="visibility[`project${projectKey}`]" :delay="delay">
          {{ project.name }}
        </TextReveal>
      </template>
    </ScrollView>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    project: {
      type: Object,
      default: null
    },
    projectKey: {
      type: Number,
      default: 0
    },
    delay: {
      type: Number,
      default: 0
    },
  }
}
</script>
