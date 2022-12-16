import React, { useContext } from "react";

//image
import HeartImage from "./assets/heart-svgrepo-com.svg";
import SubmitButton from "./assets/free_icon_1 (1).svg";

const FooterComponent: React.FC = () => {
    return (
        <div>
            <section className="subcribe">
                <div className="container">
                    <div className="row">
                        <div className="col-50">
                            <div className="content">
                                <div className="title">Newsletter Subcribe</div>
                                <p className="color-gray">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Perferendis aspematur ut at
                                    quae omnis pariatur obcaecati possius nisi
                                    ea istel
                                </p>
                            </div>
                        </div>
                        <div className="col-50 form-wrap">
                            <form>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                />
                                <button type="submit">
                                    <img src={SubmitButton} alt="" />
                                    <span className="fa fa-envelop"></span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="copyright">
                    Copyright&copy;2022 All rights reseved|This template is made
                    with{" "}
                    <span className="fa fa-heart color-red">
                        <img src={HeartImage} alt="" />
                    </span>
                    by <a className="author">Colorlib</a>
                </div>
            </footer>
        </div>
    );
};

export default FooterComponent;
