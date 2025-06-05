import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import { Icon } from "../Icon/Icon";
import DownloadIcon from "../../assets/icon/download-svgrepo-com.svg";
import Typography from "../Typography/Typography";
import "./DownloadFiles.css";
import DownloadFilesItem from "../DownloadFilesItem/DownloadFilesItem";
import Loader from "../Loader/Loader";
import { useMemo, useState } from "react";
import type { ProcessItem } from "../../services/resources/processes";
import { useModalContext } from "../Modal/hooks/Modal";
import DownloadFilesModalContent from "./components/DownloadFilesModalContent/DownloadFilesModalContent";
import useQueryGetProcesses from "../../hooks/useQueryGetProcesses/useQueryGetProcesses";

export const DownloadFiles = () => {
    const { setContent, open: openModal } = useModalContext();
    const { isLoading, data = [] } = useQueryGetProcesses();
    const [selectedItems, setSelectedItems] = useState(new Map());
    const [selectedCheckBox, setSelectedCheckbox] = useState(false);
    const allSelectableItems = useMemo(() => {
        return data.reduce((acc, item, index) => {
            if (item.status === "available") {
                acc.push([index, item])
            }
            return acc;
        }, [] as [number, ProcessItem][]);
    }, [data]);

    const renderDownloadFilesItems = useMemo(() => {
        const downloadFilesItemClickHandler = (index: number) => {
            return () => {
                if (!selectedItems.has(index)) {
                    setSelectedItems((prevMap) => {
                        const newSelectedItems = new Map(prevMap.set(index, data[index]));
                        if (allSelectableItems.length === newSelectedItems.size) {
                            setSelectedCheckbox(true);
                        }
                        return newSelectedItems;
                    });
                } else {
                    setSelectedItems((prevMap) => {
                        const newSelectedItems = new Map(prevMap);
                        newSelectedItems.delete(index);
                        setSelectedCheckbox(false);
                        return newSelectedItems;
                    });
                }
            }
        }

        return data.map((dlItem, index) => {
            return (<DownloadFilesItem
                // eslint-disable-next-line react-x/no-array-index-key
                key={`download-files-item-${index}`}
                checked={selectedItems.has(index)}
                item={dlItem}
                onClick={downloadFilesItemClickHandler(index)} />);
        });
    }, [data, selectedItems, allSelectableItems.length]);

    const isIndeterminate = useMemo(() => {
        if (selectedCheckBox) {
            return false;
        }

        return selectedItems.size > 0 && allSelectableItems.length > selectedItems.size;

    }, [selectedCheckBox, allSelectableItems.length, selectedItems.size]);

    const onSelectedItemsChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        // select all
        if (event.target.checked) {
            setSelectedItems(new Map(allSelectableItems));
        } else { // deselect all
            setSelectedItems(new Map());
        }
        setSelectedCheckbox(event.target.checked);
    }

    const onDowloadClickHandler = () => {
        setContent(<DownloadFilesModalContent items={[...selectedItems.values()]} />);
        openModal();
    }

    if (isLoading) {
        return <Loader />;
    }

    return (<section className="download-files-section">
        <h2 className="screen-reader-hidden">Selected files</h2>
        <div className="download-files-header download-files-header-gap">
            <div className="download-files-header-checkbox">
                <Checkbox
                    checked={selectedCheckBox}
                    onChange={onSelectedItemsChangeHandler}
                    indeterminate={isIndeterminate}>
                    {selectedItems.size ? (<Typography.Body size="L">Selected {selectedItems.size}</Typography.Body>) :
                        (<Typography.Body size="L">None Selected</Typography.Body>)}
                </Checkbox>
            </div>
            <Button disabled={!selectedItems.size} onClick={onDowloadClickHandler}><Icon src={DownloadIcon} />Download Selected</Button>

        </div>
        <div className="download-files-body">
            {/* I chose a table here so it will be a11y friendly */}
            {/* we can make this mobile friendly using some tailwind CSS classes or other framework for that */}
            <table className="download-files-table" role="table" aria-label="File download list">
                <thead>
                    <tr>
                        <th scope="col"><span className="screen-reader-hidden">Select file</span></th>
                        <th scope="col"><Typography.Subtitle size="S" variant="semibold">Name</Typography.Subtitle></th>
                        <th scope="col"><Typography.Subtitle size="S" variant="semibold">Device</Typography.Subtitle></th>
                        <th scope="col"><Typography.Subtitle size="S" variant="semibold">Path</Typography.Subtitle></th>
                        <th scope="col"><Typography.Subtitle size="S" variant="semibold">Status</Typography.Subtitle></th>
                    </tr>
                </thead>
                <tbody>
                    {renderDownloadFilesItems}
                </tbody>
            </table>
        </div>
    </section>);
    // as an improvement, have in mind to add pagination
}

export default DownloadFiles;