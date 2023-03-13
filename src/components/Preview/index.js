import { Box, Typography, Divider } from '@mui/joy';
import React from 'react';
import CarouselPreview from '../CarouselPreview';

function Preview({ value, Images }) {
  return (
    <Box
      pt={7}
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h6" fontWeight="bold" fontSize={40} pb={4} >
        Preview
      </Typography>
      <Divider sx={{mb: 5}}/>
      <CarouselPreview Images={Images} />
      <div dangerouslySetInnerHTML={{ __html: value }} />
    </Box>
  );
}

export default Preview;