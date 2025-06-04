import Typography from "../Typography/Typography";
import './Loader.css';

export const Loader = () => {
    return (
        <div className="loader">
            <Typography.Title>Loading...</Typography.Title>
            <Typography.Subtitle>Please wait while we fetch the data.</Typography.Subtitle>
            <div className="spinner"></div>
        </div>
    );
}
export default Loader;
