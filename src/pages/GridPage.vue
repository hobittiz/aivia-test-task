<template>
  <div class="form-container">
    <v-container class="d-flex align-center justify-center">
      <v-row class="justify-center">
        <v-col cols="12" sm="8" md="6">
          <v-card class="pa-4" elevation="10">
            <v-form @submit.prevent="drawGrid">
              <v-text-field
                v-model.number="sizeX"
                label="Size X"
                type="number"
                outlined
                dense
                required
                class="mb-4"
              ></v-text-field>
              <v-text-field
                v-model.number="sizeY"
                label="Size Y"
                type="number"
                outlined
                dense
                required
                class="mb-4"
              ></v-text-field>
              <v-btn type="submit" color="primary" class="mt-4" block>
                Draw Grid
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <GridLayout v-if="gridVisible" :sizeX="sizeX" :sizeY="sizeY" />
</template>

<script setup>
import { ref } from 'vue';
import GridLayout from '@/components/GridLayout.vue';

const sizeX = ref(0);
const sizeY = ref(0);
const gridVisible = ref(false);

function drawGrid() {
  if (!isNaN(sizeX.value) && sizeX.value > 0 && !isNaN(sizeY.value) && sizeY.value > 0) {
    gridVisible.value = true;
  } else {
    gridVisible.value = false;
    alert("Please enter valid positive numbers for Size X and Size Y");
  }
}
</script>

<style scoped>
.form-container {
  width: 100%;
  padding-top: 20px;
}

.fill-height {
  height: 100vh;
}

.v-card {
  max-width: 400px;
  margin: auto;
}

.grid-container {
  margin-top: 50px; /* Same as the height of the form */
  overflow: auto;
}
</style>
