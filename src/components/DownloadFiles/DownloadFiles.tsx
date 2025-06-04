import useMainLayoutContext from "../../screen/MainLayout/context/useMainLayoutContext";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import { Icon } from "../Icon/Icon";
import DownloadIcon from "../../assets/icon/download-svgrepo-com.svg";
import Typography from "../Typography/Typography";
import "./DownloadFiles.css";

export const DownloadFiles = () => {
    const { data } = useMainLayoutContext();
    const currentSelectedItemsArr = [];
    console.log("DownloadFiles: ", data);

    return (<section className="download-files-section">
        <h2 className="screen-reader-hidden">Selected files</h2>
        <div className="download-files-header download-files-header-gap">
            <Checkbox id="select-all" checked={false} indeterminate={false}>
                {currentSelectedItemsArr.length ? (<Typography.Body size="L">Selected {currentSelectedItemsArr.length}</Typography.Body>) :
                    (<Typography.Body size="L">None Selected</Typography.Body>)}
            </Checkbox>
            <Button disabled={!currentSelectedItemsArr.length}><Icon src={DownloadIcon} />Download Selected</Button>
        </div>
        <div className="download-files-body">
            {/* I chose a table here so it will be a11y friendly */}
            {/* we can make this mobile friendly using some tailwind CSS classes or other framework for that */}
            <table className="download-files-table" role="table" aria-label="File download list">
                <thead>
                    <tr>
                        <th scope="col"><span className="screen-reader-hidden">Select file</span></th>
                        <th scope="col">Name</th>
                        <th scope="col">Device</th>
                        <th scope="col">Path</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Checkbox id="file-1" checked={false} indeterminate={false} aria-label="Select smss.exe file" />
                        </td>
                        <td>smss.exe</td>
                        <td>Stark</td>
                        <td className="download-files-table-path-col">\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe</td>
                        <td>available</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>);
    // as an improvement, have in mind to add pagination
}

export default DownloadFiles;