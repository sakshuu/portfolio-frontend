import { Box, Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import "./../assets/css/myprojects.css"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import { Link } from 'react-router-dom';
import { Jobsy, Tic_tac_too, bollybook, compunywebsite, jobly, protfolio, red_bus, student, thebutterflypune, weather_app, youTubeClone,  } from '../assets/images/projects';
import Button from '@mui/material/Button';
import { e2de, isro, language, ms_cit } from '../assets/images/certificates';



const Projects = () => {

  const projects = [
    {
      title:"My Protfolio",  
      hostedLink:"https://portfolio-frontend-thm6.onrender.com",
      GithubLink:"https://github.com/sakshuu/portfolio-frontend",
      img: protfolio,
      desc:"My portfolio project showcases my skills as a frontend developer using React JS. It includes a home page, project page, and about me section, designed to be visually appealing and easy to navigate. I also integrated a contact form using Nodemailer to enable visitors to send emails directly from the website, demonstrating my ability to connect frontend and backend technologies.",
      id:1,
    },
    {
      title:"StreamSphere",  
      hostedLink:"https://stream-sphere-client-side.vercel.app/",
      GithubLink:"https://github.com/sakshuu/StreamSphere-client-side",
      img: youTubeClone,
      desc:"In this project fully functional & fully responsive youtube clone single page application with react js, tailwind css & rapid api, core concepts of react js such as jsx, components, props, state,  conditional rendering, lists, keys & context api and build more complex logics in javascript to make my react application super interactive and good looking",
      id:2,
    },
     {
      title:"Jobsy",  
      hostedLink:"https://jobly-client-side.vercel.app",
      GithubLink:"https://github.com/sakshuu/jobly-client-side",
      img: Jobsy,
      desc:"Tech Stack: React.js, Node.js, Express.js, MongoDB, Redux Toolkit, JWT, Multer, Cloudinary, Tailwind CSS. Built a full-stack Job Portal with **role-based authentication** for Students and Recruiters using JWT. Developed Student and Recruiter dashboards with profile management, job posting, job applications, and application status tracking. Implemented resume upload using Multer + Cloudinary with recruiter resume download functionality. Created secure REST APIs and performed CRUD operations for users, companies, jobs, and applications. Managed global state using Redux Toolkit and built a responsive UI with React.js and Tailwind CSS.",
      id:3,
    },
    {
      title:"The Butterfly",  
      hostedLink:"https://butterflyclient.vercel.app/",
      GithubLink:"https://github.com/sakshuu/butterflyWeb",
      img: thebutterflypune,
      desc:"The Butterfly is a landing page designed using React.js for the frontend and Node.js with MongoDB for the backend. The UI is built with Bootstrap 5. The backend also uses Nodemailer for email functionality. This landing page is fully responsive across all device views. It uses CSS Grid for layout and includes navigation for seamless page transitions. Additionally, there is a 'Download PDF' button available for downloading the brochure.",
      id:4,
    },
    {
      title:"Company Website",  
      hostedLink:"https://company-website-demo-weo7.onrender.com/",
      GithubLink:"https://github.com/sakshuu/company-website/tree/master",
      img:compunywebsite,
      desc:"Company Website is a basic company website. For the frontend, I used React.js along with Tailwind CSS and pure CSS for styling. The backend is built using Node.js In the frontend, I integrated Swiper.js, bento grid layout, scroll effects, and various types of animations to enhance the user experience.",
      id:5,
    },
    {
      title:"Bus-Booking",  
      hostedLink:"https://msrtc-e-booking-ui.vercel.app/",
      GithubLink:"https://github.com/sakshuu/MSRTC-e-Booking-UI",
      img: red_bus,
      desc:"MSRTC Maharashtra Bus Booking System | React.js, Redux Toolkit, Node.js, Express.js, Razorpay, Vercel, Render. Developed a full-stack bus booking platform for travel between Maharashtra cities with route search, bus selection, 40-seat interactive layout, passenger validation, and digital ticket generation. Managed booking state including selected route, bus, seats, passenger details, payment data, and e-ticket information using Redux Toolkit. Integrated Razorpay Test Mode payment flow with server-side payment order creation and signature verification using Node.js and Express.js. Deployed the React frontend on Vercel and Node.js backend on Render with secure environment variable configuration and CORS support.",
      id:6,
    },
    // {
    //   title:"Student Management",  
    //   hostedLink:"https://github.com/sakshuu/student_data",
    //   GithubLink:"https://github.com/sakshuu/student_data",
    //   img: student,
    //   desc:"A student management system is a CRUD app using Redux in the frontend. Features include adding new students, viewing all students, editing/deleting student records, and searching by name/ID. It's a powerful tool for teachers and admins to manage student info efficiently.",
    //   id:6,
    // },
    // {
    //   title:"BollyBook",  
    //   hostedLink:"https://github.com/sakshuu/bollybook-movieBookingWebApp-",
    //   GithubLink:"https://github.com/sakshuu/bollybook-movieBookingWebApp-",
    //   img: bollybook,
    //   desc:"My movie booking project is a user-friendly app built with React JS, Redux, and Bootstrap. Users can search, view details, and book movie tickets. The app's real-time updates and efficient state management ensure smooth performance, making it ideal for online movie ticket booking. (currently working)",
    //   id:3,
    // },
    
    {
      title:"Weather App",  
      hostedLink:"https://whather-app-two.vercel.app/",
      GithubLink:"https://github.com/sakshuu/whather_app",
      img: weather_app,
      desc:"My Weather App Project is a user-friendly app built  in javascript  and Bootstrap. Users can search and view details Weather of any city. The app's real-time updates and  smooth performance, making it ideal for online Weather App booking",
      id:7,
    },
    {
      title:"Tic-tac-too",  
      hostedLink:"https://tic-tac-toe-bice-chi-92.vercel.app/",
      GithubLink:"https://github.com/sakshuu/tic-tac-toe",
      img: Tic_tac_too,
      desc:"My Tic-tac-too project is a user-friendly app built  in javascript and Bootstrap with animation of GSAP animation. Users can view the score details of win. The app's real-time updates and smooth performance, making it ideal for Tic-tac-too game application",
      id:8,
    },
    
];



 const certificates = [
    {
      title:"ISRO",  
      hostedLink:"https://drive.google.com/file/d/1JrTWRqLw5A1neL7ReN_-2bYMo6fp_ZFu/view?usp=sharing",
      img: isro,
      desc:"Overview of Geoprocessing using Python⁠",
      id:1,
    },
     {
      title:"C Language",  
      hostedLink:"https://drive.google.com/file/d/1PBLGnsMO2lMNl9axrVHvNB1JI00wriTY/view?usp=sharing",
      img: language,
      desc:"Participated in State-Level Programming Maniac in C Language⁠",
      id:2,
    },
     {
      title:"e2de",  
      hostedLink:"https://drive.google.com/file/d/1JrTWRqLw5A1neL7ReN_-2bYMo6fp_ZFu/view?usp=sharing",
      img: e2de,
      desc:"employability and enterepreneurship developement endeavour⁠",
      id:3,
    },
    // {
    //   title:"MS-CIT",  
    //   hostedLink:"https://drive.google.com/file/d/1JrTWRqLw5A1neL7ReN_-2bYMo6fp_ZFu/view?usp=sharing",
    //   // img: protfolio,
    //   desc:"⁠",
    //   id:4,
    // },
    //  {
    //   title:"Legacy JavaScript Algorithms and Data Structures V8",  
    //   hostedLink:"",
    //   img: ms_cit,
    //   desc:"(In Progress)⁠",
    //   id:5,
    // },
  
    
];

  return <>

<Box className="gradient">
      <Typography variant="h3" className="heading" component="h3">
        My Projects
      </Typography>

      <Container maxWidth="xl">
        <Grid container spacing={2} columns={12} sx={{ marginTop: "20px" }}>
          {projects.map(item => (
            <Grid item xs={12} sm={6} md={6} key={item.id}>
              <Card
                data-aos="zoom-in-up"
                data-aos-duration="800"
                sx={{
                  backgroundColor: "#080808",
                  color: "white",
                  padding: '18px',
                  height: '100%', // Ensure the card takes full height of the grid item
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Box
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="projectImg"
                  sx={{
                    height: '200px', // Fixed height for the image container
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img src={item?.img} className="projectSS" alt="ss"/>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography className="colorText" gutterBottom variant="h5" component="div">
                    {item?.title}
                  </Typography>
                  <Typography variant="body2" >
                    {item?.desc}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={item?.hostedLink} target="_blank"  rel="noopener noreferrer">
                    <Button variant="contained" color="secondary" className='main-btn' startIcon={<VisibilityOutlinedIcon />}>Hosted</Button>
                  </Link>
                  <Link to={item?.GithubLink}  target="_blank"  rel="noopener noreferrer">
                    <Button variant="contained" color="secondary" className='main-btn' startIcon={<CodeOutlinedIcon />}>Github</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>


       <Typography variant="h3" className="heading" component="h3">
     Certificates
      </Typography>

      <Container maxWidth="xl">
        <Grid container spacing={2} columns={12} sx={{ marginTop: "20px" }}>
          {certificates.map(item => (
            <Grid item xs={12} sm={6} md={6} key={item.id}>
              <Card
                data-aos="zoom-in-up"
                data-aos-duration="800"
                sx={{
                  backgroundColor: "#080808",
                  color: "white",
                  padding: '18px',
                  height: '100%', // Ensure the card takes full height of the grid item
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Box
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="projectImg"
                  sx={{
                    height: '200px', // Fixed height for the image container
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img src={item?.img} className="projectSS" alt="ss"/>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography className="colorText" gutterBottom variant="h5" component="div">
                    {item?.title}
                  </Typography>
                  <Typography variant="body2" >
                    {item?.desc}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={item?.hostedLink} target="_blank"  rel="noopener noreferrer">
                    <Button variant="contained" color="secondary" className='main-btn' startIcon={<VisibilityOutlinedIcon />}>certificate</Button>
                  </Link>
                
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  </>
}

export default Projects