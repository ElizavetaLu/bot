import "./UploadedFile.scss";

const UploadedFile = ({ fileName }) => {
    return (
        <div className="file">
            <div className="icon">
                <img src="/bot/build//images/icons/file-ui-svgrepo-com.svg" alt="" className="uploaded-file-img"/>
            </div>
            <div className="file-name">{fileName}</div>
        </div>
    )
}

export default UploadedFile