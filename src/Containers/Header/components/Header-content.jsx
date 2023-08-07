import React, { Fragment } from 'react'
import IdModalZalo from './Id-modal-zalo';
import IdModalFb from './Id-modal-fb';
import avatar from '../../../assets/images/avatar.png';
import banner_header from '../../../assets/svg_file/banner.svg';
import dowload_pdf from '../../../assets/file_pdf/CV_Front-end_Nguyen-Thuy-Duong.pdf';
import Typewriter from 'typewriter-effect';

const HeaderContent = () => {

    return (
        <Fragment>
            <article className="container mx-auto flex items-center md:gap-y-10 flex-wrap justify-center text-dark_primary 2xl:gap-x-20 gap-x-5 md:pt-20 lg:pt-24">
                <div className="">
                    <img src={avatar}
                        className="mx-auto max-w-[150px] rounded-full border-none align-middle shadow-xl" alt="avatar" />
                    
                    <h2 className="text-left font-Brygada text-2xl lg:text-3xl 2xl:text-4xl font-semibold mt-5">
                        Xin chào, Tôi là
                        <span className='text-center'>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                cursor:'',
                                delay: 40,
                                strings : [
                                    "Dương Dương",
                                    "Front-end Fresher"
                                ]
                            }}/>
                        </span>
                        
                    </h2>
                    <p
                        className="md:w-[450px] xl:w-[500px] font-Nunito text-justify indent-7 text-sm md:text-base lg:font-medium xl:text-lg">
                        Tôi yêu thích, sáng tạo, có khả năng tìm kiếm, tìm hiểu, xây
                        dựng layout website. Ngoài ra, có thể
                        Responsive Design ở các cấu hình trình duyệt
                    </p>
                    <div
                        className="flex flex-wrap items-center md:justify-start justify-between gap-5 mt-5 overflow-hidden font-Nunito">
                        <IdModalZalo />
                        <IdModalFb />
                        <a className="flex w-full items-center justify-center space-x-2 rounded bg-blue-600 py-3 text-sm text-white transition duration-100 hover:bg-blue-700 sm:w-[30%] md:w-36"
                            href={dowload_pdf} target="_blank" rel="noreferrer">Downloand
                            CV</a>
                    </div>
                </div>
                <img className="block mt-10 lg:mt-0 w-[90%] md:w-[50%] lg:w-[40%] 2xl:w-[50%] mx-auto md:mx-0"
                    src={banner_header} alt="banner_header" />
            </article>
        </Fragment>
    )
}

export default HeaderContent;
