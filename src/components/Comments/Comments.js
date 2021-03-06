import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                margin: "120px",
                padding: "10px"
            }
        }
    }
});

class Comments extends Component {

    state = {
        comments: ''
    }

    handleClickNext = () => {
        if (this.state.comments === ''){
            alert('You must fill out the comments field.')
        }
        else {
        this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments })
        this.props.history.push('/review')}
    }

    handleClickBack = () => {
        this.props.history.push('/support')
    }


    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    render() {
        return (
            <>
                <MuiThemeProvider theme={theme}>
                    <div className="component">
                        <h2>Any comments you want to leave?</h2>
                    </div>
                    <div className="component">
                        <TextField
                            required
                            id="standard-required"
                            label="Comments?"
                            defaultValue=""
                            onChange={(event) => this.handleChange(event)}
                            margin="normal"
                        /></div><div className="component">
                        <Button className="btn" variant="contained" color="primary" onClick={this.handleClickBack}>
                            Back
                    </Button>
                        <Button className="btn" variant="contained" color="primary" onClick={this.handleClickNext}>
                            Next
                    </Button>
                    </div>
                </MuiThemeProvider>
            </>
        )
    };
}
export default connect()(Comments);