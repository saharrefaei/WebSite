import React, { useState } from "react"
import   './content.css'

function content() {
    const [isToggled, setIsToggled] = useState(false);
    const onToggle = () => setIsToggled(!isToggled);
return (
<div className="contentPage">
    <div>
        <h3 className=" Quickselect">
            Quick select
        </h3>
    </div>
    <div>
        <p className="decription">By defult you'll only get result from your zone - turn if ogg and you'll see all zones</p>
    </div>
    <div>
        <div>

        </div>
        <div className="toggle">

        <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
            <p >Search only my zones & regions</p>
        </div>
    </div>
</div>
)
}
export default React.memo(content)