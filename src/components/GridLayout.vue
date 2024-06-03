<template>
  <div class="grid-container">
    <div class="grid-container__iner">
      <div
      v-for="(row, rowIndex) in sizeY"
      :key="rowIndex"
      class="grid-row"
    >
      <div
        v-for="(col, colIndex) in sizeX"
        :key="colIndex"
        class="grid-square"
        :class="{ 'blue-square': isBlue(rowIndex, colIndex) }"
        @mouseenter="toggleColor(rowIndex, colIndex)"
      ></div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue';

const props = defineProps({
  sizeX: {
    type: Number,
    required: true
  },
  sizeY: {
    type: Number,
    required: true
  }
});

const squareColors = reactive(new Map());

function toggleColor(rowIndex, colIndex) {
  const key = `${rowIndex}-${colIndex}`;
  squareColors.set(key, !squareColors.get(key));
}

function isBlue(rowIndex, colIndex) {
  const key = `${rowIndex}-${colIndex}`;
  return squareColors.get(key);
}

function resetGrid() {
  squareColors.clear();
}

watch(() => [props.sizeX, props.sizeY], resetGrid);
</script>

<style scoped>
.grid-container {
  display: flex;
  background-color: #333;
  overflow: auto;
  height: calc(100vh - 358px);
  padding: 10px;
}

.grid-container__iner {
  display: flex;
  flex-direction: column;
  margin: auto;
}

.grid-row {
  display: flex;
}

.grid-square {
  width: 36px;
  aspect-ratio: 1/1;
  background-color: #fff;
  margin: 1px;
  transition: background-color 0.4s;
}

.blue-square {
  background-color: blue;
}
</style>
