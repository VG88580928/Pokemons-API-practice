import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';



class App extends Component {
    constructor () {
        super()
        this.state = {
            pokemons: [],
            pokemonDetails: [],
            searchfield:""
        }
    }

    getPokemonDetails() {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
          .then(response => response.json())
          .then(datas => {
              this.setState({ pokemons: datas.results }, () => {
                this.state.pokemons.map(obj => {  
                return ( 
                  fetch(obj.url)
                  .then(res => res.json())
                  .then(datas => {
                      this.setState((prevState) => ({pokemonDetails: [...prevState.pokemonDetails, datas]}));
                  })
                )
              })
          })
        })
    }  

    componentDidMount() {
        this.getPokemonDetails();
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    getFilteredSortedList() {
        const filtered = this.state.pokemonDetails.filter((pokemon) => {
            return pokemon.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return filtered.sort((a, b) => a.id - b.id)
    }

    render () {
        return !this.state.pokemonDetails.length ? 
        <h1 className="tc">Loading</h1> :
        (
            <div className="tc">
            <h1 className="f1">寶可夢卡片</h1> 
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList pokemons={this.getFilteredSortedList()}/>
                </ErrorBoundry>
            </Scroll>    
            </div>   
        );
    }
}

export default App;