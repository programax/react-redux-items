import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import './style.css';

class Autocomplete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    render() {
        const {
            suggestions,
            onChangeText,
            text,
        } = this.props;
        const {
            isOpen,
        } = this.state;

        return (
            <div className="main-container">
                <div className="container-icon">
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    value={text}
                    style={{ width: '100%' }}
                    onChange={(event) => {
                        const newText = event.target.value;

                        onChangeText(newText);

                        if (!isOpen && newText) {
                            this.setState({ isOpen: true });
                        } else if (isOpen && !newText) {
                            this.setState({ isOpen: false });
                        }
                    }}
                    onBlur={() => {
                        setTimeout(() => this.setState({ isOpen: false }), 100);
                    }}
                    onFocus={() => {
                        if (text) {
                            this.setState({ isOpen: true });
                        }
                    }}
                />
                {isOpen &&
                <Paper className="container-results" square>
                    {suggestions.slice(0, 10).map(suggestion =>
                    <MenuItem
                        component="div"
                        onClick={() => {
                            onChangeText(suggestion.label);
                            this.setState({ isOpen: false });
                        }}
                    >
                        {suggestion.label}
                    </MenuItem>)}
                </Paper>}
            </div>
        );
    }
}

export default Autocomplete;
