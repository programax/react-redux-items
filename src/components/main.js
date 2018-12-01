import React, { Fragment, Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './appBar';
import Results from './results';
import Details from './details';
import items from '../data/items';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 'results',
            currentItemId: null,
        };

        this.onSetCurrentPage = this.onSetCurrentPage.bind(this);
    }

    onSetCurrentPage(currentPage, currentItemId) {
        this.setState({ currentPage, currentItemId });
    }

    render() {
        const {
            currentPage,
            currentItemId,
        } = this.state;
        const currentItem = items.find(n => n.id === currentItemId);

        return (
            <Fragment>
                <CssBaseline />
                <AppBar
                    currentPage={currentPage}
                    onSetCurrentPage={this.onSetCurrentPage}
                />
                {currentPage === 'results' &&
                    <Results
                        items={items}
                        onSetCurrentPage={this.onSetCurrentPage}
                    />
                }
                {currentPage === 'details' &&
                    <Details
                        onSetCurrentPage={this.onSetCurrentPage}
                        currentItem={currentItem}
                    />
                }
            </Fragment>
        );
    }
}

export default Main;
