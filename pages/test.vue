<template>
  <div>

    <div class="text-center pt-24">
      <div class="inline-block">
        <button class="magnetic bg-light font-mono py-1 px-4 rounded-lg text-sm font-bold mx-3">
          <span class="button__text">
						<span class="button__text-inner">Magnetic</span>
					</span>
        </button>
      </div>

      <div class="inline-block">
        <button class="magnetic bg-light font-mono py-1 px-4 rounded-lg text-sm font-bold mx-3">
          <span class="button__text">
						<span class="button__text-inner">Button</span>
					</span>
        </button>
      </div>
    </div>

    <svg class="cursor" width="25" height="25" viewBox="0 0 25 25">
      <circle class="cursor__inner" cx="12.5" cy="12.5" r="6.25"/>
    </svg>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend()
</script>

<style scoped>
div {
  background-color: black;
  height: 100vh;
}

button {
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s ease;
}

button:focus,
.button--hover {
  outline: none;
  color: white;
  background: indianred;
}

.button__text,
.button__text-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.cursor {
  display: none;
}

@media (any-pointer: fine) {
  .cursor {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    pointer-events: none;
  }

  .cursor__inner {
    fill: red;
  }
}
</style>
