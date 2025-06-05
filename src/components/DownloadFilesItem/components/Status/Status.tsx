import type { PropsWithChildren } from "react";
import { Icon } from "../../../Icon/Icon";
import Typography from "../../../Typography/Typography";
import CircleIcon from "../../../../assets/icon/circle-svgrepo-com.svg";
import "./Status.css";


const statusKeys = ["available", "scheduled"] as const;
export type Statuses = typeof statusKeys[number];

export interface StatusProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
    status: Statuses;
}

const statuses: Record<Statuses, string> = statusKeys.reduce((acc, status) => {
    acc[status] = status.charAt(0).toUpperCase() + status.slice(1);
    return acc;
}, {} as Record<Statuses, string>);


export const Status = ({ status }: PropsWithChildren<StatusProps>) => {
    return (<div className="download-files-status-indicator">{
        status === "available" ? (<><Icon src={CircleIcon} color="green" /><Typography.Body>{statuses[status]}</Typography.Body></>) :
            (<Typography.Body className="download-files-status-indicator-paragraph">{statuses[status]}</Typography.Body>)}

    </div>);
}

export default Status;
