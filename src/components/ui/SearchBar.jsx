import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Box} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    searchbar: {
        padding: 10,
        backgroundColor: "#F1F1F1",
        alignItems: "center",
        position: "fixed"
    },
    box: {
        marginLeft: "auto",
        display: "flex",
        flexDirection: "row"
    }
}))

const companiesList = [
    {name: "All Company"},
    {name: "Hitachi Asia"},
    {name: "Hitachi Rail"},
    {name: "Hitachi Vantara"}
    ];

const regionsList = [
    {name: "All Region"},
    {name: "Americas"},
    {name: "Australia"},
    {name: "EMEA"},
    {name: "IDC"},
    {name: "India"},
    {name: "Japan"},
    {name: "Oceanic"},
    {name: "SEA"},
    {name: "VDC"}
    ];

const lobsList = [
    {name: "All Line of Business"},
    {name: "Advertising"},
    {name: "Business Consulting"},
    {name: "Digital Enterprise"},
    {name: "Digital Modernization"},
    {name: "Digital Transformation"},
    {name: "Logistics"},
    {name: "Managed Services"},
    {name: "Payment and Settlement"},
    {name: "Sales Organization"},
    {name: "Wealth Management"}
    ];

const projectStatusList = [
    {name: "On-Going"},
    {name: "Completed"},
];

export default function SearchBar(props) {
        const classes = useStyles();
        return (
            <Grid container direction="row" className={classes.searchbar}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Typography color="textPrimary">Executive Dashboard</Typography>
                </Breadcrumbs>
                <Box className={classes.box}>
                    <Autocomplete
                        id="company-dropdown"
                        options={companiesList}
                        getOptionLabel={(option) => option.name}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="All Company" variant="outlined" />}
                    />
                    <Autocomplete
                        id="region-dropdown"
                        options={regionsList}
                        getOptionLabel={(option) => option.name}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="All Region" variant="outlined" />}
                    />
                    <Autocomplete
                        id="lob-dropdown"
                        options={lobsList}
                        getOptionLabel={(option) => option.name}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="All Line of Business" variant="outlined" />}
                    />
                    <Autocomplete
                        id="status-dropdown"
                        options={projectStatusList}
                        getOptionLabel={(option) => option.name}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="On-Going" variant="outlined" />}
                    />
                    <Button variant="contained" color="primary">
                        GO
                    </Button>
                </Box>
            </Grid>
    )
}