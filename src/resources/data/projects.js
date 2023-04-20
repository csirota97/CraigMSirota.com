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
              description: 'The goal of this project was to uplift a user workflow from a Ruby On Rails based front end to a React front end, while maintaining the Rails backend.',
              languages: 'ReactJS/Ruby On Rails',
              startDate: 'July 2021',
              endDate: 'December 2021',
            },
            {
              type: 'project',
              name: 'Scheduling Security Server Optimization',
              description: 'The goal of this project was to optimize the performance of our security server.<br>'+
              'The database maintained a row for each permission given to each user, with 17 possible permissions. When many of users had every type of permission, querying that database had massive performance problems.<br>The solution was to add a permission type "all" to the table, which when a user had every permission, would reduce the database from 17 rows for the user to just a single row.',
              languages: 'C++',
              startDate: 'March 2021',
              endDate: 'June 2021',
            },
            {
              type: 'project',
              name: 'Manual Scheduling Uplift',
              description: 'The goal of this project was to uplift our "Manual Scheduling" workflow from Java SWT to React.',
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
          description: 'This is the website you are currently on! It\'s a personal portfolio website, '+
          'showcasing my skills and highlighting my projects. The website is heavily inspired by late 90\'s era '+
          'personal computer operating systems.',
          languages: 'ReactJS',
          startDate: 'March 2023',
          links: [
            ['https://github.com/csirota97/CraigMSirota.com','Github Repo'],
          ],
        },
        {
          type: 'project',
          name: 'ALVAN',
          description: '<b>Automated Live Virtual Assistant Network</b><hr>'+
            'ALVAN is a virtual assistant network, similar to the Google Home ecosystem. '+
            '<p>The main ALVAN hub is designed to be run on an android tablet through the ALVAN HUB app. '+
            'The hub can be interacted with via voice command, activated by the keyword <b><i>ALVAN</i></b>. '+
            'The UI shows the user all reminders they set have for the current day, and the following two days, '+
            'along with showing the weather forecast for each day.</p>'+
            '<p>Currently in development is ALVAN Security, a security camera app to connect into the ALVAN '+
            'ecosystem. These camera feeds will also be displayed in the ALVAN Hub.</p>'+
            '<p>The ALVAN List app gives the user a way to visually add/delete/edit todo lists and reminders. '+
            'It is designed to be run through the ALVAN List app on an android phone. ' + 
            'The reminders can currently be added and queried through the hub\'s voice command as well.</p>',
          languages: 'ReactJS/Flask/SQL/Firebase',
          startDate: 'February 2020',
          links: [
            ['https://github.com/csirota97/ALVAN-V4','UI and API Repo'],
            ['https://github.com/csirota97/ALVAN-V4-Security','ALVAN Security Repo'],
            ['https://github.com/csirota97/alvan_hub_app','ALVAN HUB Android Client Repo'],
            ['https://github.com/csirota97/alvan_list_app','ALVAN List Android Client Repo'],
            ['https://csirota97.github.io/ALVAN-V4/','Live ALVAN HUB'],
            ['https://csirota97.github.io/ALVAN-V4/#/todoList','Live ALVAN List']
          ],
        },
      ]
    },
    {
      type: 'directory',
      name: 'Non-Technical',
      children: [
        {
          type: 'project',
          name: 'College Band Radio',
          description: 'College Band Radio was a podcast dedicated to showcasing the most exciting and interesting parts of the college marching band world through interviewing members of the marching band community, from students and alumni, to directors, show writers, and costume designers. In this role, I managed a team of, at the largest 10 people, was heavily involved in the episode planning process, oversaw the recording sessions, editted, and released each episode.<br>I also lead negotiations and communications with external business partners and sponsorships.',
          role: 'Cofounder/Technical Producer/Team Manager',
          startDate: 'June 2020',
          endDate: 'December 2022',
          links: [
            ['https://podcasts.apple.com/us/podcast/college-band-radio/id1517824976','Apple Podcasts'],
            ['https://open.spotify.com/show/0cuoElXZNYVs1OdFfNHuzm','Spotify'],
            ['https://twitter.com/collegebandrdo?lang=en','Twitter'],
            ['https://www.instagram.com/collegebandradio/?hl=en','Instagram'],
          ],
        },
      ]
    }
  ]
}