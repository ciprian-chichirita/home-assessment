import type { PropsWithChildren } from "react";
import type { ProcessList } from "../../../../services/resources/processes";
import Typography from "../../../Typography/Typography";
import "./DownloadFilesModalContent.css"

export interface DownloadFilesModalContentProps extends React.ButtonHTMLAttributes<HTMLTableRowElement> {
    items: ProcessList;
}

export const DownloadFilesModalContent = ({ items }: PropsWithChildren<DownloadFilesModalContentProps>) => {
    return (<div>
        {items.map((item, index) => {
            // eslint-disable-next-line react-x/no-array-index-key
            return (<div key={`download-files-modal-content-${index}`} className="download-files-modal-content">
                <Typography.Body size="L" variant="semibold">{item.path}</Typography.Body>
                <Typography.Body size="L" variant="semibold">{item.device}</Typography.Body>
            </div>);
        })}
    </div >);
}

export default DownloadFilesModalContent;