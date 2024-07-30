import React from 'react'
import { FaGithub, FaTwitter,FaKaggle} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    Twitter<FaTwitter size={30} />
                </>
            ),
            href: "https://twitter.com/OoAaazz",
            text_style: "text-blue-400",
            bg_style:" bg-cyan-50"
        },
        {
            id: 2,
            child: (
                <>
                    Github<FaGithub size={30} />
                </>
            ),
            href: "https://github.com/AAAZZZR",
            bg_style: "bg-zinc-400"
        },
        {
            id: 3,
            child: (
                <>
                    Mail<HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:rudy@gmail.com",
            text_style:"text-pink-900",
            bg_style:"bg-rose-300"

        },
        {
            id: 4,
            child: (
                <>
                    Resume<BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "./assets/My_resume.pdf",
            bg_style: "bg-blue-200",
            
        },
        {
            id: 5,
            child: (
                <>
                    Kaggle<FaKaggle size={30} />
                </>
            ),
            href: "https://www.kaggle.com/bighammerzz",
            bg_style: "bg-purple-200",
            
        }
    ]
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed' >
            <ul>
                {links.map(({ id, child, href, text_style, bg_style, download }) => (
                    <li key={id}
                        className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] rounded-lg duration-300'+ " "+ bg_style }>

                        <a
                            href={href}
                            className={'flex justify-between items-center w-full' + " " + text_style}
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default SocialLinks