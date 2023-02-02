import { useRef } from "react";
import { useDispatch } from "react-redux";
import "./Dropdown.scss";


const Dropdown = ({ term, icon, itemsList, termChange, showDropdown, selectItem, placeholder, isOpen }) => {


    const dispatch = useDispatch();
    const divEl = useRef(null);
    const inputEl = useRef(null);

    // useEffect(() => {
    //     const handler = e => {
    //         if (!divEl.current) {
    //             return
    //         }
    //         // if (e.target === inputEl.current && !isOpen) {
    //         //     dispatch(showDropdown())
    //         //     return
    //         // }
    //         if (!divEl.current.contains(e.target)) {
    //             dispatch(showDropdown())
    //         }
    //     };

    //     document.addEventListener('click', handler, true);

    //     return () => document.removeEventListener('click', handler)
    // }, [])


    return (


        <div className="dropdown" ref={divEl}>
            <div className="selected-item" onClick={() => dispatch(showDropdown())}>
                {icon &&
                    <div className="icon">
                        <img src={`/bot/build//images/flags/${icon}.png`} alt="icon" className="item-icon" />
                    </div>
                }
                <input
                    style={{ paddingLeft: icon ? '50px' : '0px' }}
                    onClick={() => { if (isOpen) dispatch(showDropdown()) }}
                    className="search-input"
                    ref={inputEl}
                    type="text"
                    placeholder={placeholder}

                    value={term.toLowerCase()}
                    onChange={e => dispatch(termChange(e.target.value))}
                />
                <div className="triangle" style={{ transform: isOpen && "rotate(180deg)" }}>
                    <img src="/bot/build//images/icons/triangle.png" alt="" className="triangle-icon" />
                </div>
            </div>


            {isOpen && <div className="items-list">{
                itemsList.map(({ name, icon }) => {
                    return (
                        <div
                            className="item"
                            key={name}
                            onClick={() => {
                                dispatch(selectItem({
                                    langTerm: name,
                                    icon
                                }))
                                dispatch(showDropdown());
                            }}
                        >

                            <div className="icon">
                                <img src={`/bot/build//images/flags/${icon}.png`} alt="" className="dropD-icon" />
                            </div>

                            <div className="item-name">{name.toLowerCase()}</div>
                        </div>
                    )
                })
            }</div>}

        </div >
    )
}

export default Dropdown