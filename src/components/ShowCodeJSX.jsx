import Highlight, {defaultProps} from "prism-react-renderer";
import PrismTheme from "prism-react-renderer/themes/nightOwl";

import {CopyToClipboard} from "react-copy-to-clipboard";
import {toast,Toaster} from "react-hot-toast";
import {ClipboardAdd} from "react-huge-icons/outline";
import {useState} from "react";

const ShowCodeJSX = ({code, language}) => {

    const exampleCode = code.trim() || "//Zero Icon";
    const exampleLanguage = language.trim() || "jsx";

    const setCopy = () => {
        toast.success('Copied to Clipboard !')
    };

    return (
        <>
            <Highlight
                {...defaultProps}
                code={exampleCode}
                language={exampleLanguage}
                theme={PrismTheme}>
                {({className, style, tokens, getLineProps, getTokenProps}) => (
                    (className += " " + "overflow-auto text-white bg-secondary-dark"),
                        (
                            <div className="relative text-white bg-secondary-dark p-2.5 rounded-lg text-xs border">

                                <CopyToClipboard
                                    text={exampleCode}
                                    onCopy={()=> setCopy()} >

                                    <div
                                        className="absolute top-1.5 right-1.5 cursor-pointer text-secondary p-0.5 rounded bg-white">
                                        <ClipboardAdd className="w-5 h-5"/>
                                    </div>

                                </CopyToClipboard>

                                <pre className={className}>
							{tokens.map((line, i) => (
                                <div key={i}>
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({token, key})} />
                                    ))}
                                </div>
                            ))}
						</pre>
                            </div>
                        )
                )}
            </Highlight>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
        </>
    );
};

export default ShowCodeJSX;
