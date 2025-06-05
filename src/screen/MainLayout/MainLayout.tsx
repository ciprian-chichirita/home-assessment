import Loader from "../../components/Loader/Loader";
import Container from "../../components/Container/Container";
import { getYear } from "date-fns";
import Typography from "../../components/Typography/Typography";
import DownloadFiles from "../../components/DownloadFiles/DownloadFiles";
import useQueryGetProcesses from "../../hooks/useQueryGetProcesses/useQueryGetProcesses";

export const MainLayout = () => {
    const { isLoading } = useQueryGetProcesses();

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Container>
            <header>
                <Typography.Title>Home Assessment</Typography.Title>
            </header>
            <main>
                <DownloadFiles />
            </main>
            <footer>
                <Typography.Body>© {getYear(new Date())}</Typography.Body>
            </footer>
        </Container>
    );
}
export default MainLayout;
