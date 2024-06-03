<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-row class="justify-center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="pa-4" elevation="10">
          <v-form @submit.prevent="submitForm">
            <v-text-field
              v-model="email"
              label="Email"
              type="email"
              outlined
              dense
              :error-messages="emailErrors"
              @focus="clearInputErros('email')"
              @blur="vuelidate.email.$touch"
              required
              class="mb-4"
            ></v-text-field>
            
            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              outlined
              dense
              :error-messages="passwordErrors"
              @focus="clearInputErros('password')"
              @blur="vuelidate.password.$touch"
              required
            ></v-text-field>
            
            <v-btn type="submit" color="primary" class="mt-4" block>
              Login
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, minLength, email as emailRule } from '@vuelidate/validators';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const state = { email, password };

const rules = {
  email: { required, email: emailRule },
  password: { required, minLength: minLength(6) },
};

const vuelidate = useVuelidate(rules, state);
const router = useRouter();

function submitForm() {
  vuelidate.value.$touch();
  if (!vuelidate.value.$invalid) {
    router.push('/game');
  }
}

const emailErrors = computed(() => {
  const errors = [];
  if (vuelidate.value.email.$error) {
    if (vuelidate.value.email.required.$invalid) {
      errors.push('Email is required');
    } else if (vuelidate.value.email.email.$invalid) {
      errors.push('Email must be valid');
    }
  }
  return errors;
});

const passwordErrors = computed(() => {
  const errors = [];
  if (vuelidate.value.password.$error) {
    if (vuelidate.value.password.minLength.$invalid) {
      errors.push('Password must be at least 6 characters');
    } else if (vuelidate.value.password.required.$invalid) {
      errors.push('Password is required');
    }
  }
  return errors;
});

function clearInputErros(inputModelName) {
  vuelidate.value[inputModelName].$reset();
}

</script>

<style scoped>
.fill-height {
  height: 100vh;
}

.v-card {
  max-width: 400px;
  margin: auto;
}
</style>
