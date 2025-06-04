import { useQuery } from "react-query";
import Loader from "../../components/Loader/Loader";
import Container from "../../components/Container/Container";
import DownloadIcon from "../../assets/icon/download-svgrepo-com.svg";
import { useMemo } from "react";
import MainLayoutContext from "./context/MainLayout.context";
import { getYear } from "date-fns";
import Typography from "../../components/Typography/Typography";
import processesResource from "../../services/resources/processes.resource";
import Checkbox from "../../components/Checkbox/Checkbox";
import Button from "../../components/Button/Button";
import { Icon } from "../../components/Icon/Icon";
import DownloadFiles from "../../components/DownloadFiles/DownloadFiles";

export const MainLayout = () => {
    const { isLoading, data } = useQuery({ queryKey: [processesResource.queryKey], queryFn: () => processesResource.getProcesses() });
    console.log("Data: ", data);
    const contextValue = useMemo(() => ({ data: data! }), [data]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <MainLayoutContext.Provider value={contextValue}>
            <Container>
                <header>
                    <Typography.Title>Home Assessment</Typography.Title>
                </header>
                <main>
                    <DownloadFiles />
                    <Button><Icon src={DownloadIcon} />This is a cool button!</Button>
                    <Button disabled>This is a cool button!</Button>
                    <Checkbox><Typography.Body>this is cool!!</Typography.Body></Checkbox>
                    <Checkbox indeterminate><Typography.Body>this is cool</Typography.Body></Checkbox>
                    <Checkbox disabled indeterminate><Typography.Body>this is cool disabled</Typography.Body></Checkbox>
                    <Checkbox disabled><Typography.Body>this is cool disabled</Typography.Body></Checkbox>
                    <Checkbox disabled checked><Typography.Body>this is cool disabled</Typography.Body></Checkbox>
                    <Icon src={DownloadIcon} size="4rem" />
                    <div>TODO: here I add my main app</div>
                </main>
                <footer>
                    <Typography.Body>© {getYear(new Date())}</Typography.Body>
                </footer>
            </Container>
        </MainLayoutContext.Provider>
    );
}
export default MainLayout;
