import React, { Fragment, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import check_true from '../../../assets/icons_json/check_true.json';
import copy_text from '../../../assets/svg_file/copy_text.svg';
import { Player } from '@lottiefiles/react-lottie-player';


const Copy_phone_zalo = () => {
    const [isCopied, setIsCopied] = useState(false);

    const phone = `0377194717`;

    const copyPhone = () => {
        setIsCopied(true);
        setTimeout(() =>{
            setIsCopied(false);
        }, 1000)
    };

    return (
        <Fragment>
            <span className='flex-1 text-left block py-2.5 rounded-s-md px-4 text-sm text-gray-700 bg-white border border-[#b7c5d3] select-none focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 max-[280px]:w-24 focus:outline-none focus:ring'>{phone}</span>
            <CopyToClipboard text={phone} onCopy={copyPhone}>
                <div className='p-2 border border-[#b7c5d3] rounded-e-md'>
                {isCopied ? (
                    <Player
                        autoplay
                        speed={1.5}
                        loop
                        src={check_true}
                        style={{ height: "24px", width: "24px" }}
                    ></Player>
                    ) : (
                    <img className='cursor-pointer w-6 h-6' src={copy_text} alt="button success copy phone" />)}
                </div>
            
            </CopyToClipboard>
        </Fragment>
    )
}

export default Copy_phone_zalo;