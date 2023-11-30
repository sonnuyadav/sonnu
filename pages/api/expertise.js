const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'I am a skilled Full stack developer with extensive experience in building robust web applications using HTML5/CSS3, JavaScript, React.js, Node.js, Express.js, MongoDB, MySQL, PostgreSQL. Testing Frameworks: Jest, Mocha, or Jasmine for unit and integration testing. I have good experience with deploying applications using platforms like AWS, Heroku, or Netlify.',
    },
    {
        id: 1,
        title: 'Real Money Game Developer',
        desc: "I have experience on various Gaming journal like Real Money Gaming Poker, Rummy, Ludo, Call Break etc. having end to end experience in Pre sales to release the product. Developed games from scratch to live product till the revenue generation in product, real money services like poker, casino, rummy, call break, teen-patti, fantasy sports, ludo, snake & ladder, gamification, and much more.",
    },
    {
        id: 2,
        title: 'Backed - NodeJs Developers',
        desc: ' experienced NodeJS developers who can efficiently build various types of Node.js applications as per your business requirements.',
    },
    {
        id: 3,
        title: 'Front End - ReactJs Developer',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    {
        id: 4,
        title: 'PHP - Codeigniter Developer',
        desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
    },
    {
        id: 5,
        title: 'Platform - AWS Developer',
        desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
