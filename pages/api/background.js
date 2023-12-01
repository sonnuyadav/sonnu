const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Master in Computer Application',
                degree: 'IGNOU',
                year: '2011-2014'
            },
            {
                id: 1,
                title: 'Bachelor in Computer Application',
                degree: 'IGNOU',
                year: '2008-2011'
            },
            {
                id: 2,
                title: 'NP Model School',
                degree: 'Secondry, CBSE',
                year: '2006-2008'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'DreamOrbit Softech Pvt. Ltd.',
                role: 'Sr. Software Engineer',
                desc: 'ReactJs, NodeJs, TypeScript, Code reviews written by developers, Designed, Developed and Modified 35+ software systems and custom components.',
                year: '03/2022 - 11/2023',
                location: 'Remote, India'
            },
            {
                id: 2,
                title: 'Superlative Gaming Pvt. Ltd',
                role: 'Sr. Software Engineer',
                desc: 'Design architecture Based on business needs. Develop NodeJS services. Discuss CI/CD process with DevOps and QA. Introduced value of performance testing for team. Handling AWS Server',
                year: '08/2020 - 03/2022',
                location: 'Remote, India'
            },
            {
                id: 3,
                title: 'RV Online Gaming Pvt. Ltd',
                role: 'PHP Developer',
                url: 'https://www.encoderbytes.com/',
                desc: "Design architecture based on business needs. Develop NodeJS services. Developed poker realmoney game with multiple veriants like Holdem, Omaha, Shortdek using node.js with aws and mongodb.",
                year: '03/2018 - 08/2020',
                location: 'Gurgaon, India'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
