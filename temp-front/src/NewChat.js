import React, { useState } from 'react';

import List from '@mui/material/List';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';

import LoopIcon from '@mui/icons-material/Loop';
import PeopleIcon from '@mui/icons-material/People';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';

import Page from './Page';

function NewChat() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <Page>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box width="40em" maxWidth="100%">
          <Card sx={{ marginTop: '1em' }}>
            <Box sx={{ p: 2, display: 'flex' }}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>Find someone to talk to about:</Typography>
            </Box>
            <Divider />
            <List
              sx={{ width: '100%', bgcolor: 'background.paper' }}
              component="nav"
            >
              <ListItemButton>
                <ListItemIcon>
                  <PsychologyAltIcon />
                </ListItemIcon>
                <ListItemText primary="Mental Health" />
                {open1 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <LoopIcon />
                </ListItemIcon>
                <ListItemText primary="Addiction" />
                {open2 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <ListItemButton onClick={() => setOpen3((b) => !b)}>
                <ListItemIcon>
                  <EmojiFlagsIcon />
                </ListItemIcon>
                <ListItemText primary="Sexual or Gender Identity" />
                {open3 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open3} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Relationships" />
                {open4 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </List>
          </Card>
        </Box>
      </Grid>
    </Page>
  );
}

export default NewChat;
