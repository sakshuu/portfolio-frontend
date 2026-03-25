import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { saveAs } from 'file-saver';
import Button from '@mui/material/Button';

import DownloadIcon from '@mui/icons-material/Download';
import resume from "./../assets/resume/resume.pdf"
import "./../assets/css/about.css"
import { profile } from '../assets/images';

const About = () => {
  

  const handleDownload = () => {
    const fileUrl = resume; 
    const fileName = 'resume.pdf'; 
    saveAs(fileUrl, fileName);
  };

  return <>
  <Box className="gradient">
<Container>
      <Typography variant="h3" className='heading' component="h3" >Know About me</Typography>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="about-content">
  <Grid item xs={12} sm={12} md={4} >
    <Box className='content-img'>
  <img 
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" 
        src={profile} className='back-img'/>
    </Box>
       <Box className='content-img' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
     data-aos-duration="3000"
     > 
  <Button variant="contained" className='main-resume' color="secondary"
   onClick={handleDownload} 
    startIcon={<DownloadIcon/>}>download resume</Button>
      </Box> 
  </Grid>
  <Grid item xs={12} sm={12} md={8} 
  data-aos="fade-left"
     data-aos-duration="700"
     >
      <Box sx={{display:{ md:"flex", sm:"inline"},  gap:"6px", marginBottom:"8px", marginTop:"29px"}}>
      <Typography variant='h5' > My Name Is </Typography>
      <Typography variant='h5' className='colorText'> Sakshi Jadhav, </Typography>
      <Typography variant='h5'>  a Software Developer</Typography>
      </Box>
      <Typography variant='body1' className='info'>

      with experience in building modern and scalable web applications. I specialize in frontend technologies including React.js, HTML, CSS, and JavaScript, with hands-on experience in state management, API integration, and UI development using frameworks like Material UI, Bootstrap, and Tailwind CSS. 
</Typography>
      <Typography variant='body1' className='info' > I am a goal-oriented professional who adapts quickly to new technologies and is capable of contributing effectively in any development field to achieve project objectives. I am a strong problem solver, a team player, and committed to delivering high-quality solutions on time.
</Typography>
  </Grid>
  </Grid>
    </Container>
  </Box>
  </>
}

export default About