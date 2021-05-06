import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Button, Avatar} from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TelegramIcon from '@material-ui/icons/Telegram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { blue } from '@material-ui/core/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },

  spacing: {
      padding: "1.5rem"
  }
});

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };


  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <Box p="1.5rem">
            <DialogTitle id="simple-dialog-title">Let's chat</DialogTitle>
            <List>
                <ListItem button onClick={handleClose} component="a" href="https://api.whatsapp.com/send/?phone=+254796649562&text&app_absent=0&lang=en" target="_blank">
                        <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <WhatsAppIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Whatsapp" />
                </ListItem>
                <ListItem autoFocus button onClick={handleClose}  component="a" href="https://telegram.me/WR_the_coder" target="_blank">
                    <ListItemAvatar>
                        <Avatar>
                        <TelegramIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Telegram" />
                </ListItem>
            </List>
        </Box>
    </Dialog>
  );
}

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Chat
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}
