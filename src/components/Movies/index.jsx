import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../helpers/Header';
import { actionsMovie } from '../../actions';
import { Table } from '../../helpers';

class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        }
        this.onSearch = this.onSearch.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(actionsMovie.getMovies());
    }

    onSearch(query) {
        const { dispatch } = this.props;

        if (query !== undefined && query.length >= 3) {
            dispatch(actionsMovie.searchMovies(query));
        }
        this.setState({ query })
    }

    render() {
        const { movies, searchedMovies } = this.props;
        const { query } = this.state;
        const showMovies = query === undefined || query === '' || query.length < 3 ?
            movies !== undefined ? movies.results.slice(0, 10) : [] : 
            searchedMovies !== undefined ? searchedMovies.results : [];

        return (
            <div className="tv-shows">
                <Header onSearch={this.onSearch} active='movies' />
                <Table category='movies' list={showMovies !== undefined ? showMovies : []} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { getMovies, searchMovies } = state;

    return {
        movies: getMovies.movies,
        searchedMovies: searchMovies.searchedMovies
    };
};

Movies = connect(mapStateToProps)(Movies);
export default Movies;