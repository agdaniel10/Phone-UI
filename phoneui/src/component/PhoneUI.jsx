import "./phoneUI.css"
const PhoneUI = () => {
    return (
        <div className="main">

            <div className="layer1">
                <div className="bar">
                    <p>4:20</p>
                    <div className="dark">

                    </div>
                    <div className="bar-icon">
                        <span><ion-icon name="globe-outline"></ion-icon></span>
                        <span><ion-icon name="wifi-outline"></ion-icon></span>
                        <span><ion-icon name="battery-full-outline"></ion-icon></span>
                    </div>
                </div>

                <div className="bar-below">
                    <div className="bar-right">
                        <span className="person"><ion-icon name="person"></ion-icon></span>
                        <p>Only1lara345</p>
                        <span className="check"><ion-icon name="checkmark-circle"></ion-icon></span>
                    </div>

                    <div className="bar-left">
                        <span><ion-icon name="notifications-circle-outline"></ion-icon></span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default PhoneUI