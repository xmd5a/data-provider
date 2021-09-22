import * as R from 'ramda';

import { GetProjectDetailsResponse, GetProjectFeaturedIdResponse, GetProjectsResponse } from '../contracts';

const projectDetails_1: GetProjectDetailsResponse = {
  id: '1',
  type: 'Efficient cook stoves',
  co2_price_per_ton: {
    amount: 133,
    currency: 'EUR',
  },
  yearly_reduction: 43234000000000,
  gallery: {
    main_picture: 'https://via.placeholder.com/150',
    additional_pictures: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
  },
  title: 'title 1',
  description: {
    text: 'Locally produced efficient Upesi stove',
    text_ext: 'Any long text here',
  },
  certificate: {
    name: 'Gold Standard',
    url: 'https://via.placeholder.com/70',
  },
  sdg: [
    {
      symbol: 'no_poverty',
      description:
        'Households benefit from having to spend less time for collecting firewood. A household saves on average 124 hours per year.',
    },
    { symbol: 'climate_action', description: 'Each stove avoids about 3.3 t CO2e per year.' },
  ],
  project_of_month: true,
  website: 'https://www.project.com',
  project_operator: {
    name: 'myclimate',
    url: 'https://via.placeholder.com/70',
  },
  country: 'Kenya, Kakamega',
};

const projectDetails_2: GetProjectDetailsResponse = {
  id: '2',
  type: 'Water (Purification & Saving)',
  co2_price_per_ton: {
    amount: 333.2,
    currency: 'EUR',
  },
  yearly_reduction: 61399000000,
  gallery: {
    main_picture: 'https://via.placeholder.com/150',
    additional_pictures: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
  },
  title: 'title 2',
  description: {
    text:
      '<b>Less Deforestation of the Rainforest due to Efficient Cook Stoves in Kenya</b> <p></p>Locally produced efficient Upesi stoves reduce wood consumption in Kenya and help to preserve the unique vegetation and biodiversity of Kakamega rainforest.</p>',
    text_ext:
      '<p>The stoves have a cleaner burning process and thus decrease indoor air pollution and associated acute respiratory infections in women and children. Moreover, savings in burning unsustainably harvested fuel wood cut down CO₂&nbsp;emissions.</p><p>Tens of thousands of efficient cook stoves were installed in rural households in communities adjacent to Kakamega Forest in Western Kenya since the start of the project. Kakamega rainforest is Kenya&rsquo;s last remnant lowland indigenous forest and is home to an immense variety of unique and threatened animals and plants. The northern part is a protected area belonging to the Kakamega National Reserve. Despite having a protected status, Kakamega forest is severely damaged and degraded due to the pressure on its resources. The surrounding area is one of the densest populated rural regions of the world (&gt; 500 inhabitant/km2) and 90 percent&nbsp;of the people depend on forest resources for fuel wood and livelihood. The Kakamega Forest has lost almost 50 percent&nbsp;of its area since it was formally gazetted in 1933.&nbsp;</p><p><em>&ldquo;I am happy. Before I had the cook stove, I had to go to the forest every day, which is a 15-20km walk with all the heavy wood on my head. Now I only have to go to the forest twice a week.&rdquo;</em></p><p><em>Susan Muyanzi, 33 years, 2 children, Lusero, Kakamega, Kenya</em></p><p>Households in the project area used to cook on a traditional three-stone fireplace and women and also girls spent an average of 15 hours per week collecting fuel wood from Kakamega forest for home use. Poverty rate around Kakamega Forest is above 60 percent and unemployment above 25 percent. This called for a simple, affordable and locally produced efficient stove technology to reduce wood consumption and preserve unique vegetation and biodiversity of Kakamega Forest. The project therefore identified the efficient Upesi cook stove as an appropriate technology for this region. Nowadays, 90 per cent of all households in 3-5 kilometres distance to the rainforest have an efficient cook stove &ndash; a great success!</p><p>The Upesi stove is a natural ceramic stove and is 35-50 percent more efficient than the three-stone stove. It is manufactured and marketed at a subsidized price by local potter groups. The efficient stove is not a portable stove, but is being fix installed in households. This is more convenient for cooking since traditional dishes such as Ugali (made from maize flour) need to be stirred during preparation process.&nbsp;</p><p><em>&ldquo;As an old woman, I am happy that my daughters and their daughters will not have to endure the smoky hot 3-stone fires that I have lived with all my life.&rdquo;</em></p><p><em>Mama Fridah, Kakamega, Kenya</em></p><p>The project creates local jobs, women and girls are not any longer exposed to the smoky open fires and have to spend less time on collecting firewood. A lot of women use this time for an income such as beekeeping or chamomile products. Such small business opportunities which generate a regular income are essential for the people in rural Kenya to get independent &ndash; which is very important to be able to develop long-term perspectives.</p><p>The project is developed and implemented by the US-Kenyan organisation Eco2librium.&nbsp;2018, Eco2librium was being honored again as&nbsp;<a href="https://bthechange.com/best-for-the-world-2018-all-honorees-f30a880f8ac0" target="_blank">Best for the World</a>&nbsp;among Global B Corporations and also being called&nbsp;<a href="https://www.forbes.com/sites/jaycoengilbert/2018/09/05/203-actual-changemakers-first-movers-taking-the-lead/#4346fe4704d8" target="_blank">Changemakers</a>&nbsp;&ndash; those companies in the world taking the lead.</p>',
  },
  certificate: {
    name: 'Gold Standard',
  },
  sdg: [{ symbol: 'good_health', description: '94% of beneficiaries say that indoor air quality has improved.' }],
  project_of_month: false,
  website: 'https://www.project.com',
  project_operator: {
    name: 'myclimate',
    url: 'https://via.placeholder.com/70',
  },
  country: 'Uganda',
};

const projectDetails_3: GetProjectDetailsResponse = {
  id: '3',
  type: 'Water (Purification & Saving)',
  co2_price_per_ton: {
    amount: 666,
    currency: 'EUR',
  },
  yearly_reduction: 34399000000,
  gallery: {
    main_picture: 'https://via.placeholder.com/150',
    additional_pictures: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
  },
  title: 'title 3',
  description: {
    text: 'The primary objective of the programme is to disseminate water purification',
    text_ext:
      'The primary objective of the programme is to disseminate water purification systems to low-income households and institutions such as schools, starting in Uganda.',
  },
  certificate: {
    name: 'Gold Standard',
  },
  sdg: [{ symbol: 'good_health', description: '94% of beneficiaries say that indoor air quality has improved.' }],
  project_of_month: false,
  website: 'https://www.project.com',
  project_operator: {
    name: 'myclimate',
  },
  country: 'Uganda',
};

const projectDetails = [projectDetails_1, projectDetails_2, projectDetails_3];

export const getProjectDetails = (id: string) => R.find<GetProjectDetailsResponse>(R.propEq('id', id))(projectDetails);

export const projectsList: GetProjectsResponse = {
  projects: [
    {
      id: '1',
      co2_price_per_ton: {
        amount: 133,
        currency: 'EUR',
      },
      gallery: {
        main_picture: 'https://via.placeholder.com/150',
        additional_pictures: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
      },
      title: 'title 1',
      project_of_month: true,
    },
    {
      id: '2',
      co2_price_per_ton: {
        amount: 333.2,
        currency: 'EUR',
      },
      gallery: {
        main_picture: 'https://via.placeholder.com/150',
        additional_pictures: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
      },
      title: 'title 2',
      project_of_month: false,
    },
    {
      id: '3',
      co2_price_per_ton: {
        amount: 666,
        currency: 'EUR',
      },
      gallery: {
        main_picture: 'https://via.placeholder.com/150',
        additional_pictures: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
      },
      title: 'title 3',
      project_of_month: false,
    },
  ],
};

export const projectFeaturedId: GetProjectFeaturedIdResponse = {
  project_id: '1',
};
