import {cloneElement, useReducer, useRef, useState} from "react";
import styles from '@/styles/Icon.module.css';
import {RemoveThin} from "react-huge-icons/bulk";
import {Link} from "react-huge-icons/outline";
import CustomCopyToClipboard from "@/helpers/copy-to-clipboard";

// define states
const setColorIcon = 'SET_COLOR_ICON'
const setSizeIcon = 'SET_SIZE_ICON'

const initialState = {
    color_icon: '#ffffff',
    size_icon: 'w-44 h-44',
}

const reduce = (state, action) => {
    const payload = action.payload
    switch (action.type) {
        case setColorIcon:
            return {...state, color_icon: payload}
        case setSizeIcon:
            return {...state, size_icon: payload}
        default:
            return state
    }
}

const iconSizes = [
    {title: 'default size', size: 'w-44 h-44'},
    {title: 'xs', size: 'w-15 h-15'},
    {title: 'md', size: 'w-24 h-24'},
    {title: 'lg', size: 'w-44 h-44'},
    {title: 'xl', size: 'w-52 h-52'},
    {title: '2xl', size: 'w-60 h-60'},
]

const ShowDetails = ({showDetail, setShowDetail, dataIcons}) => {
    const [state, dispatch] = useReducer(reduce, initialState)

    const handleDispatch = (define, value) => dispatch({type: define, payload: value})

    const colorIcon = (e) => handleDispatch(setColorIcon, e.target.value)

    const sizeIcon = (e) => handleDispatch(setSizeIcon, e.target.value)

    return (
        <>
            <div
                className={`${styles.icon_modal} transition-all duration-500 ${showDetail ? 'visible opacity-100 z-[60]' : 'invisible opacity-0 z-0'}`}>
                <div
                    className="absolute bg-secondary rounded-md h-full w-full sm:h-4/5 sm:w-11/12 md:w-4/5 lg:h-5/6 lg:w-3/4 px-7 py-6 m-20">
                    <div className="flex justify-between items-center">
                        {/* icon name */}
                        <CustomCopyToClipboard text={dataIcons.name}>
                            <div className="flex items-center gap-5 cursor-pointer hover:text-primary">
                                <p className="text-xl font-medium">{dataIcons.name}</p>
                                <Link className="w-6 h-6 text-primary rotate-45"/>
                            </div>
                        </CustomCopyToClipboard>
                        {/* close modal */}
                        <button onClick={() => setShowDetail(false)} className="p-2">
                            <RemoveThin className="w-10 h-10"/>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10">
                        {/* icon preview */}
                        <p className="grid place-items-center border w-full h-64 rounded-xl">
                            <dataIcons.component className={state.size_icon} color={state.color_icon}/>
                        </p>
                        {/* tools */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* color */}
                            <div className="w-full rounded-md bg-secondary-dark outline-none p-0.5 h-12">
                                <input type="color"
                                       className="w-full rounded-md p-1 bg-transparent h-full border border-solid"
                                       onChange={colorIcon} value={state.color_icon}/>
                            </div>
                            {/* size */}
                            <div className="w-full rounded-md bg-secondary-dark outline-none p-0.5 h-12">
                                <select onChange={sizeIcon} className="w-full rounded-md p-1 bg-transparent h-full border border-solid">
                                    {iconSizes.map(({size, title}, index) => (
                                        <option value={size} key={index}>{title}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
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
