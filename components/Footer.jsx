import { AiFillCopyrightCircle } from 'react-icons/ai'
import { MdMail } from 'react-icons/md'
const Footer = () => {
    const today = new Date(); 
    return (
        <div id='intro' className="mt-4 mb-10 lg:mb-0">
            <div className="flex h-10 items-center justify-between text-xs font-normal text-LightGray py-4 px-2 md:px-4 w-full bg-MidNightBlack">
                <div className='flex items-center'>
                    <div className="mr-1 text-base">
                        <AiFillCopyrightCircle />
                    </div>
                    <span>{today.getFullYear()} All Rights Reserved.</span>
                </div>
                <div className="flex items-center">
                WhatsApp Me<a href='https://wa.link/evzna1' target="_blank" rel="noreferrer"> +91-9818 536 154</a>
                </div>
                <div className="hidden md:flex items-center">
                    <div className="mr-1 text-base">
                        <MdMail />
                    </div>
                    <div><a href='mailto:sonnuyadav@gmail.com' target="_blank" rel="noreferrer">sonnuyadav@gmail.com</a></div>
                </div>
            </div>
        </div>
    )
}

export default Footer