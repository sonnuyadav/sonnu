const review = [
    {
        id: 0,
        clientName: 'Formula India',
        clientLocation: 'India',
        clientSource: 'LinkedIn',
        clientReview: 'From the user-friendly interface to the prompt delivery, everything exceeded my expectations. The website is well-designed, making navigation a breeze. In conclusion, I highly recommend sonnu.in to anyone looking for your web development and app development. My experience was so positive that I will definitely be a repeat customer. Thank you, Avijit Ghosal'
    },
    {
        id: 2,
        clientName: 'Melissabrown255',
        clientLocation: 'United States',
        clientSource: 'Fiverr',
        clientReview: 'He is very good with communication and experienced website developer, great experience to work with him. '
    },
    {
        id: 3,
        clientName: 'Jake Corry',
        clientLocation: 'Germany',
        clientSource: 'Fiverr',
        clientReview: "Osama is extremely knowledgeable and helpful. He knows in and out of web app development . His understanding of different technologies and frameworks in the space is also very impressive. I hope I get the chance to work with him again"
    },
    {
        id: 4,
        clientName: 'Archit Saini',
        clientLocation: 'France',
        clientSource: 'Fiverr',
        clientReview: 'I have worked with Osama and he is very professional and excellent software  developer. I admire his speed of development and quality of work when given an assignment.'
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
