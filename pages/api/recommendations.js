// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Kai Neuhold-Huber',
    image: "images/kai.jpeg",
    designation: 'React JS | NEXT JS | NodeJs | GraphQL | AWS | DynamoDB',
    view: "Sonu is a capable full stack Javascript and Node.js engineer and a pleasure to work with. When I worked with him he made an effort to understand the nuances of the problem space he worked in and I think that made him a more effective contributor to the code base. Sonu has the skill and curiosity to be a very effective member of a software engineering team. 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/kai-neuhold-huber/"
  },
  {
    id: 1,
    name: 'Syed Luqman Quadri',
    image: "images/sayed.jpeg",
    designation: 'Node.js | Express.Js | NestJs | Koa Framework | React.js | Next.js | TypeScript | GraphQL',
    view: "I had the pleasure of working alongside Sonu at DreamOrbit on several challenging projects. Sonu's expertise as a full-stack engineer, particularly in Node.js, ReactJS, and AWS, significantly elevated the quality of our outputs. His adeptness in smoothly transitioning between front-end and back-end development ensured seamless functionality and enhanced user experience across our projects. He embodies a blend of strong technical skills and excellent communication, which made problem-solving and collaboration effortless within our team. Sonu is undoubtedly a valuable asset and his dedication, technical prowess, and team-spirited nature will undeniably be a boon to any ambitious development team.",
    linkednURL: "https://www.linkedin.com/in/sql/"
  }
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
