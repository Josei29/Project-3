import React from "react";

const Home = () => {
    return (
        <div>
            <div className="parallax-container">
                <div className="parallax"><img src="https://media.idownloadblog.com/wp-content/uploads/2018/05/low-poly-texture-120-roundedhexagon-wwallpaper.png" alt="img1"></img>
                </div>
            </div>
            <div className="section white">
                <div className="row container">
                    <h2 className="header">About</h2>
                    <p className="grey-text text-darken-3 lighten-3">Main functions</p>
                </div>
            </div>
            <div className="parallax-container">
                <div className="parallax"><img src="https://stmed.net/sites/default/files/blue-turquoise-wallpapers-25169-985169.jpg" alt="img2"></img></div>
            </div>
            <div className="section white">
                <div className="row container">
                    <h2 className="header">Send Money</h2>
                    <p className="grey-text text-darken-3 lighten-3">More functions</p>
                </div>
            </div>
            <div className="parallax-container">
                <div className="parallax"><img src="https://media.idownloadblog.com/wp-content/uploads/2018/05/low-poly-texture-120-roundedhexagon-wwallpaper.png" alt="img3"></img></div>
            </div>

            <footer className="page-footer">
                <div class="footer-copyright">
                    <div class="container">
                        Created by: Jose Jimenez - 2018
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;