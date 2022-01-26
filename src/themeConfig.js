import { purple } from '@material-ui/core/colors';
import {createTheme} from '@material-ui/core/styles';

const theme = createTheme ({
    palette: {
        primary: {
            main: purple[300],
        }
    }
})

export default theme;