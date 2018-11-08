// IMPORTS
import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import LoadingIcon from '../LoadingIcon';
import ResultTable from '../ResultTable';
import "./searchFormWine.css";

// STYLES
const divStyle = {
    margin: '5%',
};

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

// ARRAY FOR COUNTRY SEARCH
const countries = [
    { value: '', label: 'None' },
    { value: 'Italy', label: 'Italy' },
    { value: 'France', label: 'France' },
    { value: 'Spain', label: 'Spain' },
    { value: 'Usa', label: 'USA' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Argentina', label: 'Argentina' },
    { value: 'China', label: 'China' },
    { value: 'South Africa', label: 'South Africa' },
    { value: 'Chile', label: 'Chile' },
    { value: 'Germany', label: 'Germany' },
];

// COMPONENT
export default class SearchFormWine extends React.Component {

    //STATE
    state = {
        name: '',
        vintage: '',
        country: '',
        wineResults: [],
        loading: null,
        isHidden: false,
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    // SEARCH BUTTON
    onSubmit = () => {
        this.setState({ loading: <LoadingIcon /> })
        const { name, vintage, country } = this.state;
        let vintageOpt = null;
        let countryOpt = null;
        if (vintage !== '') {
            vintageOpt = '&vintage=' + vintage;
        } else {
            vintageOpt = ''
        }
        if (country !== '') {
            countryOpt = '&country=' + country;
        } else {
            countryOpt = ''
        }
        const wineQuery = `${'https://cors-anywhere.herokuapp.com/'}https://api.globalwinescore.com/globalwinescores/latest/?wine=${name}${vintageOpt}${countryOpt}`
        console.log(wineQuery)
        axios.get(wineQuery, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Token 30e89aac72cb8c9eeb663b1b611ad66d612628f7',
            }
        })
            .then(response => {
                console.log(response);
                this.setState({ wineResults: response.data.results })
                this.setState({ loading: null })
                this.setState({ isHidden: true })
                // response.data.results
                // MAP THE RESPONSE TO RESULTS
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    // PAGE RENDER
    render() {
        const { classes } = this.props;

        return (
            <div>
                <div style={divStyle}>
                    <div className="searchFormBackground">
                        <h2>Search Wines</h2>
                        <form className="searchForm">
                            <Grid container spacing={8}>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="standard-password-input"
                                        label="Name"
                                        value={this.state.name}
                                        onChange={this.handleChange('name')}
                                        type="text"
                                        fullWidth
                                        autoComplete="current-password"
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={2}>
                                    <TextField
                                        id="standard-password-input"
                                        label="Vintage"
                                        value={this.state.vintage}
                                        onChange={this.handleChange('vintage')}
                                        type="text"
                                        fullWidth
                                        autoComplete="current-password"
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        fullWidth
                                        select
                                        label="Country"
                                        value={this.state.country}
                                        onChange={this.handleChange('country')}
                                        margin="normal"
                                    >
                                        {countries.map(option => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>

                                <Grid item xs={6} sm={10}></Grid>
                                <Grid item xs={6} sm={2}>
                                    <Button 
                                        variant="contained"
                                        color='secondary'
                                        style={{ float: "right", marginTop: "10px" }}
                                        onClick={this.onSubmit}
                                    >
                                        Search
                            </Button>
                                </Grid>
                            </Grid>
                        </form>

                        <div>
                            <br />
                            {this.state.loading}

                            {this.state.isHidden && <ResultTable {...this.props} data={this.state.wineResults} />}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}