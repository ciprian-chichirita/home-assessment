import Checkbox from "../Checkbox/Checkbox";
import "./DownloadFilesItem.css";
import Typography from "../Typography/Typography";
import type { PropsWithChildren } from "react";
import type { ProcessItem } from "../../services/resources/processes";
import Status from "./components/Status/Status";

export interface DownloadFilesItemProps extends React.ButtonHTMLAttributes<HTMLTableRowElement> {
    item: ProcessItem;
    checked?: boolean;
}

export const DownloadFilesItem = ({ item, checked, ...props }: PropsWithChildren<DownloadFilesItemProps>) => {
    const disabled = item.status !== "available";
    const checkedClassName = checked ? " download-files-table-item-tr-selected" : "";
    const disabledClassName = disabled ? " download-files-table-item-tr-disabled" : "";

    const onClickHandle: React.MouseEventHandler<HTMLTableRowElement> = (event) => {
        if (!disabled && props.onClick) {
            props.onClick(event);
        }
    }

    return (<tr className={`download-files-table-item-tr${checkedClassName}${disabledClassName}`} onClick={onClickHandle} >
        <td className="download-files-table-item-checkbox-td">
            <div className="download-files-table-item-checkbox">
                <Checkbox readOnly disabled={disabled} checked={checked} aria-label={`Select ${item.name} file`} />
            </div>
        </td>
        <td><Typography.Body>{item.name}</Typography.Body></td>
        <td><Typography.Body>{item.device}</Typography.Body></td>
        <td className="download-files-table-item-path-col"><Typography.Body>{item.path.replace(/\\/gi, "\\")}</Typography.Body></td>
        <td className="download-files-table-item-status-td"><Status status={item.status} /></td>
    </tr >);
}

export default DownloadFilesItem;