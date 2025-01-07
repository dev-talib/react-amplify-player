import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Container, Navbar, Nav, Offcanvas, Image, Dropdown, Button, Form, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';
// import LoginModal from '../LoginModal/LoginModal'; 
import styles from './NavBar.module.css';

// Sample players list
const players = [];

function NavBar() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [showDropdown, setShowDropdown] = useState(false); 
  const [showLoginModal, setShowLoginModal] = useState(false); 
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  const toggleDropdown = () => setShowDropdown(prev => !prev);
  const toggleLoginModal = () => setShowLoginModal(prev => !prev);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query) {
      // Filter players based on search query
      setFilteredPlayers(players.filter(player => player.toLowerCase().includes(query.toLowerCase())));
    } else {
      setFilteredPlayers([]);
    }
  };

  const authenticatedLinks = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/player-hub', label: 'PlayerHub' },
    { to: '/leaderboard', label: 'LeaderBoard' },
  ];

  const unauthenticatedLinks = [
    { to: '/about', label: 'About' },
    { to: '/news', label: 'News' },
    { to: '/how-to-play', label: 'How to Play' },
  ];

  const navLinks = isAuthenticated ? authenticatedLinks : unauthenticatedLinks;

  return (
    <>
      <Navbar expand="lg" className={`${styles.navbar} bg-body-tertiary mb-3 shadow`} fixed="top">
        <Container fluid className={styles.navContainer}>
          <Navbar.Brand as={Link} to="/">
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="brand-logo" className={styles.brandLogo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" className={styles.customNavbarToggle} />
          <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img src={process.env.PUBLIC_URL + '/mycodecafe_logo.svg'} alt="brand-logo" className={styles.brandLogo} />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className={styles.navbarList}>
                {navLinks.map(({ to, label }) => (
                  <Nav.Link as={Link} to={to} className={styles.navbarItem} key={to}>{label}</Nav.Link>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          {isAuthenticated && (
            <div className={styles.navbarCenter}>
              <Form.Control
                type="text"
                placeholder="Search players..."
                value={searchQuery}
                onChange={handleSearch}
                className={styles.searchBar}
              />
              {filteredPlayers.length > 0 && (
                <ListGroup className={styles.suggestionsList}>
                  {filteredPlayers.map((player, index) => (
                    <ListGroup.Item key={index} className={styles.suggestionItem}>
                      {player}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </div>
          )}

          <div className={styles.navbarRight}>
            {isAuthenticated ? (
              <>
                <Dropdown show={showDropdown} align="end" onMouseLeave={handleMouseLeave}>
                  <Dropdown.Toggle
                    as={Image}
                    src="https://www.svgrepo.com/show/382101/male-avatar-boy-face-man-user.svg"
                    roundedCircle
                    onMouseEnter={handleMouseEnter}
                    onClick={toggleDropdown}
                    className={styles.profilePicture}
                  />
                  <ProfileDropdown showDropdown={showDropdown} toggleDropdown={toggleDropdown} />
                </Dropdown>
              </>
            ) : (
              <Button variant="primary" onClick={toggleLoginModal} className={styles.loginButton}>Login</Button>
            )}
          </div>
        </Container>
      </Navbar>

      {/* <LoginModal show={showLoginModal} handleClose={toggleLoginModal} /> */}
    </>
  );
}

export default NavBar;
