const app = Vue.createApp({
  //date, functions
  //template:'<h2>i am a template</h2>'
  data() {
    return {
      url: "http://www.thenetninja.co.uk",
      showBooks: true,
      books: [
        {
          title: "name of wind",
          author: "asma1",
          img: "assets/1.jpg",
          isFav: true,
        },
        { title: "book2", author: "asma2", img: "assets/2.jpg", isFav: true },
        { title: "book3", author: "asma3", img: "assets/3.jpg", isFav: false },
      ],
      // x: 0,
      // y: 0,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});
app.mount("#app");
