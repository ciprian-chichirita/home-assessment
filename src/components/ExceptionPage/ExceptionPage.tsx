import Typography from "../Typography/Typography";
import './ExceptionPage.css';

export const ExceptionPage = ({ message = "Oops! Something went wrong" }) => {
    return (
        <div className="exception-page">
            <Typography.Title size="S">{message}</Typography.Title>
        </div>
    );
}
export default ExceptionPage;
