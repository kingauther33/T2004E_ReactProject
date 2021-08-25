import React from 'react';

const Header = () => {
	return (
		<>
			<div className={styles['Nav']}>
        <div className={styles['Bar']}/>
  
        <div className={styles['NavMenu']}>
          <Link className={styles['NavLink']} to='/about-us' activeStyle>
            About Us
          </Link>
          <Link className={styles['NavLink']} to='/campaigns' activeStyle>
            Campaigns
          </Link>
          <Link className={styles['NavLink']} to='/contact-us' activeStyle>
            Contact Us
          </Link>
          <Link className={styles['NavLink']} to='/events' activeStyle>
            Events
          </Link>
          <Link className={styles['NavLink']} to='/recipes' activeStyle>
            Recipes
          </Link>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </div>
        <div className={styles['NavBtn']}>
          <Link className={styles['NavBtnLink']} to='/signin'>Sign In</Link>
        </div>
      </div>
		</>
	);
};

export default Header;
