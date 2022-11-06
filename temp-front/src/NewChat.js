import React, { useState } from 'react';

import List from '@mui/material/List';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import ShareIcon from '@mui/icons-material/Share';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';

import LoopIcon from '@mui/icons-material/Loop';
import PeopleIcon from '@mui/icons-material/People';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import LanguageIcon from '@mui/icons-material/Language';

import Page from './Page';

function NewChat() {
  const [addictionOpen, setAddictionOpen] = useState(false);
  const [identityOpen, setIdentityOpen] = useState(false);

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
                <ExpandMore />
              </ListItemButton>
              <ListItemButton onClick={() => setAddictionOpen((b) => !b)}>
                <ListItemIcon>
                  <LoopIcon />
                </ListItemIcon>
                <ListItemText primary="Addiction" />
                {addictionOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={addictionOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <ShareIcon />
                    </ListItemIcon>
                    <ListItemText primary="Social Media" />
                  </ListItemButton>
                  <ListItemButton href="/loader" sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <SmokingRoomsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drugs and Alcohol" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <LanguageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Internet" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton onClick={() => setIdentityOpen((b) => !b)}>
                <ListItemIcon>
                  <EmojiFlagsIcon />
                </ListItemIcon>
                <ListItemText primary="Sexual or Gender Identity" />
                {identityOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={identityOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FiberManualRecordIcon />
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
                <ExpandMore />
              </ListItemButton>
            </List>
          </Card>
        </Box>
      </Grid>
    </Page>
  );
}

export default NewChat;
