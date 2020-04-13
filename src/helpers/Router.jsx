import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import Shows from '../components/Shows';
import Movies from '../components/Movies';
import MovieViews from '../components/Movies/MovieViews';
import ShowViews from '../components/Shows/ShowViews';

class Router extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path="/(|shows)/" exact component={Shows} />
                <Route path="/movies" exact component={Movies} />
                <Route path="/movies/:id" exact component={MovieViews} />
                <Route path="/shows/:id" exact component={ShowViews} />
            </Switch>
        )
    }
}

export default Router;