import {cloneElement, useState} from "react";
import styles from '@/styles/Icon.module.css';

const ShowDetails = ({showDetail, setShowDetail, dataIcons}) => {
    return (
        <>
            <div
                className={`${styles.icon_modal} transition-all duration-500 ${showDetail ? 'visible opacity-100 z-[60]' : 'invisible opacity-0 z-0'}`}>
                <div
                    className="absolute bg-secondary rounded-md h-full w-full sm:h-4/5 sm:w-11/12 md:w-4/5 lg:h-5/6 lg:w-3/4 p-4 m-20">
                    {/* header */}
                    <div className="flex justify-between items-center">
                        {/* icon name */}
                        <div className="flex items-center"><p className="">{dataIcons.name}</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}

const IconDetails = ({children, dataIcons}) => {
    const [showDetail, setShowDetail] = useState(false);

    const handleShowDetail = () => setShowDetail(true)

    return (
        <>
            {children && cloneElement(children, {onClick: handleShowDetail})}

            <ShowDetails showDetail={showDetail} setShowDetail={setShowDetail} dataIcons={dataIcons}/>
        </>
    );
};

export default IconDetails;
