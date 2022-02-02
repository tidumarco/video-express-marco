import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import '@lyyti/design-system/styles/objektiv.css';
export default makeStyles((theme: Theme) =>
  createStyles({
    wrapForm: {
      display: 'flex',
      width: '95%',
    },
    wrapText: {
      width: '100%'
    },
    button: {
      //margin: theme.spacing(1),
    }
  })
);
