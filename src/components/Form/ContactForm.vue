<template>
  <div class="container">
    Send me an email !
    <form @submit.prevent="sendEmail">
      <label>Name</label>
      <input 
        type="text" 
        v-model="name"
        name="name"
        placeholder="Your Name"
        required
      >
      <label>Email</label>
      <input 
        type="email" 
        v-model="email"
        name="email"
        placeholder="Your Email"
        required
        >
      <label>Message</label>
      <textarea 
        name="message"
        v-model="message"
        cols="30" rows="5"
        placeholder="Message"
        required
      >
      </textarea>
      <input type="submit" value="Send">
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_leoxrrq', 'template_lz3pg2s', e.target,
        'user_xyWGBw5pWvq2X4GvEo5DU', {
          name: this.name,
          email: this.email,
          message: this.message
        }).then(() => this.messageSent())
      } catch(error) {
          this.messageError()
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
    messageSent() {
      this.$swal('Your message was sent to Themis Production, thanks !');
    },
    messageError() {
      this.$swal('An error occurred, please try to resend an email !');
    }
  }
}
</script>

<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 80%;
}

@media(max-width: 600px) {
  .container {
    margin-top: 20px;
  }
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>