<template>
  <div class="relative">
    <div class="bg-tertiary">
      <div class="w-9/12 m-auto pt-20">
        <div class="text-center">
          <ScrollView :offset="0">
            <template slot-scope="visibility">
              <TextReveal key="title" ref-passed="title" tag="h2"
                          class="hl hl-primary z-10" :visible="visibility.title">
                About me
              </TextReveal>
            </template>
          </ScrollView>
        </div>

        <div class="flex text-justify py-8">
          <div class="w-1/2 py-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
              lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
              viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
              gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. </p>
          </div>

          <div class="w-1 bg-light h-96 mx-8"></div>

          <div class="w-1/2 py-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
              lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
          </div>
        </div>
      </div>
    </div>
    <div id="about-wave-tertiary"></div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
