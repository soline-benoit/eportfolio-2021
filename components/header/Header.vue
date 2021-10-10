<template>
  <kinesis-container>
    <div class="h-screen w-full relative flex flex-col">
      <div class="flex items-center justify-center w-full h-screen top-0 absolute z-10">

        <div class="relative flex items-center justify-center">

          <kinesis-element :strength="10" class="relative">
            <div id="header-blob-1" class="absolute"></div>
          </kinesis-element>
          <kinesis-element :strength="30" class="relative">
            <div id="header-blob-2" class="absolute"></div>
          </kinesis-element>

          <div id="header-photo-blob" class="absolute"></div>
          <kinesis-element :strength="10" type="depth_inv" class="relative z-10">
            <img src="~/assets/images/header/photo.png" class="z-10" alt="profile picture of Soline Benoit"/>
          </kinesis-element>

          <ScrollView :offset="0" tag="h1" class="absolute z-10">
            <template slot-scope="visibility">
              <i class="left absolute text-6xl">
                <TextReveal key="hi" ref-passed="hi" tag="i" :visible="visibility.hi">
                  Hi,
                </TextReveal>
                <i>
                  <TextReveal key="im" ref-passed="im" tag="span" :visible="visibility.im" :delay=".3">
                    I'm
                  </TextReveal>
                  <TextReveal key="soline" ref-passed="soline" tag="mark" class="hl hl-secondary" :delay=".3"
                              :visible="visibility.soline">
                    Soline
                  </TextReveal>
                </i>
              </i>

              <i class="right absolute text-7xl">
                <TextReveal key="make" ref-passed="make" tag="i" class="mask-1" :visible="visibility.make" :delay=".6">
                  I make
                </TextReveal>
                <i>
                  <TextReveal key="websites" ref-passed="websites" tag="mark" class="hl hl-secondary" :delay=".9"
                              :visible="visibility.websites">
                    websites
                  </TextReveal>

                </i>
                <TextReveal key="fun" ref-passed="fun" tag="i" class="mask-2" :visible="visibility.fun" :delay="1.2">
                  for fun &#59;&#41;
                </TextReveal>
              </i>
            </template>
          </ScrollView>

          <Socials id="header-social-networks" classes="absolute"/>

          <ScrollView :offset="0">
            <template slot-scope="visibility">
              <TextReveal id="header-subtitle" key="desc" ref-passed="desc" tag="p" class="font-mono absolute text-sm"
                          :visible="visibility.desc">
                (it's only fun when it works&hellip;)
              </TextReveal>
            </template>
          </ScrollView>

          <kinesis-element :strength="10" type="translate" class="relative z-10">
            <div id="header-blob-3" class="absolute"></div>
          </kinesis-element>
          <kinesis-element :strength="10" type="depth" class="relative z-10">
            <div id="header-blob-4" class="absolute"></div>
          </kinesis-element>
          <kinesis-element :strength="20" type="depth" class="relative z-10">
            <div id="header-blob-5" class="absolute"></div>
          </kinesis-element>
          <kinesis-element :strength="20" axis="x" class="relative z-10">
            <div id="header-blob-6" class="absolute"></div>
          </kinesis-element>

        </div>

        <button id="header-checkout-work-button" class="magnetic absolute z-20" data-trigger-factor=".5" data-magnetic-clss="view-project">
          <span class="magnetic-filler"></span>
          <span class="magnetic-text">
            <span class="magnetic-text-inner">Checkout my work!</span>
          </span>
        </button>

      </div>
      <div id="header-wave" class="w-full"></div>
      <div id="header-wave-extension" class="bg-tertiary w-full"></div>
    </div>
  </kinesis-container>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import Socials from '@/components/common/Socials'

export default {
  name: 'Header',
  components: { Socials, KinesisContainer, KinesisElement }
}
</script>
