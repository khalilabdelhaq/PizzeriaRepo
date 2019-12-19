import React from 'react'
import { AppBar, Typography, Toolbar, Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'


const NavBarPage = (props) => {
  const { title } = props;
  return (
    <div>
      <AppBar position="static" >
        <Container>
          <Toolbar color="green">
            <Typography variant="h5" className="className">
              {title}
            </Typography>
            <Link className="className" to="/" ><Button className="navButton" >Administration</Button></Link>
            <Link className="className" to="/nouveau" ><Button className="navButton">Nouveau commande</Button></Link>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}
export default NavBarPage;
