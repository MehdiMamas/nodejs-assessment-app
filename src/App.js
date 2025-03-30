export default {
  template: `
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
  `,
  data() {
    return {
      phoneNumber: "",
      message: "",
    };
  },
  methods: {
    async handleCall() {
      try {
        const response = await fetch("http://localhost:5000/api/call", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phoneNumber: this.phoneNumber }),
        });
        const data = await response.json();
        this.message = data.message || "Call triggered successfully!";
      } catch (error) {
        this.message = "Error triggering call.";
      }
    },
  },
};
