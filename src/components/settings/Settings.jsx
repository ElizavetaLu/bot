import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateBotForm from "../create-bot-form/CreateBotForm";
import { deleteBot, selectLanguage, setBotsList } from "../../redux/actions/actionCreator";
import "./Settings.scss";


const Settings = () => {

    const dispatch = useDispatch()
    const botsList = useSelector(state => state.bots);

    const [hover, setHover] = useState('');
    const [edit, setEdit] = useState('');


    const [newData, setNewData] = useState({});

    const onEditData = bot => {
        setNewData({
            id: bot._id,
            name: bot.name,
            language: bot.language,
            twitterLogin: bot.twitterLogin,
            twitterPassword: bot.twitterPassword,
        });
        dispatch(selectLanguage(bot.language))

        if (edit === bot.name) { return setEdit("") };

        setEdit(bot.name)
    };



    const curTr = useRef(null);

    // useEffect(() => {
    //     const handler = e => {
    //         if (!curTr.current) return;

    //         if (!curTr.current.contains(e.target)) {
    //             setNewData({});
    //             setEdit('');
    //         }
    //     };

    //     document.addEventListener('click', handler, true);

    //     return () => document.removeEventListener('click', handler)
    // }, [])

    useEffect(() => {
        dispatch(setBotsList());
    }, [])

    return (

        <div className="settings">
            <div className="bot-tools">

                <CreateBotForm newData={newData} setEdit={setEdit} />


                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Language</th>
                            <th>Social media</th>
                        </tr>
                    </thead>
                    <tbody>
                        {botsList.map(bot => {
                            return (
                                <tr key={bot._id} onMouseEnter={() => setHover(bot.name)} onMouseLeave={() => setHover('')} ref={curTr}>
                                    <td>
                                        <div>{bot.name}</div>
                                    </td>
                                    <td>
                                        <div className="t-item">
                                            <div className="icon">
                                                <img src={`/bot/build//images/flags/${bot.language.icon}.png`} alt="" className="t-icon" />
                                            </div>
                                            <div className="name">{bot.language.langTerm}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="t-item">
                                            {(hover || edit) === bot.name &&
                                                <div className="edit">
                                                    <div className="edit-icon" onClick={() => onEditData(bot)}>
                                                        <img src="/bot/build//images/icons/edit.png" alt="edit" title={'Edit'} className="edit-img" />
                                                    </div>

                                                    <div className="edit-icon" onClick={() => dispatch(deleteBot(bot._id))}>
                                                        <img src="/bot/build//images/icons/trash-can.png" alt="delete" title="Delete bot" className="edit-img" />
                                                    </div>

                                                </div>
                                            }

                                            <div className="icon">
                                                <img src={`/bot/build//images/socials/Twitter.png`} alt="" className="t-icon" />
                                            </div>

                                            <div className="data">
                                                <div>{bot.twitterLogin}</div>
                                                <div>{bot.twitterPassword}</div>
                                            </div>
                                        </div>
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Settings