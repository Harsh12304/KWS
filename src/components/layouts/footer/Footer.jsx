'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footerWrapper}>
      <div style={styles.container}>
        {/* Logo Section - Left Aligned */}
        <div style={styles.logoSection}>
          <img src="/kws-logo.png" alt="Logo" style={styles.logo} />
        </div>

        {/* Address Section - Centered in the Footer */}
        <div style={styles.addressSection}>
          <h3 style={styles.sectionHeading}>Address</h3>
          <p style={styles.addressText}>Basement of Building no.6,</p>
          <p style={styles.addressText}>Al Qatami St.,</p>
          <p style={styles.addressText}>Block 10, Salmiya, Kuwait</p>
        </div>

        {/* Social Media Section - Right Aligned */}
        <div style={styles.socialSection}>
          <h3 style={styles.sectionHeading}>Let’s Socialize</h3>
          <div style={styles.socialIcons}>
            <a href="#" style={styles.iconLink}><img src="/instagram.jpg" alt="Instagram" style={styles.icon} /></a>
            <a href="#" style={styles.iconLink}><img src="/facebook.jpg" alt="Facebook" style={styles.icon} /></a>
            <a href="#" style={styles.iconLink}><img src="/twitter.jpg" alt="Twitter" style={styles.icon} /></a>
            <a href="#" style={styles.iconLink}><img src="/linkedin.jpg" alt="LinkedIn" style={styles.icon} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footerWrapper: {
    backgroundColor: '#ffffff', // Changed background to white
    padding: '40px 20px', // Enlarged footer size with increased padding
    color: '#000', // Text color to ensure readability on white background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)', // Added slight shadow for better visibility
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    flexWrap: 'wrap', // Ensures proper alignment on smaller screens
  },
  logoSection: {
    flex: '1 1 33%',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  logo: {
    height: '200px', // Enlarged logo size
    marginRight: '40px',
  },
  addressSection: {
    flex: '1 1 33%', // Center the address section
    textAlign: 'center',
  },
  sectionHeading: {
    fontSize: '20px', // Slightly larger heading size
    fontWeight: '600',
    marginBottom: '10px',
  },
  addressText: {
    fontSize: '16px', // Enlarged font size for better readability
    margin: '5px 0',
  },
  socialSection: {
    flex: '1 1 33%',
    textAlign: 'right',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'flex-end', // Align icons to the right
    gap: '10px',
  },
  iconLink: {
    textDecoration: 'none',
  },
  icon: {
    height: '40px', // Enlarged icon size
    width: '40px',
  },
};

export default Footer;
