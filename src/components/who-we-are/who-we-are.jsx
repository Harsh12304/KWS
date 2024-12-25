import React from 'react';

const WhoWeAre = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#f9f9f9',
            margin: 0,
        }}>
            <header style={{
                color: '#5444CB',
                fontFamily: 'Merriweather, serif',
                fontSize: '2.5rem',
                textAlign: 'center',
                marginBottom: '20px',
            }}>
                WHO WE ARE
            </header>
            <div style={{
                maxWidth: '800px',
                textAlign: 'center',
                fontSize: '1.1rem',
                lineHeight: '1.6',
                color: '#333',
            }}>
                <p>
                    Welcome to our organization! We are a dedicated team of professionals and enthusiasts committed to making a difference in our community and beyond. Our mission is to empower individuals and create sustainable opportunities for growth and development.
                </p>
                <p>
                    Through innovation, collaboration, and a steadfast commitment to our core values, we strive to inspire and lead positive change. Join us on our journey as we work together to achieve meaningful impact and create a brighter future for everyone.
                </p>
            </div>
        </div>
    );
};

export default WhoWeAre;
