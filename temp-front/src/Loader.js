import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import Page from './Page';

function Loader() {
  setTimeout(() => {
    window.location.replace('/chat/anonymous ant');
  }, 3000);

  return (
    <Page>
      <Box mt={25} />
      <Box style={{
        width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <Box style={{ display: 'flex', flexDirection: 'column' }}>
          <Box
            style={{
              marginBottom: '10px', display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center',
            }}
            s
          >
            <CircularProgress />
          </Box>
          <Typography sx={{ color: 'text.secondary' }}>
            Finding you someone to talk to
          </Typography>
        </Box>
      </Box>
    </Page>
  );
}

export default Loader;
