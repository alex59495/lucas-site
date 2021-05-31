<template>
  <div class="section" id="contact">
    <div class="title">
      {{ title }}
    </div>
    <div class="container-grid">
      <div class="infos">
        <p>Lucas De Oliveira</p>
        <p>E-mail : <a href="mailto:Themis.prods@gmail.com">Themis.prods@gmail.com</a></p>
        <p>Phone : +33 6 04 67 25 40</p>
      </div>
      <div class="contact-form">
        <form 
          action=”mailto:alexis59495@gmail.com”
          method=”POST”
          enctype=”multipart/form-data”
          name=”EmailForm”>
          Name:
          <br>
          <input type=”text” size=”19″ name=”ContactName”><br><br>
          Message:
          <br> 
          <textarea name=”ContactCommentt” rows=”6″ cols=”20″></textarea>
          <br>
          <br> 
          <button type=”submit”>Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionContact',
  props: {
    title: String
  }
}
</script>


<style scoped>
  .container-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }

  .infos {
    border-bottom: 2px solid black;
  }

  .section {
    margin: 5% 10%;
  }

  .title {
    font-size: 36px;
    color: black;
    text-align: left;
    position: relative;
  }

  .title:before{
    content : "";
    position: absolute;
    left    : 0;
    bottom  : 0;
    top: 15;
    width   : 50%;  /* or 100px */
    border-bottom: 2px solid black;
  }
</style>