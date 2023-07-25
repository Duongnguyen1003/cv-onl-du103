/* eslint-disable react/jsx-pascal-case */
import React, { Fragment, useState } from 'react';
import facebook from '../../../assets/svg_file/facebook.svg';
import qr_fb from '../../../assets/images/qr_fb.jpg';
import avatar_facebook from '../../../assets/images/avatar-facebook.jpg';
import arrow_back from '../../../assets/icons_json/back-arrow.json';
import { Player } from '@lottiefiles/react-lottie-player';
import Copy_link_fb from './Copy_link_fb';

const IdModalFb = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add("active-modal");
        // document.body.style.background = "gray";
    } else {
        document.body.classList.remove("active-modal");
    }
    return (
        <Fragment>
            <button onClick={toggleModal} className="flex items-center justify-center space-x-2 rounded bg-blue-600 py-3 text-sm text-white transition duration-100 hover:bg-blue-700 w-[46%] sm:w-[30%] max-[280px]:w-full md:w-36">
                <img className="h-5 w-5 rounded-md " src={facebook} alt="" />
                <span>Facebook</span>
            </button>
            {modal && (
                <div className="modal">
                    <div className="overlay"></div>
                    <div className="modal-content bg-white rounded-lg shadow-xl sm:my-8 max-[440px]:w-72 sm:max-w-md sm:w-full max-[280px]:w-56 max-[320px]:w-64">
                        <h3 className="py-3 text-center text-white bg-blue-500 rounded-t-lg">Thông tin Facebook của tôi</h3>
                    <div className="p-5">
                        <div className="flex items-center justify-center max-[280px]:flex-wrap max-[280px]:space-y-5">
                            <img className="object-cover w-32 h-32 md:w-48 md:h-48 mx-auto rounded-md"
                                src={qr_fb} alt="mã QR facebook" />
                            <img className="object-cover w-32 h-32 mx-auto rounded-full"
                                src={avatar_facebook} alt="avatar-facebook" />
                        </div>
                        <div className="space-y-3 text-center">
                            <h3 className="font-medium leading-6 text-gray-800 capitalize "
                                id="modal-title">
                                Dương Dương
                            </h3>
                            <span className="text-sm text-blue-500"> Quét mã QR hoặc tìm kiếm link để kết bạn</span>
                            <div className="flex items-center justify-between w-full gap-x-2">
                                <Copy_link_fb />
                            </div>
                            <button onClick={toggleModal}
                                className="relative w-full overflow-hidden shadow-md shadow-blue-150/50 group flex items-center justify-center space-x-2 py-2.5 mt-3 sm:mt-0 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                <div
                                    className="absolute inset-0 w-3 bg-blue-500 transition-all duration-[250ms] ease-out group-hover:w-full">
                                </div>
                                <div
                                    className="relative flex items-center justify-center space-x-2 text-black group-hover:text-white">
                                    <span>Trở lại</span>
                                    <Player
                                        autoplay
                                        speed={1.5}
                                        loop
                                        background='transparent'
                                        src={arrow_back}
                                        style={{ height: "24px", width: "24px", rotate: "180deg" }}>
                                        </Player>
                                </div>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
}

export default IdModalFb;
