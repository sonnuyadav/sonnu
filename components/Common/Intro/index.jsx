import Link from 'next/link';
import Head from 'next/head';
import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Contact from './Contact';
import Download from './Download';
import Languages from './Languages';
import Location from './Location';
import Tools from './Tools';
import Skills from './Skills';
import Image from 'next/image';
import { NAME, DESIGNATION, SOCIAL_LINKS } from '../../../constants/constants';
import SonuYadav from '../../../public/images/sonuyadav.jpeg';

const Intro = () => {
  return (
    <>
     <Head>
     <title>Best #1 Freelance Website Designer Delhi | Freelance Fullstack Engineer India | Node | React.js | AWS Developer | Designer Delhi Web Developer India</title>
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
      {/* fixed at top */}
      <div className='headerr z-50 absolute bg-MidNightBlack backdrop-blur-sm inset-y-0 h-48 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4'>
        <Image className='w-20 h-20 rounded-full' src={SonuYadav} alt='Sonu Yadav Profile Picture' />
        <div className='flex flex-col items-center justify-center'>
          <span className='text-gray-300 text-base font-bold break-normal'>{NAME}</span>
          <span className='text-sm text-LightGray text-center mt-2'>{DESIGNATION}</span>
        </div>
      </div>

      {/* middle components */}
      <div className='beech z-20 flex flex-col overflow-y-scroll pt-48 top-48 space-y-6 divide-y divide-white overflow-x-hidden no-scrollbar px-4'>
        <Location />
        <Languages />
        <Skills />
        <Tools />
        <Contact />
        <Download icon={<FaDownload />} />
      </div>

      {/* fixed at bottom */}
      <div className='footer absolute flex justify-center space-x-6 text-xl items-center bottom-0 z-50 h-10 w-full bg-MidNightBlack text-Snow'>
        <Link href={SOCIAL_LINKS.GITHUB} target='_blank' rel='noreferrer' className=''>
          <FaGithub />
        </Link>
        <Link href={SOCIAL_LINKS.TWITTER} target='_blank' rel='noreferrer' className=''>
          <FaTwitter />
        </Link>
        <Link href={SOCIAL_LINKS.FACEBOOK} target='_blank' rel='noreferrer' className=''>
          <FaFacebook />
        </Link>
        <Link href={SOCIAL_LINKS.LINKEDIN} target='_blank' rel='noreferrer' className=''>
          <FaLinkedin />
        </Link>
      </div>
    </>
  );
};

export default Intro;
