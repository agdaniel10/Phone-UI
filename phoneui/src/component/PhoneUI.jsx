import "./phoneUI.css"
import img1 from "../assets/grok1.jpg"
import img2 from "../assets/grok2.jpg"

const PhoneUI = () => {

    return (
        <div className="main">

            {/* Layer 1 div */}
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
                        <span className="bar-left-main"><ion-icon name="notifications-circle-outline"></ion-icon></span>
                        <span className="red-dot"></span>
                    </div>
                </div>
            </div>

            {/* Layer 2 div --- Amount Cards */}
            <div className="layer2">
                <div className="layer2main">
                    <div className="card1">
                        <span className="c1"><ion-icon name="notifications"></ion-icon></span>
                        <p>Total Payout</p>
                        <h2>N40,000</h2>
                    </div>

                    <div className="card1">
                        <span className="c2"><ion-icon name="notifications"></ion-icon></span>
                        <p>Total Trades</p>
                        <h2>10</h2>
                    </div>
                </div>

                <div className="layer2main2" >
                    <div className="card1">
                        <span className="c3"><ion-icon name="notifications"></ion-icon></span>
                        <p>Completed Trades</p>
                        <h2>8</h2>
                    </div>

                    <div className="card1">
                        <span className="c4"><ion-icon name="notifications"></ion-icon></span>
                        <p>Failed Trades</p>
                        <h2>2</h2>
                    </div>
                </div>
            </div>

            <h4 className="qa">Quick Actions</h4>

            <div className="img-dv">
                <img src={img2} alt="img2" />
                <img src={img1} alt="img1" />
            </div>

            <div className="gv">
                <h4>Gift cards</h4>
                <a href="#">View all</a>
            </div>

            <div className="sec-class">
                <div className="cardv">
                    <span><ion-icon name="logo-amazon"></ion-icon></span>
                    <p>Amazon</p>
                    <h5>N 1,460.00</h5>
                    <p>USD</p>
                </div>

                <div className="cardv">
                    <span><ion-icon name="logo-apple"></ion-icon></span>
                    <p>iPhone</p>
                    <h5>N 1,394.09</h5>
                    <p>CAD</p>
                </div>

                <div className="cardv">
                    <span><ion-icon name="logo-codepen"></ion-icon></span>
                    <p>Amazon</p>
                    <h5>N 1,000.00</h5>
                    <p>GBP</p>
                </div>
            </div>

        </div>
    )
}

export default PhoneUI