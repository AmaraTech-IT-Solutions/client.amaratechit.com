
const LinkData = [
    
  {
    id:1,
    navitem: 'IT Consulting',
    submenu: true,
    portfolio:'Expert IT consultancy',
    src:`https://media.amaratechit.com/wp-content/uploads/2022/10/it.png`,
    sublinks: [
      {
        id:11,
        subnav: 'Migration & Sync',
        link: '/migration-sync',
        
      },
      {
        id:12,
        subnav: 'Hosting',
        link: '/hosting',
      },
     
      {
        id:13,
        subnav: 'Unified Communication',
        link: '/uc',
      },
    ],
  },
  {
    id:2,
    navitem: 'Technology',
    submenu: true,
    portfolio:'Our Cloud Solutions',
    src:`https://media.amaratechit.com/wp-content/uploads/2022/10/cloud.png`,
    sublinks: [
     
      {
        id:21,
        subnav: 'Microsoft Azure',
        link: '/microsoft-azure',
      },
      {
        id:22,
        subnav: 'Google Cloud',
        link: '/google-cloud',
      },
      
      {
        id:23,
        subnav: 'Google Education',
        link: '/google-edu',
      },
      
     
    ],
  },
  {
    id:3,
    navitem: 'Digital Services',
    submenu: true,
    portfolio:'Digital transformation',
    src:`https://media.amaratechit.com/wp-content/uploads/2022/10/digital.png`,
    sublinks: [
     
      {
        id:31,
        subnav: 'App Development',
        link: '/app-dev',
      },
      {
        id:32,
        subnav: 'Video Conferencing',
        link: '/video-conferencing',
      },
      {
        id:33,
        subnav: 'Web Development',
        link: '/webdev',
      },
     
    ],
  },
  {
    id:4,
    navitem: 'Procurement',
    submenu: true,
    portfolio:'We are your trusted advisor',
    src:`https://media.amaratechit.com/wp-content/uploads/2022/10/proc.png`,
    sublinks: [
      {
        id:41,
        subnav: 'Software & Hardware',
        link: '/software-hardware',
      },
    
      {
        id:42,
        subnav: 'POS System',
        link: '/pos',
      },
   
    ],
  },
  {
    id:5,
    navitem: 'About Us',
    submenu: true,
    portfolio:'AmaraTech is rooted in innovative IT.',
    src:`https://media.amaratechit.com/wp-content/uploads/2022/10/about.png`,
    sublinks: [
      {
        id:51,
        subnav: 'Mission & Vision',
        link: '/me',
      },
    
      {
        id:52,
        subnav: 'Careers',
        link: '/careers',
      },
     
    ],
  },
 

 
];

export default LinkData;