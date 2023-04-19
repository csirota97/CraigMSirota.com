// eslint-disable-next-line import/no-anonymous-default-export
export default {
  'projectsStructure': [
    {
      type: 'directory',
      name: 'Professional',
      children: [
        {
          type: 'directory',
          name: 'Revenue Cycle Management - Cerner/Oracle',
          startDate: 'October 2020',
          children: [
            {
              type: 'project',
              name: 'Add Appointment Plus Accessibility Uplift',
              description: 'The Add Appointment Plus workflow was unusable for non-sited/low-sited users who rely on screenreaders and keyboard navigation. This project was to uplift all accessibility functionality so that the workflow met the AA level of the Web Content Accessibility Guidelines, version 2.1 (WCAG 2.1).',
              languages: 'ReactJS/SWT',
              startDate: 'April 2022',
              endDate: 'March 2023',
            },
            {
              type: 'project',
              name: 'Screen Reader Embedded Browser Investigation',
              description: 'During the Add Appointment Plus Accessibility Uplift, it was discovered that many of our workflows, including the Add Appointment Plus workflow, that used an embedded SWT browser, were not being read by the screen reader. I led a team of engineers of various technical backgrounds, user experience designers, and regulatory personnel to find a resolution for this issue.',
              languages: 'SWT',
              startDate: 'October 2022',
              endDate: 'January 2023',
            },
            {
              type: 'project',
              name: 'Location Based Scheduling',
              description: "This project was to resolve a bug that would occur when a user would try to schedule an appointment, but they were in a timezone behind where the database is stored. When the database's timezone had passed midnight, but the user's timezone had not, appointments would be scheduled for one day later than they were supposed to.",
              languages: 'CCL',
              startDate: 'April 2022',
              endDate: 'May 2022'
            },
            {
              type: 'project',
              name: 'Location Description Enter Information',
              description: 'This project added a configuration to the Enter Information dialog within the Add Appointment Plus workflow of Revenue Cycle. This configuration allowed system admins to set whether the location search searched the database by either location name or location description. The project involved changes all across the tech stack, including the React front end, the Java server, the Java SWT based configuration tool, and the MySQL database queries.',
              languages: 'Java/SQL/ReactJS',
              startDate: 'January 2022',
              endDate: 'April 2022',
            },
            {
              type: 'project',
              name: 'Kiosk Profiles Admin Build Tool React Uplift',
              description: '',
              languages: 'ReactJS/Ruby On Rails',
              startDate: 'July 2021',
              endDate: 'December 2021',
            },
            {
              type: 'project',
              name: 'Scheduling Security Server Optimization',
              description: '',
              languages: 'C++',
              startDate: 'March 2021',
              endDate: 'June 2021',
            },
            {
              type: 'project',
              name: 'Manual Scheduling Uplift',
              description: '',
              languages: 'ReactJS',
              startDate: 'October 2020',
              endDate: 'March 2021',
            }
          ]
        },
      ]
    },
    {
      type: 'directory',
      name: 'Personal',
      children: [
        {
          type: 'project',
          name: 'CraigMSirota.com',
          description: '',
          languages: 'ReactJS',
          startDate: 'March 2023',
        },
        {
          type: 'project',
          name: 'ALVAN',
          description: '',
          languages: 'ReactJS/Flask/SQL',
          startDate: 'February 2020',
          links: [['adsf','asdfa'],['fdsfds','fdsfsd']],
        },
      ]
    }
  ]
}