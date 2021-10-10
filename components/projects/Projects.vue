<template>
  <div class="bg-tertiary pb-28">
    <div class="text-center">
      <ScrollView :offset="0">
        <template slot-scope="visibility">
          <TextReveal key="projects" ref-passed="projects" tag="h2"
                      class="hl hl-primary z-10" :visible="visibility.projects">
            Projects
          </TextReveal>
        </template>
      </ScrollView>
    </div>

    <div class="w-9/12 m-auto">

      <div class="w-9/12 m-auto text-justify py-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
        viverra maecenas accumsan lacus vel facilisis.
      </div>

      <div class="text-center">
        <button v-for="(filter, k) in filters" :id="`filter-${k}`" :key="`filter-${k}`"
                :ref-passed="filter"
                class="magnetic bg-light font-mono py-1 px-4 rounded-lg text-sm font-bold mx-5"
                @click="filterProjects(filter)">
              <span class="magnetic-filler"></span>
              <span class="magnetic-text">
                <span class="magnetic-text-inner">{{ filter }}</span>
              </span>
        </button>
      </div>

      <div class="py-10 text-center">
        <Project v-for="(project, k) in filteredProjects"
                 :key="`project-${k}-${project.name}`"
                 :project-key="k"
                 :project="project"
                 :delay=".3*(k%2)"/>
      </div>

    </div>
  </div>
</template>

<script>
import Project from '@/components/projects/Project'

export default {
  name: 'Projects',
  components: { Project },
  data() {
    return {
      filters: ['All', 'PHP', 'VueJS', 'ReactJS', 'NodeJS'],
      projects: [
        {
          name: 'PHP Project',
          category: 'PHP'
        },
        {
          name: 'PHP Project',
          category: 'PHP'
        },
        {
          name: 'VueJS Project',
          category: 'VueJS'
        },
        {
          name: 'ReactJS Project',
          category: 'ReactJS'
        },
        {
          name: 'NodeJS Project',
          category: 'NodeJS'
        },
        {
          name: 'PHP Project',
          category: 'PHP'
        },
        {
          name: 'NodeJS Project',
          category: 'NodeJS'
        }
      ],
      filteredProjects: []
    }
  },
  mounted() {
    for (const i in this.projects) {
      this.filteredProjects.push(this.projects[i])
    }
  },
  methods: {
    filterProjects(filter) {
      const filteredProjects = this.projects
      if (filter === 'All') {
        this.filteredProjects = filteredProjects
        return
      }

      this.filteredProjects = filteredProjects.filter(project => project.category === filter)
    }
  }
}
</script>
