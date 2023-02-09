import React from "react";
import './WallTypes.css'

function WallTypes() {
    return (
        <div>
            <div className="Types">
                <button className="bTypes">Posts</button>
                <button className="bTypes">Saved</button>
                <button className="bTypes">Tagged</button>
            </div>
        </div>
    )
}

export default WallTypes;