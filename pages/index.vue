<template>
  <div>
    <svg id="cursor" height="70" viewBox="0 0 70 70" width="70">
      <circle class="cursor__inner" cx="35.5" cy="35.5" r="17.75"/>
      <defs>
        <radialGradient id="cursor-instagram-gradient" r="150%" cx="30%" cy="107%">
          <stop stop-color="#fdf497" offset="0"/>
          <stop stop-color="#fdf497" offset="0.05"/>
          <stop stop-color="#fd5949" offset="0.45"/>
          <stop stop-color="#d6249f" offset="0.6"/>
          <stop stop-color="#285AEB" offset="0.9"/>
        </radialGradient>
      </defs>
    </svg>
    <Header/>
    <About/>
    <Skills/>
    <Experiences/>
    <Projects/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/header/Header.vue'
import About from '~/components/about/About.vue'
import Skills from '~/components/skills/Skills.vue'
import Experiences from '~/components/experiences/Experiences.vue'
import Projects from '~/components/projects/Projects.vue'
import Footer from '~/components/footer/Footer.vue'
import aosMixin from '~/mixins/aos'

export default Vue.extend({
  components: { Footer, Projects, Skills, Experiences, Header, About },
  mixins: [aosMixin]
})
</script>
