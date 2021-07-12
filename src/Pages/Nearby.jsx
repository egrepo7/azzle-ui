import React from 'react';
import { Link } from 'react-router-dom';
import Map from '../Components/Map/Map';
import Grid from '@material-ui/core/Grid';
import Card from '../Components/Card/Card';

export default function NearbyPage(){
    return(
        <div>
        <Grid container>
            <Grid sm={6}>
                <Grid container>
                    <Grid sm={6} xs={12}>
                        <Link to="/business" className="navLink">
                            <Card />
                        </Link>
                    </Grid>
                    <Grid sm={6} xs={12}>
                        <Link to="/business" className="navLink">
                            <Card />
                        </Link>
                    </Grid>
                    <Grid sm={6} xs={12}>
                        <Link to="/business" className="navLink">
                            <Card />
                        </Link>
                    </Grid>
                    <Grid sm={6} xs={12}>
                        <Link to="/business" className="navLink">
                            <Card />
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid sm={6}>
                <Map />
            </Grid>
        </Grid>
        </div>
    )
}