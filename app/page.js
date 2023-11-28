'use client'
import { Card, Row, Col } from 'antd';

const ShowcaseComponent = () => {
  // Replace the following data with your actual website details
  const websites = [
    {
      title: 'Question Paper',
      description: 'Simplify question papers',
      imageUrl: '/images/paper.png',
      link: 'https://papergenie.co.in/',
    },
    {
      title: 'Notes App',
      description: 'Collaborative notes',
      imageUrl: '/images/notzzz.png',
      link: 'https://notzzz.sset.co.in/',
    },
    {
      title: 'Venue Reservation',
      description: 'Event venue booking',
      imageUrl: '/images/venue.png',
      link: 'https://venue.sset.co.in/',
    },
    {
      title: 'Shift Arranger',
      description: 'Efficient scheduling',
      imageUrl: '/images/attendance.png',
      link: 'https://attendence.sset.co.in/',
    },
  ];

  return (
    <div className='wrapper'>
      {websites.map((website, index) => (
        <div key={index} >
          <Card
            hoverable
            style={{ width: 240, margin: '20px 0' }}
            cover={<img alt={website.title} src={website.imageUrl} />}
          >
            <Card.Meta title={website.title} description={website.description} />
            <a href={website.link} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ShowcaseComponent;
