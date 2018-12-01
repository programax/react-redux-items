import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './redux/store';
import Results from './components/results';
import Details from './components/details';

const Root = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/results" component={Results} />
                <Route path="/details/:itemId" component={Details} />
                <Redirect from="/" to="/results" />
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
