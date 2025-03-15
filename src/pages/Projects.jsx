import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import "./../assets/css/myprojects.css"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import { Link } from 'react-router-dom';
import { Tic_tac_too, bollybook, protfolio, red_bus, student, weather_app, youTubeClone } from '../assets/images/projects';


const Projects = () => {

  const projects = [
    {
      title:"My Protfolio",  
      hostedLink:"https://git-protfolio.vercel.app/",
      GithubLink:"https://github.com/sakshuu/git-protfolio",
      img: protfolio,
      desc:"My portfolio project showcases my skills as a frontend developer using React JS. The website includes a home page, project page, and about me section, highlighting my work and experience. The website is designed to be visually appealing and easy to navigate, demonstrating my ability to create responsive and dynamic user interfaces.",
      id:1,
    },
    {
      title:"YouTube Clone",  
      hostedLink:"https://you-tube-clone-ruby.vercel.app/",
      GithubLink:"https://github.com/sakshuu/you-tube_clone",
      img: youTubeClone,
      desc:"In this project fully functional & fully responsive youtube clone single page application with react js, tailwind css & rapid api, core concepts of react js such as jsx, components, props, state,  conditional rendering, lists, keys & context api and build more complex logics in javascript to make my react application super interactive and good looking",
      id:2,
    },
    {
      title:"Student Management",  
      hostedLink:"https://github.com/sakshuu/student_data",
      GithubLink:"https://github.com/sakshuu/student_data",
      img: student,
      desc:"A student management system is a CRUD app using Redux in the frontend. Features include adding new students, viewing all students, editing/deleting student records, and searching by name/ID. It's a powerful tool for teachers and admins to manage student info efficiently.",
      id:6,
    },
    {
      title:"BollyBook",  
      hostedLink:"https://github.com/sakshuu/bollybook-movieBookingWebApp-",
      GithubLink:"https://github.com/sakshuu/bollybook-movieBookingWebApp-",
      img: bollybook,
      desc:"My movie booking project is a user-friendly app built with React JS, Redux, and Bootstrap. Users can search, view details, and book movie tickets. The app's real-time updates and efficient state management ensure smooth performance, making it ideal for online movie ticket booking. (currently working)",
      id:3,
    },
    {
      title:"Bus-Booking",  
      hostedLink:"https://bus-gray-six.vercel.app/",
      GithubLink:"https://github.com/sakshuu/bus",
      img: red_bus,
      desc:"The bus booking app is similar to the RedBus booking app. I am currently working on the UI. You can see the progress by clicking on the GitHub and hosted link below.",
      id:3,
    },
    {
      title:"Weather App",  
      hostedLink:"https://sakshuu.github.io/whather_app/",
      GithubLink:"https://github.com/sakshuu/whather_app",
      img: weather_app,
      desc:"My Weather App Project is a user-friendly app built  in javascript  and Bootstrap. Users can search and view details Weather of any city. The app's real-time updates and  smooth performance, making it ideal for online Weather App booking",
      id:4,
    },
    {
      title:"Tic-tac-too",  
      hostedLink:"https://sakshuu.github.io/tic-tac-toe/",
      GithubLink:"https://github.com/sakshuu/tic-tac-toe",
      img: Tic_tac_too,
      desc:"My Tic-tac-too project is a user-friendly app built  in javascript and Bootstrap with animation of GSAP animation. Users can view the score details of win. The app's real-time updates and smooth performance, making it ideal for Tic-tac-too game application",
      id:5,
    },
    
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
                  <Link to={item?.hostedLink}>
                    <Button variant="contained" color="secondary" className='main-btn' startIcon={<VisibilityOutlinedIcon />}>Hosted</Button>
                  </Link>
                  <Link to={item?.GithubLink}>
                    <Button variant="contained" color="secondary" className='main-btn' startIcon={<CodeOutlinedIcon />}>Github</Button>
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