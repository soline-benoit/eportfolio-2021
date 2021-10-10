<template>
  <div class="mt-20">
    <div id="experience-top-wave"></div>
    <div id="experience-background" class="bg-primary py-20 relative z-10">
      <div class="w-9/12 m-auto flex">
        <div class="w-1/2">
          <div class="text-center">
            <ScrollView :offset="0">
              <template slot-scope="visibility">
                <TextReveal key="qualifications" ref-passed="qualifications" tag="h2"
                            class="hl text-light hl-secondary z-10" :visible="visibility.qualifications">
                  Qualifications
                </TextReveal>
              </template>
            </ScrollView>
          </div>

          <div class="flex flex-col mt-20 items-center">

            <Timeline v-for="experience in schoolExperiences"
                      :key="experience.title"
                      :experience="experience"
                      type="school"/>

          </div>

        </div>
        <div class="w-1/2">
          <div class="text-center">
            <ScrollView :offset="0">
              <template slot-scope="visibility">
                <TextReveal key="experiences" ref-passed="experiences" tag="h2" class="hl text-light hl-secondary z-10"
                            :visible="visibility.experiences" :delay=".3">
                  Experiences
                </TextReveal>
              </template>
            </ScrollView>
          </div>

          <div class="flex flex-col mt-20 items-center">

            <Timeline v-for="experience in workExperiences"
                      :key="experience.title"
                      :experience="experience"
                      type="work"/>

          </div>

        </div>
      </div>
    </div>
    <div id="experience-bottom-wave"></div>
  </div>
</template>

<script>
import Timeline from '@/components/experiences/Timeline'

export default {
  name: 'Experiences',
  components: { Timeline },
  data() {
    return {
      schoolExperiences: {
        master: {
          title: 'Master',
          year: 2022,
          place: {
            the: false,
            school: 'WIS',
            city: null
          },
          description: 'IT Expert & Digital Expert'
        },
        licence: {
          title: 'Licence',
          year: 2021,
          place: {
            the: true,
            school: 'Faculty of Science',
            city: 'Montpellier'
          },
          description: 'Computer science'
        },
        dut: {
          title: 'DUT',
          year: 2019,
          place: {
            the: true,
            school: 'IUT',
            city: 'Montpellier'
          },
          description: 'Computer science'
        }
      },

      workExperiences: {
        choosit: {
          title: 'Choosit!',
          year: '2020-22',
          description: 'PHP/Symfony web developer'
        },
        subvitamine: {
          title: 'Subvitamine™',
          year: 2021,
          description: 'PHP/Laravel & VueJS developer'
        },
        poissonSoluble: {
          title: 'Poisson Soluble',
          year: 2019,
          description: 'PHP/Symfony web developer'
        }
      }
    }
  }
}
</script>
