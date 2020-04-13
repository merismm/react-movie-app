import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { actionsMovie } from '../../actions';
import { history } from '../../helpers';
import './MovieViews.css';

class MovieViews extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id
        }
    }

    componentDidMount() {
        const { dispatch } = this.props;
        const { id } = this.state;
        dispatch(actionsMovie.getMovieById(id));
    }
	
    onBack() {
        history.goBack();
    }

    render() {
        const { movie } = this.props;

        return (
            <div className="movie">
                <Button bsStyle="link" onClick={this.onBack} className='details-margin'>&#60; Back</Button>
                <div className='details-margin'>
                {movie !== undefined && <img className='image-width' src={"https://image.tmdb.org/t/p/original" + movie.poster_path} alt="Photo"/>}
			    {movie !== undefined && <h3 className='h-margin'>{movie.title}</h3>}
				<p>Movie overview:{movie !== undefined && <p>{movie.overview}</p>}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { getMovie } = state;

    return {
        movie: getMovie.movie
    };
};

MovieViews = connect(mapStateToProps)(MovieViews);
export default MovieViews;