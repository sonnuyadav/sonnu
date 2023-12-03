import { useState } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import { HiMail, HiUser } from 'react-icons/hi'
import { BsChatTextFill } from 'react-icons/bs'
import Fiverr_Icon from '../components/Fiverr_Icon';
import Footer from '../components/Footer';
import {CONTACTS, SOCIAL_LINKS } from '../constants/constants';
import CONFIG from "../config.json";

const Contact = () => {
    const [isDisabled, setDisabled] = useState(false);
    const contactUs = async event => {
        event.preventDefault();
        try {
       // recaptchaRef.current.execute();
        if(event.target.name.value !="" && event.target.emailid.value !="" && event.target.message.value){
            setDisabled(true);
            const res = await fetch(CONFIG.SERVER_URL, {
                body: JSON.stringify({
                  name: event.target.name.value,
                  email: event.target.emailid.value,
                  message: event.target.message.value,
                }),
                headers: {
                  'Content-Type': 'application/json'
                },
                mode: 'no-cors',
                method: 'POST'
              });
              const result = await res.json();
             
             console.log("RESULT=>", result);
            //   if(result){
            //     setDisabled(true); 
            //     Router.push('/thankyou');
            //   }else{
            //     setDisabled(false); 
            //   }
        }
        } catch(error) {
            Router.push('/contact');
       }
      }
    return (
        <>
        <Head>
    <title>Contact Freelance Website Designer Delhi | Freelance Fullstack Engineer India | Node | React.js | AWS Developer | Designer Delhi Web Developer India</title>
    <meta name="description" content="Sonu Yadav is an award-winning freelance web developer &amp; designer based in Delhi, INDIA. Specializing in Node.Js, React.js, PHP, eCommerce, &amp; responsive websites." />
    <link rel="canonical" href="https://www.sonnu.in/" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Best #1 Freelance Website Designer Delhi | Web Developer India" />
    <meta property="og:description" content="Jitesh is an award-winning freelance web developer &amp; designer based in Delhi, INDIA. Specializing in php frameworks, eCommerce, &amp; responsive websites." />
    <meta property="og:url" content="https://www.sonnu.in/" />
    <meta property="og:site_name" content="Freelance Web Developer" />
    <meta name="twitter:card" content="summary_large_image" />
   </Head>
        <BannerLayout>
            <div className=" px-4 py-2">
                <div className="my-6 text-Snow flex flex-col gap-y-5">
                    <h1 className='text-lg font-bold'>Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Country:</span>
                                <span className='text-LightGray md:text-sm'>India</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>City:</span>
                                <span className='text-LightGray md:text-sm'>New Delhi</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Company:</span>
                                <span className='text-LightGray md:text-sm'>Transopedia.com</span>
                            </div>
                        </div>
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Email:</span>
                                <span className='text-LightGray text-sm'>{CONTACTS.EMAIL}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Linkedin:</span>
                                <span className='text-LightGray text-sm'>{SOCIAL_LINKS.LINKEDIN}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Phone:</span>
                                <span className='text-LightGray text-sm'>{CONTACTS.PHONE}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
                    <a className='hover:scale-125 ease-in-out duration-700' href="mailto:sonnuyadav@gmail.com" target='_blank' rel="noreferrer"><HiMail /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://github.com/sonnuyadav/" target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://www.linkedin.com/in/sonnuyadav/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://x.com/SonnuYadav" target='_blank' rel="noreferrer"><FaTwitter /></a>
                    <a className='hover:scale-125 ease-in-out duration-700 hidden sm:block' href="https://www.fiverr.com/sonuyadav" target='_blank' rel="noreferrer"><Fiverr_Icon /></a>
                    <a className='hover:scale-125 ease-in-out duration-700 text-2xl sm:text-4xl mt-1' href="https://www.upwork.com/freelancers/~0197e319a9d4bbae3e" target='_blank' rel="noreferrer"><SiUpwork /></a>
                </div>

                <div className="my-12 w-full h-auto text-Snow">
                    <h1 className='text-lg font-bold'>Get In Touch</h1>
                    <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
                    <form onSubmit={contactUs} id="commentForm">
                        <div>
                            <div className="flex flex-col w-full">
                                <div className="userIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
                                        <HiUser />
                                    </div>
                                    <input type="text" className="input_stylings" name="name" placeholder="Enter Your Good Name" required/>
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="mailIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
                                        <HiMail />
                                    </div>
                                    <input type="email" className="input_stylings" name='emailid' placeholder="Email" required/>
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="textIcon relative mb-6">
                                    <div id="icon" className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
                                        <BsChatTextFill />
                                    </div>
                                    <textarea rows={6} cols={50} className="input_stylings" name='message' placeholder="Message" required/>
                                </div>
                            </div>

                            <div className="my-4">
                                <button type="submit" className="button" disabled={isDisabled}> SEND MESSAGE </button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
       
            <Footer />
        </BannerLayout>
        </>
    )
}

export default Contact