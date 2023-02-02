import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    showCreatePostForm,
    showModal,
    showLangDropdown,
    selectLanguageForm,
    langTermChangeForm,
    createNewPost,
    cleanUpForm,
    showSuccessPopup
} from "../../redux/actions/actionCreator";
import Dropdown from "../dropdown/Dropdown";
import UploadedFile from "../uploaded-file/UploadedFile";
import "./CreatePost.scss"



const CreatePost = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState({
        inputName: '',
        textareaText: ''
    });


    const ref = useRef(null);
    const filesList = useSelector(state => state.uploadedFiles);
    const isLangDropdownOpen = useSelector(state => state.createPost.isLangDropdownOpen);



    const handleInput = e => {
        if (ref.current) {
            ref.current.style.height = "auto";
            ref.current.style.height = `${e.target.scrollHeight - 16}px`;
        }
    };

    const onPost = e => {
        e.preventDefault();

        if (value.inputName.trim() && value.textareaText.trim() && selectedLang.icon) {
            const date = new Date();

            dispatch(createNewPost(
                {
                    name: value.inputName,
                    language: selectedLang.langTerm,
                    text: value.textareaText,
                    date: date.toString().slice(0, 21),
                    files: []
                }
            ));
            dispatch(showSuccessPopup());
            dispatch(showCreatePostForm());
            dispatch(cleanUpForm());
        } else {
            console.log('err')
        }
    };

    const selectedLang = useSelector(state => state.createPost.selectedLang);
    const langItemsList = useSelector(({ createPost: { langItemsList, selectedLang: { langTerm } } }) => {
        return langItemsList.filter(item => item.name.toLowerCase().startsWith(langTerm?.toLowerCase()))
    });

    return (
        <div className="form-wrapper">

            <form className="form-container" onSubmit={onPost}>

                <div className="cross" onClick={() => dispatch(showCreatePostForm())}>
                    <img src="/bot/build//images/icons/close-svgrepo-com 16.08.26.svg" alt="close" className="cross-img" />
                </div>

                <input
                    placeholder="Enter name..."
                    className="input"
                    type="text"
                    value={value.inputName}
                    onChange={e => setValue({ ...value, inputName: e.target.value })}

                    required
                />

                <textarea
                    placeholder="What's new?"
                    onInput={handleInput}
                    className="textarea"
                    ref={ref}
                    rows={1}
                    autoFocus
                    value={value.textareaText}
                    onChange={e => setValue({ ...value, textareaText: e.target.value })}

                    required
                ></textarea>

                <div className="tools">
                    <div className="select">

                        <div className="t-item" onClick={() => dispatch(showModal())}>
                            <img src="/bot/build//images/icons/paper-clip-attach-svgrepo-com.svg" alt="scrap" className="tool-img" />
                        </div>

                        <Dropdown
                            type="lang"
                            term={selectedLang.langTerm}
                            icon={selectedLang.icon}
                            itemsList={langItemsList}

                            termChange={langTermChangeForm}
                            showDropdown={showLangDropdown}
                            selectItem={selectLanguageForm}
                            isOpen={isLangDropdownOpen}

                            placeholder="Select language"
                        />


                    </div>
                    <div className="btn-container">
                        <button className="btn" type="submit">Post</button>
                    </div>
                </div>

                {filesList.length ? filesList.map((file, i) => <UploadedFile key={i} fileName={file} />) : null}

            </form>
        </div>
    )
}

export default CreatePost