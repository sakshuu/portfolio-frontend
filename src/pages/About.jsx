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
      <Typography variant='h5'>  a passionate Frontend & Full-Stack Developer</Typography>
      </Box>
      <Typography variant='body1' className='info'>

     with 3+ years of experience building modern, responsive, and high-performance web applications.
</Typography>
      <Typography variant='body1' className='info'>
I specialize in frontend engineering with React.js, Next.js, TypeScript, and JavaScript, alongside state management using Redux Toolkit and responsive UI design with Tailwind CSS, Material UI, and Bootstrap. Additionally, I have hands-on experience in full-stack development using the MERN stack (Node.js, Express.js, MongoDB) and REST API integrations.
</Typography>
      <Typography variant='body1' className='info' > Over the years, I’ve worked on diverse real-world products including e-commerce platforms, job portals, video platforms, admin dashboards, and marketplace products. I focus on writing clean, maintainable code, building reusable UI design systems, and incorporating emerging technologies like AI integrations to create seamless user experiences.
</Typography>
      <Typography variant='body1' className='info' > I am a strong problem solver, proactive team player, and fast learner who thrives in fast-paced development environments.
</Typography>
  </Grid>
  </Grid>
    </Container>
  </Box>
  </>
}

export default About