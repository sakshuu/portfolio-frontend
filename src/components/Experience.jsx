import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import "./../assets/css/resume.css"

const Experience = () => {

  const experiences = [
  
      
    {
      year:"Feb 2024 – Mar 2025",  
      compunyName:"gofloww, (Full Time)",  
      role:"Worked as Frontend Developer",  
      desc:"Developed and maintained a console website for accounting, mail, and HR modules, increasing productivity by 75% and reducing errors by 20%. Designed responsive user interfaces using Vue.js, converting Figma designs into high performance web applications optimized for desktop and mobile devices. Implemented real-time analytics for task assignment and attendance monitoring, improving operational efficiency by 30%. Collaborated with cross-functional teams to deliver user centric web applications on time, ensuring high-quality results. Contributed to the development of the Raru Group website, enhancing user experience and engagement",
      id:"1"
    },
      {
      year:"April 2025 - Present",  
      compunyName:"Umar zone infotech",  
      role:"Worked as Frontend Developer",  
      desc:"Led frontend development of 35+ responsive pages for the i2OK multi-tenant platform, building reusable UI components and managing complex state using React Hooks. Integrated REST APIs for real-time data rendering and role-based workflows, collaborating with backend and product teams to deliver scalable, client-specific solutions.",
      id:"2"
    },
   
  
   

    
   ];
  return <>
  {
    experiences.map(item=> (
<Card 
data-aos="fade-down"
data-aos-duration="3000"
sx={{backgroundColor:"#080808", color:"white", padding:'22px', minHeight: "250px", marginTop:"15px"}} >
  <Box>
          <span className="badges">{item?.year}</span>
  </Box>
      <CardContent>
   <Typography gutterBottom variant="body1" >{item?.compunyName}</Typography>
        <Typography variant="h6" sx={{color:"#DA70D6"}}>{item?.role}</Typography>
        <Typography variant="body2" sx={{marginTop:"10px"}}>{item?.desc}</Typography>
      </CardContent>
    </Card>

    ))
  }
  </>
}

export default Experience