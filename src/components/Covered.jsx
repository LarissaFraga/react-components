import React from "react";
import { Button, Hidden, Typography, withWidth } from "@material-ui/core";

const Covered = (props) => {
  return (
    <div>
      <Typography variant="h6">
        Largura: {props.width}
      </Typography>

      <Hidden xsDown>
        <Button variant="contained" color="primary">
          xs
        </Button>
      </Hidden>
      <Hidden smDown>
        <Button variant="contained" color="primary">
          sm
        </Button>
      </Hidden>
      <Hidden mdUp>
        <Button variant="contained" color="primary">
          md
        </Button>
      </Hidden>
      <Hidden only={'lg'}>
        <Button variant="contained" color="primary">
          lg
        </Button>
      </Hidden>
    </div>
  );
}

export default withWidth()(Covered);