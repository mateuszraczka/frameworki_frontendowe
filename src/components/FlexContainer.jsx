import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";

function FlexContainer({ Element }) {
    const {items} = useContext(AppContext);
    
    return (
        <div className="d-flex justify-content-center flex-wrap mt-3 gap-2">
            {items.map((e) => (
                <React.Fragment key={e.id}>
                    <Element {...e} />
                </React.Fragment>
            ))}
        </div>
    );
}

export default FlexContainer;
