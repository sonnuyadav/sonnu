const review = [
    {
        id: 0,
        clientName: 'Formula India',
        clientLocation: 'New Dehli, India',
        clientSource: 'Avijit Ghosal',
        clientReview: 'From the user-friendly interface to the prompt delivery, everything exceeded my expectations. The website is well-designed, making navigation a breeze. In conclusion, I highly recommend sonnu.in to anyone looking for your web development and app development. My experience was so positive that I will definitely be a repeat customer. Thank you'
    },
    {
        id: 2,
        clientName: 'Aseries',
        clientLocation: 'Noida, India',
        clientSource: 'Amar Yadav',
        clientReview: 'Sonu Yadav is very good with communication and experienced website developer, great experience to work with him. He provides great website design & development services. Initially, I was thinking too much but they engaged with me at every stage of my project. I could see every step of designers & developers. They are always ready to solve your queries and provide the best solution for your business.'
    },
    {
        id: 3,
        clientName: 'Future Vision LED',
        clientLocation: 'California',
        clientSource: 'Mr. Bruno',
        clientReview: "He is a professional individual software engineer that helped me create my website exactly how I wanted. Excellent devlopment of my sites pages in affordable cost. Sonu Yadav is very helpful and knowledgeable developer.Thankyou So much."
    },
    {
        id: 4,
        clientName: 'Live Vaastu',
        clientLocation: 'Faridabad',
        clientSource: 'Dr. Puneet Chawla',
        clientReview: 'My Experience with Sonu Yadav and their experts has been good. I have connected with them to get a logo done and He helped me to get the desired result. It took sometime to make them understand what exactly I was looking for but eventually they did get it and helped to get the desired outcome.I wish then all the best and May you guys keep growing and shining.Thank you,'
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
