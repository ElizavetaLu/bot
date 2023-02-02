import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setUploadedFiles, showModal } from "../../redux/actions/actionCreator";
import "./UploadFilesModal.scss"

const UploadFilesModal = () => {

    const dispatch = useDispatch();
    const modalIsActive = useSelector(state => state.modal)

    const uploadFiles = e => {
        e.preventDefault();
    }

    const inputRef = useRef(null);

    const formData = new FormData();

    const getFiles = () => {

        const fileList = inputRef.current.files;

        for (let i = 0; i < fileList.length; i++) {
            formData.append("files", fileList[i]);
            dispatch(setUploadedFiles(fileList[i].name));
        }
    }


    return (
        <div className={modalIsActive ? "modal active" : "modal"} onClick={() => dispatch(showModal())}>
            <div className="modal-content">

                <form className='upload-form' onSubmit={uploadFiles}>

                    <label htmlFor="files-input" className="input-wrapper">
                        <img src="/bot/build//images/icons/folder-svgrepo-com.svg" alt="" className="folder-img"/>
                        Upload New File
                        <input className="files-input" id="files-input" type="file" multiple ref={inputRef} onChange={getFiles} />
                    </label>

                </form>

            </div>
        </div>
    )
}

export default UploadFilesModal