export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d14c65ae5435d4959b9a080',
                  title: 'Sanity Studio',
                  name: 'maanta-studio',
                  apiId: '3f2da732-7de6-49e1-9a73-c56729fd2b53'
                },
                {
                  buildHookId: '5d14c65a1642d364307b18e5',
                  title: 'Blog Website',
                  name: 'maanta',
                  apiId: 'bdb214b8-0972-46fe-b4af-a7af92fbcc8e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alisalad/maanta',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://maanta.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
