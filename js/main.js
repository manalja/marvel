new Vue({
  el: '#app',
  data: {
    searchQuery: '',
    heroes: [],
    selectedHero: null
  },
  computed: {
    filteredHeroes() {
      if (this.searchQuery === '') {
        return this.heroes;
      } else {
        const query = this.searchQuery.toLowerCase();
        return this.heroes.filter(hero => hero.name.toLowerCase().includes(query));
      }
    }
  },
  methods: {
    showDetails(hero) {
      this.selectedHero = hero;
      document.getElementById('detailsModal').style.display = 'block';
    },
    closeModal() {
      this.selectedHero = null;
      document.getElementById('detailsModal').style.display = 'none';
    },
    fetchHeroes() {
      fetch('https://akabab.github.io/superhero-api/api/all.json')
        .then(response => response.json())
        .then(data => {
          this.heroes = data;
        })
        .catch(error => {
          console.error('Une erreur s\'est produite lors de la récupération des super-héros:', error);
        });
    }
  },
  created() {
    this.fetchHeroes();
  }
});
