import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import "./../assets/css/resume.css"

const Experience = () => {

  const experiences = [
  
      
    {
      year:"Feb 2024 – Mar 2025",  
      compunyName:"gofloww, (Full Time)",  
      role:"Worked as Frontend Developer",  
      desc:"Developed HR, Accounting, and Mail modules using Vue.js. Converted Figma designs into production-ready applications. Built responsive UI for desktop and mobile platforms. Increased operational productivity by 75% and reduced errors by 20%. Implemented real-time attendance and task analytics. Improved system efficiency by 30%",
      id:"1"
    },
      {
      year:"April 2025 - Present",  
      compunyName:"Umar zone infotech",  
      role:"Worked as Frontend Developer",  
      desc:"Contributed to brainstorming for new feature implementation. Built 35+ production-ready responsive pages using Next.js and reusable components.Built scalable UI architecture using structured SCSS and nested CSS for better maintainability. Built a WordPress-like CMS with reusable templates supporting multi-site and multi-tenant deployments. Created newsletter functionality for email notifications. Enhanced API handling with loading states, error handling, and retry mechanisms. Ensured cross-browser compatibility and responsive design across multiple devices. Collaborated with backend engineers and product teams to deliver scalable features on time. Maintained software version control using GitHub release tags.",
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