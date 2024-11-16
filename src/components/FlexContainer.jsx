import React, { useReducer } from "react";
import AppReducer from "../reducers/AppReducer";
import { data } from "../data/module-data";

function FlexContainer({ Element }) {
    const [state, dispatch] = useReducer(AppReducer, data);

    return (
        <div className="d-flex justify-content-center flex-wrap mt-3 gap-2">
            {state.map((e) => (
                <React.Fragment key={e.id}>
                    <Element {...e} dispatch={dispatch} />
                </React.Fragment>
            ))}
        </div>
    );
}

export default FlexContainer;
