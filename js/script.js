var app = new Vue({
el: '#root',
data: {
  input: '',
  arrayInput: []
},
methods: {
  submit: function() {
    if (this.input.length !== 0 && this.input !== ' ') {
      this.arrayInput.push(this.input);
      this.input= '';
    }
  },
  clickFunction: function(htmlIndex) {
    // filtro l'array input resistuendo solo gli elementi che hanno indice diverso dall'elemento clickato
    this.arrayInput = this.arrayInput.filter((element, index) => {
      if (htmlIndex !== index) {
        return element
      }
    });
  }
}
});
Vue.config.devtools = true;
