import { createStore } from 'vuex'

export default createStore({
  state: {
    projets: [
      {id: 0, coolname: 'api-weather', beautifulname: 'API Weather', smiley: 'https://www.remihr.fr/smileys/weather.png', illus: 'https://www.remihr.fr/illus/weather.png', desc: 'I developed this site. It uses the WeatherAPI API. It was designed as part of my studies with the constraint of using this API and respecting a model provided.', link: 'https://www.remihr.fr/weather', tools: '- Html - Css - Php - JavaScript - Api REST -', colorback: '#DE781A', colortext: '#fff'},
      {id: 1, coolname: 'showcase-carpenter', beautifulname: 'Showcase Carpenter', smiley: 'https://www.remihr.fr/smileys/donsimoni.png', illus: 'https://www.remihr.fr/illus/donsimoni.png', desc: 'This site, which I integrated alone, was designed for a professional: Franck Donsimoni as part of my studies. One of the mandatory constraints in the design of this site was to use Wordpress as well as ACF a Wordpress plugin to help with the administration of the site.', link: 'https://www.franckdonsimoni.fr', tools: '- Html - Css - Php - Javascript - Wordpress -', colorback: '#DDBE1B', colortext: '#fff'},
      {id: 2, coolname: 'api-cocktail', beautifulname: 'API Cocktail', smiley: 'https://www.remihr.fr/smileys/cocktail.png', illus: 'https://www.remihr.fr/illus/cocktail.png', desc: 'I designed and integrated this site. It uses the CocktailAPI. It was designed as part of my studies with the constraint of using SCSS, having a JavaScript structure in the form of classes and using WebPack.', link: 'https://www.remihr.fr/cocktail', tools: '- Html - Scss - Php - JavaScript - Api REST - WebPack -', colorback: '#EA6DB4', colortext: '#fff'},
      {id: 3, coolname: 'showcase-agency', beautifulname: 'Showcase Agency', smiley: 'https://www.remihr.fr/smileys/cabane.png', illus: 'https://www.remihr.fr/illus/cabane.png', desc: 'This site was designed in collaboration with another student in my class. Our goal was to represent all the values of our class transformed into a web agency for a semester. No constraints for this project.', link: 'https://www.remihr.fr/cabane', tools: '- Html - Css - Php - JavaScript -', colorback: '#DBF8FF', colortext: '#01003f'},
      {id: 4, coolname: 'this-website', beautifulname: 'This Website', smiley: 'https://www.remihr.fr/smileys/remihr.png', illus: 'https://www.remihr.fr/illus/remihr.png', desc: 'This site was designed as part of my classes once again. It serves as my portfolio site. I choose to use Vue Js for this project to improve myself in this language', link: 'https://www.remihr.fr', tools: '- Html - Scss - JavaScript - Vue JS - Vue CLI - Vue X - Vue Rooter -', colorback: '#DFD2C3', colortext: '#171717'},
      {id: 5, coolname: 'showcase-electrician', beautifulname: 'Showcase Electrician', smiley: 'https://www.remihr.fr/smileys/electrician.png', illus: 'https://www.remihr.fr/illus/electrician.png', desc: 'I made this site during my internship at the end of my diploma. I designed and developed it on my own.', link:'https://www.pierre-elec.com', tools: '- HTML - SCSS - Sage Starter Theme - PHP/Blade - NodeJS - ', colorback: '#EE2024', colortext: '#fff'}
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
