import React from 'react'



const Footer = () => {
    return (
        <div className="footer-cont">
            <div className="inner-footer">
                <div className="footer-header">
                    <div className="ftr-h-l">
                        <h2>GIGI SCARBOROUGH</h2>
                    </div>
                 
                    <div className="ftr-h-r">

                        <h3>JOIN ME ON</h3>
                        <div className="ftr-links">
                            <div className="ftr-link">
                                <a href="https://github.com/gigimscarborough">
                                    <i className=" ftl fc fas fa-circle"></i>
                                    <i className=" ftl fi fab fa-github-square"></i>
                                </a>
                            </div>
                            <div className="ftr-link">
                                <a href="https://angel.co/u/gigi-scarborough">
                                    <i className="ftl fc fas fa-circle"></i>
                                    <i className="ftl fi fab fa-angellist"></i>
                                </a>
                            </div>
                            <div className="ftr-link">
                                <a href="https://linkedin.com/in/gigimscarborough">
                                    <i className="ftl fc fas fa-circle"></i>
                                    <i className="ftl fi fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fine-print">
                    <p>Copyright © 2021 FullPlate, Inc.- All rights reserved.</p>
                    <p>FullPlate is an OpenTable Clone created for educational purposes and is the creation and intellectual property of Gigi M. Scarborough.</p>
                </div>
            </div>
        </div>
    )

}

export default Footer;