import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import "./../assets/css/resume.css"

const Experience = () => {

  const experiences = [
  
      
    {
      year:"Jan 2023 – Jan 2024",  
      compunyName:"Banao Technologies (Remote)",  
      role:"Worked as Frontend Developer (UI)",  
      desc:"Created modern, responsive, and pixel-perfect UI using React.js, HTML5, CSS3, and JavaScript, leveraging various CSS frameworks like Bootstrap and Tailwind.",
      id:"1"
    },
    {
      year:"Feb 2024 – Mar 2025",  
      compunyName:"gofloww, (Full Time)",  
      role:"Worked as Frontend Developer",  
      desc:"Developed HR, Accounting, and Mail modules, integrating REST APIs for efficient data handling. Converted Figma designs into SEO-friendly, responsive, production-ready web applications. Improved application performance using lazy loading, code splitting, and other optimization techniques. Implemented real-time attendance and task analytics, enhancing system functionality. Increased operational productivity by 75%, reduced errors by 20%, and improved overall system efficiency by 30%.",
      id:"2"
    },
      {
      year:"April 2025 - Present",  
      compunyName:"Umar zone infotech",  
      role:"Worked as Frontend Developer",  
      desc:"Contributed to brainstorming sessions for new feature implementations. Developed over 35+ production-ready responsive pages using Next.js and reusable components. Built scalable UI architecture using structured SCSS and nested CSS for better maintainability. Developed a WordPress-like CMS featuring reusable templates that support multi-site and multi-tenant deployments. Created newsletter functionality for email notifications. Enhanced API handling with loading states, error handling, and retry mechanisms. Ensured cross-browser compatibility and responsive design across multiple devices. Collaborated with backend engineers and product teams to deliver scalable features on time. Maintained software version control using GitHub release tags. Implemented microservices architecture across frontend and backend for scalable and modular development.",
      id:"3"
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