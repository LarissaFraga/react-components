import React from 'react';

import { Box, Grid } from '@material-ui/core';

const LittleBox = () => {

    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                    <Box border={2}>
                        <h1>LittleBox</h1>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box border={2}>
                        <h1>LittleBox</h1>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default LittleBox;