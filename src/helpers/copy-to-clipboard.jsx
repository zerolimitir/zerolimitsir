import {CopyToClipboard} from "react-copy-to-clipboard";
import {toast} from "react-hot-toast";

const CustomCopyToClipboard = ({text, children}) => {
    const setCopy = () => toast.success(`${text} Copied to Clipboard !`)

    return <CopyToClipboard text={text} onCopy={() => setCopy()}>{children}</CopyToClipboard>
}

export default CustomCopyToClipboard