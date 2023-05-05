import React, {useState} from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {toast} from "react-hot-toast";
import IconDetails from './iconDetails';

const colors = [
    {
        background: "bg-sky-600",
        text: "text-sky-600",
        border: "border-sky-200",
    },
    {
        background: "bg-blue-600",
        text: "text-blue-600",
        border: "border-blue-200",
    },
    {
        background: "bg-orange-600",
        text: "text-orange-600",
        border: "border-orange-200",
    },
    {
        background: "bg-green-600",
        text: "text-green-600",
        border: "border-green-200",
    },
    {
        background: "bg-teal-600",
        text: "text-teal-600",
        border: "border-teal-200",
    },
    {
        background: "bg-cyan-600",
        text: "text-cyan-600",
        border: "border-cyan-200",
    },
    {
        background: "bg-purple-600",
        text: "text-purple-600",
        border: "border-purple-200",
    },
    {
        background: "bg-rose-600",
        text: "text-rose-600",
        border: "border-rose-200",
    },
];

const RandomColorIcons = ({dataIcons, tagNew}) => {
    const [copied, setCopied] = useState("");
    const isIcon = copied == dataIcons.name;

    setTimeout(() => {
        setCopied("");
    }, 2500);

    const setCopy = name => {
        setCopied(name);
        toast.success(`${name} Copied to Clipboard`);
    };

    return (
        <>
            <IconDetails dataIcons={dataIcons}>
                <li className="h-full w-full p-1 flex flex-col items-center gap-3">
					<span
                        className={`relative w-24 h-24 flex items-center justify-center overflow-hidden border ${
                            colors[dataIcons.randomNum].border
                        } ${
                            isIcon
                                ? colors[dataIcons.randomNum].background + " text-white"
                                : colors[dataIcons.randomNum].text + " bg-secondary"
                        } rounded-lg px-4 py-10 cursor-pointer`}>
						<dataIcons.component className=" w-12 h-12"/>

                        {tagNew && (
                            <span
                                className={`rounded-br-lg absolute top-0 left-0 text-[10px] border px-1 py-0.5 ${
                                    isIcon
                                        ? colors[dataIcons.randomNum].background + " text-white"
                                        : colors[dataIcons.randomNum].text + " bg-secondary"
                                }   ${colors[dataIcons.randomNum].border}`}>
								New
							</span>
                        )}
					</span>
                    <div className="w-full h-full text-center whitespace-pre-line overflow-hidden text-ellipsis">
						<span
                            className={`${
                                colors[dataIcons.randomNum].text
                            } font-bold text-xs`}>
							{dataIcons.name}
						</span>
                    </div>
                </li>
            </IconDetails>

            {/*<CopyToClipboard*/}
            {/*	text={dataIcons.name}*/}
            {/*	onCopy={() => setCopy(dataIcons.name)}></CopyToClipboard>*/}
        </>
    );
};
export default React.memo(RandomColorIcons);
