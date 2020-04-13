import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { actionsShow } from '../../actions';
import { history } from '../../helpers';
import './ShowViews.css';

class ShowViews extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id
        }
    }

    componentDidMount() {
        const { dispatch } = this.props;
        const { id } = this.state;

        dispatch(actionsShow.getShowById(id));
    }

    onBack() {
        history.goBack();
    }

    render() {
        const { show } = this.props;

        return (
            <div className="show">
                <Button bsStyle="link"  onClick={this.onBack} className='details-margin'>&#60; Back</Button>
                <div className='details-margin'>
                {show !== undefined && <img className='image-width' src={"https://image.tmdb.org/t/p/original" + show.poster_path} alt="Photo"/>}
				{show !== undefined && <h3 className='h-margin'>{show.name}</h3>}
                 <p>Show overview:{show !== undefined && <p>{show.overview}</p>}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { getShow } = state;

    return {
        show: getShow.show
    };
};

ShowViews = connect(mapStateToProps)(ShowViews);
export default ShowViews;