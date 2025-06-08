const axios = require('axios');
const { HUBSPOT_AUTH_TOKEN } = require('./config');

const createVideoGameSchema = async () => {
  try {
    console.log('Creating a custom schema on HubSpot...');
    
    const response = await axios.post(
      'https://api.hubapi.com/crm/v3/schemas',
      {
        name: 'video_game',
        labels: {
          singular: 'Video Game',
          plural: 'Video Games',
        },
        primaryDisplayProperty: 'name',
        properties: [
          {
            name: 'name',
            label: 'Name',
            type: 'string',
            fieldType: 'text',
            isPrimaryDisplayLabel: true,
          },
          {
            name: 'genre',
            label: 'Genre',
            type: 'string',
            fieldType: 'text',
          },
          {
            name: 'price',
            label: 'Price',
            type: 'number',
            fieldType: 'number',
          },
        ],
        requiredProperties: ['name'],
      },
      {
        headers: {
          Authorization: `Bearer ${HUBSPOT_AUTH_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('Schema created successfully:', response.data);
  } catch (error) {
    console.error('Error creating schema:', error.response.data);
  }
};

createVideoGameSchema();
