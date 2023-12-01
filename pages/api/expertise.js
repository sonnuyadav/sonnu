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
        title: 'Backend - NodeJs Developers',
        desc: 'Working on Node.js projects is always interesting because it is such a versatile tool. I have worked on most interesting and innovative projects around. By working on such jobs, I always expanding my knowledge base, and delivering a great product. Once done with the development we reinforce to offer you a highly powerful, scalable and valuable product with our advanced app testing methods.',
    },
    {
        id: 3,
        title: 'Front End - ReactJs Developer',
        desc: "React.js is a popular JavaScript library for building user interfaces, particularly for single-page applications where you want a fast and efficient way to update and render. Finding the right ReactJS developer is essential for success with this technology. I am experienced ReactJS developers can help you deliver your IT project on time, smoothly & successfully.",
    },
    {
        id: 4,
        title: 'PHP - Codeigniter/Laravel Developer',
        desc: "I offer complete custom php development service, Codeigniter website developer that offers modified,codeigniter framework web application improvement administrations for undertakings, private companies, and new businesses. If you want to hire me as a dedicated PHP/Laravel/Codeigniter developer as an in-house resource from us to experience.",
    },
    {
        id: 5,
        title: 'Solutions for Application Development - AWS',
        desc: "I am experienced Back-End Developer to work on the development back-end services and API's.I am providing service as Platorm Engineer - AWS, Lambda Function and CI/CD pipeline including cloud-native architecture built on Microservices, Kubernetes and Docker. I can provide service caching a cluster of containers with flexible resource sharing. Also providing services encrypt data in S3 bucket.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
