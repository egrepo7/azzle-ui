import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import BusinessHeader from '../Components/BusinessHeader/BusinessHeader';
import BusinessMenu from '../Components/BusinessMenu/BusinessMenu';

export default function BusinessPage(){

    return(
        <div >
            <BusinessHeader/>
            <BusinessMenu style={{ backgroundColor: "#f7f8f9"}}/>
        </div>
    )
}