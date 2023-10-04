import MovieList from './MovieList';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import Footer from './Footer';
function Home() {
    return (
      <div>
        <Navbar/>
        <SearchBar />
        <MovieList />
        <Footer />

      </div>
    );
  }

export default Home;