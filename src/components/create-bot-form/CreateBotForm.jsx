import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    cleanUp,
    langTermChange,
    selectLanguage,
    showSettingsLangDd,
    createNewBot,
    updateBot
} from "../../redux/actions/actionCreator";
import Dropdown from "../dropdown/Dropdown";
import "./CreateBotForm.scss";



const CreateBotForm = ({ newData, setEdit }) => {

    const isOpenLang = useSelector(state => state.dropdown.isOpenLang);
    const dispatch = useDispatch();


    const [value, setValue] = useState({
        name: '',
        twitterLogin: '',
        twitterPassword: ''
    });

    useEffect(() => {
        if (Object.keys(newData).length) {
            setValue({
                name: newData.name,
                twitterLogin: newData.twitterLogin,
                twitterPassword: newData.twitterPassword
            })
        }
    }, [newData])

    const onCreate = () => {

        if (value.name && value.twitterLogin && value.twitterPassword && selectedLang.icon) {

            dispatch(createNewBot({
                name: value.name,
                language: selectedLang,
                twitterLogin: value.twitterLogin,
                twitterPassword: value.twitterPassword
            }))

            dispatch(cleanUp());
            setValue({
                name: '',
                twitterLogin: '',
                twitterPassword: ''
            });
        }
    };

    const onSaveChanges = () => {
        if (value.name && value.twitterLogin && value.twitterPassword && selectedLang.icon) {
            dispatch(updateBot({
                ...newData,
                name: value.name,
                language: selectedLang,
                twitterLogin: value.twitterLogin,
                twitterPassword: value.twitterPassword
            }));
            dispatch(cleanUp());
            setValue({
                name: '',
                twitterLogin: '',
                twitterPassword: ''
            });
            setEdit('')
        }
    };




    const selectedLang = useSelector(state => state.dropdown.selectedLang);
    const langItemsList = useSelector(({ dropdown: { langItemsList, selectedLang: { langTerm } } }) => {
        return langItemsList.filter(item => item.name.toLowerCase().startsWith(langTerm?.toLowerCase()))
    });

    return (
        <div className="bot-form">
            <div className="input-container" >
                <input
                    type="text"
                    placeholder="Enter bot name..."
                    className="data-input"
                    value={value.name}
                    onChange={e => setValue({ ...value, name: e.target.value })}
                />

            </div>

            <Dropdown
                term={selectedLang.langTerm}
                icon={selectedLang.icon}
                itemsList={langItemsList}

                termChange={langTermChange}
                selectItem={selectLanguage}
                isOpen={isOpenLang}
                showDropdown={showSettingsLangDd}

                placeholder="Select language"

            />

            <div className="title">Twitter:</div>

            <div className="input-container" >
                <input
                    type="text"
                    placeholder="Login"
                    className="data-input"
                    value={value.twitterLogin}
                    onChange={e => setValue({ ...value, twitterLogin: e.target.value })}
                />
            </div>
            <div className="input-container" >
                <input
                    type="text"
                    placeholder="Password"
                    className="data-input"
                    value={value.twitterPassword}
                    onChange={e => setValue({ ...value, twitterPassword: e.target.value })}
                />
            </div>

            <div className="sreate-btn-container">
                {Object.keys(newData).length
                    ? <button onClick={onSaveChanges} className="create-btn">save changes</button>
                    : <button onClick={onCreate} className="create-btn">create</button>
                }
            </div>
        </div>
    )
}

export default CreateBotForm