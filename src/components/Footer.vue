<template>
  <div class="footer">
    <h2>Contact</h2>
    <a class="animate__animated animate__fadeInUpBig" href="06.66.49.39.44">☎️  06.66.49.39.44</a><br>
    <a class="animate__animated animate__fadeInUpBig" href="mailto:remi.hayrimbault[at]gmail.com">✉️  remi.hayrimbault[at]gmail.com</a>
    <div class="final_bar">
      <router-link to="/legal_notice">Legal Notice</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  margin: 5% 0 0;
  background: none;
  color: #dfd3c3;
  font-size: 25px;

  a {
    text-align: center;
    text-decoration: none;
    display: block;
    margin: 0 auto;
    color: #dfd3c3;

    &:hover {
      color: #dfd3c3;
    }
  }

  h2 {
    text-align: left;
    font-size: 50px;
    font-weight: 600;
    margin: 0 0 4% 10%;
  }

  .final_bar {
    margin: 5% 0 0;
    text-align: center;
    font-size: 15px;
    padding: 1% 0;
    background: #dfd3c3;

    a {
      text-align: center;
      color: #171717;

      &:hover {
        color: #171717;
        text-decoration: underline;
      }
    }
  }
}

@media (max-width: 450px) {
  .footer {
    h2 {
      font-size: 30px;
    }

    a.animate__animated:nth-child(2) {
      font-size: 15px;
    }

    a.animate__animated:nth-child(4) {
      font-size: 15px;
    }

    .legal_content {
      font-size: 15px;
    }
  }
}

</style>