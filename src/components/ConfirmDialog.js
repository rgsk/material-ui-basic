import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Typography,
  makeStyles,
  IconButton,
} from '@material-ui/core';
import { NotListedLocation as NotListedLocationIcon } from '@material-ui/icons';

import React from 'react';
import Controls from './controls/Controls';
const useStyles = makeStyles(theme => ({
  dialog: {
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(5),
  },
  dialogContent: {
    textAlign: 'center',
  },
  dialogActions: {
    justifyContent: 'center',
  },
  titleIcon: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      cursor: 'default',
    },
    '& .MuiSvgIcon-root': {
      fontSize: '8rem',
    },
  },
}));

export default function ConfirmDialog({ confirmDialog, setConfirmDialog }) {
  const classes = useStyles();
  return (
    <Dialog
      open={confirmDialog.isOpen}
      classes={{
        paper: classes.dialog,
      }}
    >
      <DialogTitle
        style={{
          textAlign: 'center',
        }}
      >
        <IconButton disableRipple className={classes.titleIcon}>
          <NotListedLocationIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant="h6">{confirmDialog.title}</Typography>
        <Typography variant="subtitle2">{confirmDialog.subTitle}</Typography>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Controls.Button
          text="No"
          color="default"
          onClick={() =>
            setConfirmDialog({
              ...confirmDialog,
              isOpen: false,
            })
          }
        />
        <Controls.Button
          text="Yes"
          color="secondary"
          onClick={confirmDialog.onConfirm}
        />
      </DialogActions>
    </Dialog>
  );
}