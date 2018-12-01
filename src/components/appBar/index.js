import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Autocomplete from '../autocomplete';
import './style.css';

class IAppBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };
    }

    render() {
        const {
            text,
        } = this.state;

        const {
            suggestions,
        } = this.props;

        return (
            <AppBar position="static">
                <Toolbar className="appbar">
                    <Typography variant="h6" color="inherit">
                        Programax
                    </Typography>

                    <Autocomplete
                        text={text}
                        suggestions={suggestions || []}
                        onChangeText={(text) => {
                            this.setState({ text });
                        }}
                    />

                    <AccountCircle />
                </Toolbar>
            </AppBar>
        );
    }
}

export default IAppBar;
