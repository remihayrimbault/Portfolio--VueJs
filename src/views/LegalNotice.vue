<template>
  <div class="legal_notice">
    <h2>Legal Notice</h2>
    <div class="legal_content">
      <p><strong>Owner &amp; declaring body</strong></p>
      <p>Rémi Hay&#8211;Rimbault</p>
      <p>Email: remi.hayrimbault[at]gmail.com</p>
      <p>Website: www.remihr.fr</p>
      <p><strong>Accommodation</strong></p>
      <p>o2switch, 222-224 Boulevard Gustave Flaubert 63000 Clermont-Ferrand</p>
      <p><strong>Computing and Freedom</strong></p>
      <p>In accordance with the provisions of Article 34 of the « Informatique et Libertés » law of January 6, 1978, you have the right to access data concerning you. To exercise your right of access and rectification in application of article 34 of the law « Informatique et Liberté » of January 6, 1978, send us an email to: remi.hayrimbault[at]gmail.com</p>
      <p><strong>Intellectual property</strong></p>
      <p>The website and all related rights are the exclusive property and in their entirety of Rémi Hay&#8211;Rimbault. Any total or partial representation of this site by any means whatsoever without the express authorization of the website operator is prohibited and constitutes an infringement punishable by articles L335-2 and following of the Intellectual Property Code.</p>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: 'LegalNotice',
  components: {
    Footer
  }
}
</script>

<style lang="scss">
  .legal_content {
    display: block;
    width: 80%;
    margin: 0 auto;
  }
</style>