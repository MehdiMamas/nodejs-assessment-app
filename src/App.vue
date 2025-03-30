<template>
  <div>
    <h1>Medication Reminder System</h1>
    <input
      type="text"
      placeholder="Enter phone number"
      v-model="phoneNumber"
    />
    <button @click="handleCall">Trigger Call</button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup() {
    const phoneNumber = ref('');
    const message = ref('');

    const handleCall = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/call', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phoneNumber: phoneNumber.value }),
        });
        const data = await response.json();
        message.value = data.message || 'Call triggered successfully!';
      } catch (error) {
        message.value = 'Error triggering call.';
      }
    };

    return { phoneNumber, message, handleCall };
  },
};
</script>

<style>
/* Add any styles here */
</style>
