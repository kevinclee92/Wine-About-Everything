import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

const divStyle = {
    margin: '15%',
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

const wineColors = [
    {value: 'Red', label: 'Red'},
    {value: 'White', label: 'White'},
];

const countries = [
    {value: '', label: 'None'},
    {value: 'Italy', label: 'Italy'},
    {value: 'France', label: 'France'},
    {value: 'Spain', label: 'Spain'},
    {value: 'USA', label: 'USA'},
    {value: 'Australia', label: 'Australia'},
    {value: 'Argentina', label: 'Argentina'},
    {value: 'China', label: 'China'},
    {value: 'South Africa', label: 'South Africa'},
    {value: 'Chile', label: 'Chile'},
    {value: 'Germany', label: 'Germany'},
    {value: 'Portugal', label: 'Portugal'},
    {value: 'Russia', label: 'Russia'},
    {value: 'Romania', label: 'Romania'},
    {value: 'Brazil', label: 'Brazil'},
    {value: 'Hungary', label: 'Hungary'},
];

const wineTypes = [
    {value: '', label: 'None'},
    {value: 'Riesling', label: 'Riesling'},
    {value: 'Gewürztraminer', label: 'Gewürztraminer'},
    {value: 'Chardonnay', label: 'Chardonnay'},
    {value: 'Sauvignon blanc', label: 'Sauvignon blanc'},
    {value: 'Syrah', label: 'Syrah'},
    {value: 'Merlot', label: 'Merlot'},
    {value: 'Cabernet sauvignon', label: 'Cabernet sauvignon'},
    {value: 'Pinot noir', label: 'Pinot noir'},
];

export default class SearchFormWine extends React.Component {

    state = {
        wineType: '',
        country: '',
        wineColor: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    
    render () {
        const { classes } = this.props;

        return (
            <div style={divStyle}>
                <form>
                    <Grid container spacing={8}>
                        <Grid item xs={12} sm={2}>
                            <TextField
                                // id="standard-select-country"
                                fullWidth
                                select
                                label="Color"
                                // className={classes.textField}
                                value={this.state.wineColor}
                                onChange={this.handleChange('wineColor')}
                                // SelectProps={{
                                //     MenuProps: {
                                //     className: classes.menu,
                                //     },
                                // }}
                                margin="normal"
                                >
                                {wineColors.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <TextField 
                                id="standard-password-input"
                                label="Name"
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
                                type="text"
                                fullWidth
                                autoComplete="current-password"
                                margin="normal"
                            />
                        </Grid>

                        <Grid item xs={12} sm={2}>
                            <TextField
                            // id="standard-select-country"
                            fullWidth
                            select
                            label="Country"
                            // className={classes.textField}
                            value={this.state.country}
                            onChange={this.handleChange('country')}
                            // SelectProps={{
                            //     MenuProps: {
                            //     className: classes.menu,
                            //     },
                            // }}
                            margin="normal"
                            >
                            {countries.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sm={2}>
                        <TextField
                            // id="standard-select-country"
                            fullWidth
                            select
                            label="Type"
                            // className={classes.textField}
                            value={this.state.wineType}
                            onChange={this.handleChange('wineType')}
                            // SelectProps={{
                            //     MenuProps: {
                            //     className: classes.menu,
                            //     },
                            // }}
                            margin="normal"
                            >
                            {wineTypes.map(option => (
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
                            color="primary" 
                            style={{float: "right", marginTop: "10px"}}>
                            Search
                        </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        );
    }
}