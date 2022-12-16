// node_modules
import React, { useContext } from "react";

// images
import SlideImage from "./assets/jason-briscoe-5IGprlBT5g4-unsplash.jpg";
import NewsImage from "./assets/malte-helmhold-_WNJlf2K4rM-unsplash.jpg";
import StarImage from "./assets/iconmonstr-star-3.svg";

const HomePage = () => {
    return (
        <main>
            <div className="container">
                <section className="slide">
                    <div className="row">
                        <div className="col-50">
                            <img src={SlideImage} alt="" />
                        </div>
                        <div className="col-50">
                            <div className="content">
                                <div className="pick color-gray">
                                    EDITOR'S PICK
                                </div>
                                <h3>
                                    News Needs to Meet Its Audiences Where They
                                    Are
                                </h3>
                                <p className="color-gray">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipissicing elit. Voluptate vero obcaecati
                                    natus adipisci necessitatibus eius, enim vel
                                    sit ad reiciendis. enim praesentium magni
                                    delectus cum, tempore deserunt aliquid
                                    quaerat culpa nemo veritatis, iste adipisci
                                    excepturi consectetur doloribus aliquam
                                    accusantium beatae?
                                </p>
                                <div className="info">
                                    Dave Rogers{" "}
                                    <span className="color-gray">in</span> Food
                                </div>
                                <small className="time color-gray">
                                    Jun 14{" "}
                                    <span className="fa fa-multi">.</span> 3 min
                                    read{" "}
                                    <span className="fa fa-star">
                                        <img src={StarImage} />
                                    </span>
                                </small>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="trend">
                    <div className="row">
                        <div className="col-67 editors-pick">
                            <div className="title">
                                <span>Editor's Pick</span>
                            </div>
                            <div className="row">
                                <div className="col-50 basic-item">
                                    <div className="img">
                                        <img src={NewsImage} alt="" />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            News Needs to Meet Its Audiences
                                            Where They Are
                                        </h4>
                                        <p className="color-gray">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipissicing elit.
                                            Eligendi temporibus praesentium
                                            neque, voluptatum quam quibusdam.
                                        </p>
                                        <div className="info">
                                            Dave Rogers{" "}
                                            <span className="color-gray">
                                                in
                                            </span>{" "}
                                            News
                                        </div>
                                        <small className="time color-gray">
                                            Jun 14{" "}
                                            <span className="fa fa-multi">
                                                .
                                            </span>{" "}
                                            3 min read{" "}
                                            <span className="fa fa-star">
                                                <img src={StarImage} />
                                            </span>
                                        </small>
                                    </div>
                                </div>
                                <div className="col-50 list">
                                    <ul>
                                        <li className="active">
                                            <div className="img">
                                                <img src={NewsImage} alt="" />
                                            </div>
                                            <div className="content">
                                                <h5>
                                                    News Needs to Meet Its
                                                    Audiences Where They Are
                                                </h5>
                                                <div className="info">
                                                    Dave Rogers{" "}
                                                    <span className="color-gray">
                                                        in
                                                    </span>{" "}
                                                    News
                                                </div>
                                                <small className="time color-gray">
                                                    Jun 14{" "}
                                                    <span className="fa fa-multi">
                                                        .
                                                    </span>{" "}
                                                    3 min read{" "}
                                                    <span className="fa fa-star">
                                                        <img src={StarImage} />
                                                    </span>
                                                </small>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img">
                                                <img src={SlideImage} alt="" />
                                            </div>
                                            <div className="content">
                                                <h5>
                                                    News Needs to Meet Its
                                                    Audiences Where They Are
                                                </h5>
                                                <div className="info">
                                                    Dave Rogers{" "}
                                                    <span className="color-gray">
                                                        in
                                                    </span>{" "}
                                                    News
                                                </div>
                                                <small className="time color-gray">
                                                    Jun 14{" "}
                                                    <span className="fa fa-multi">
                                                        .
                                                    </span>{" "}
                                                    3 min read{" "}
                                                    <span className="fa fa-star">
                                                        <img src={StarImage} />
                                                    </span>
                                                </small>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img">
                                                <img src={NewsImage} alt="" />
                                            </div>
                                            <div className="content">
                                                <h5>
                                                    News Needs to Meet Its
                                                    Audiences Where They Are
                                                </h5>
                                                <div className="info">
                                                    Dave Rogers{" "}
                                                    <span className="color-gray">
                                                        in
                                                    </span>{" "}
                                                    News
                                                </div>
                                                <small className="time color-gray">
                                                    Jun 14{" "}
                                                    <span className="fa fa-multi">
                                                        .
                                                    </span>{" "}
                                                    3 min read{" "}
                                                    <span className="fa fa-star">
                                                        <img src={StarImage} />
                                                    </span>
                                                </small>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-33 trending">
                            <div className="title">
                                <span>trending</span>
                            </div>
                            <ul>
                                <li>
                                    <span className="number">01</span>
                                    <div className="content">
                                        <h5>
                                            News Needs to Meet Its Audiences
                                            Where They Are
                                        </h5>
                                        <div className="info">
                                            Dave Rogers{" "}
                                            <span className="color-gray">
                                                in
                                            </span>{" "}
                                            News
                                        </div>
                                        <small className="time color-gray">
                                            Jun 14{" "}
                                            <span className="fa fa-multi">
                                                .
                                            </span>{" "}
                                            3 min read{" "}
                                            <span className="fa fa-star">
                                                <img src={StarImage} />
                                            </span>
                                        </small>
                                    </div>
                                </li>
                                <li>
                                    <span className="number">02</span>
                                    <div className="content">
                                        <h5>
                                            News Needs to Meet Its Audiences
                                            Where They Are
                                        </h5>
                                        <div className="info">
                                            Dave Rogers{" "}
                                            <span className="color-gray">
                                                in
                                            </span>{" "}
                                            News
                                        </div>
                                        <small className="time color-gray">
                                            Jun 14{" "}
                                            <span className="fa fa-multi">
                                                .
                                            </span>{" "}
                                            3 min read{" "}
                                            <span className="fa fa-star">
                                                <img src={StarImage} />
                                            </span>
                                        </small>
                                    </div>
                                </li>
                                <li>
                                    <span className="number">03</span>
                                    <div className="content">
                                        <h5>
                                            News Needs to Meet Its Audiences
                                            Where They Are
                                        </h5>
                                        <div className="info">
                                            Dave Rogers{" "}
                                            <span className="color-gray">
                                                in
                                            </span>{" "}
                                            News
                                        </div>
                                        <small className="time color-gray">
                                            Jun 14{" "}
                                            <span className="fa fa-multi">
                                                .
                                            </span>{" "}
                                            3 min read{" "}
                                            <span className="fa fa-star">
                                                <img src={StarImage} />
                                            </span>
                                        </small>
                                    </div>
                                </li>
                                <li>
                                    <span className="number">04</span>
                                    <div className="content">
                                        <h5>
                                            News Needs to Meet Its Audiences
                                            Where They Are
                                        </h5>
                                        <div className="info">
                                            Dave Rogers{" "}
                                            <span className="color-gray">
                                                in
                                            </span>{" "}
                                            News
                                        </div>
                                        <small className="time color-gray">
                                            Jun 14{" "}
                                            <span className="fa fa-multi">
                                                .
                                            </span>{" "}
                                            3 min read{" "}
                                            <span className="fa fa-star">
                                                <img src={StarImage} />
                                            </span>
                                        </small>
                                    </div>
                                </li>
                            </ul>
                            <a className="trend-all">
                                SEE ALL TRENDS{" "}
                                <span className="fa fa-arrow-right>">&gt;</span>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="banner">
                    <div className="row">
                        <div className="col-50">
                            <img src={SlideImage} alt="" />
                        </div>
                        <div className="col-50">
                            <div className="content">
                                <div className="pick color-gray">
                                    EDITOR'S PICK
                                </div>
                                <h3>
                                    News Needs to Meet Its Audiences Where They
                                    Are
                                </h3>
                                <p className="color-gray">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipissicing elit. Voluptate vero obcaecati
                                    natus adipisci necessitatibus eius, enim vel
                                    sit ad reiciendis. enim praesentium magni
                                    delectus cum, tempore deserunt aliquid
                                    quaerat culpa nemo veritatis, iste adipisci
                                    excepturi consectetur doloribus aliquam
                                    accusantium beatae?
                                </p>
                                <div className="info">
                                    Dave Rogers{" "}
                                    <span className="color-gray">in</span> Food
                                </div>
                                <small className="time color-gray">
                                    Jun 14{" "}
                                    <span className="fa fa-multi">.</span> 3 min
                                    read{" "}
                                    <span className="fa fa-star">
                                        <img src={StarImage} />
                                    </span>
                                </small>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="news">
                    <div className="row">
                        <div className="col-50 politics">
                            <div className="title">
                                <span>Politics</span>
                            </div>
                            <ul>
                                <li>
                                    <div className="img">
                                        <img src={NewsImage} alt="" />
                                    </div>
                                    <div className="content">
                                        <h5>
                                            News Needs to Meet Its Audiences
                                            Where They Are
                                        </h5>
                                        <p className="color-gray">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Eligendi temporibus praesentium
                                            neque, voluptatum quam quibusdam.
                                        </p>
                                        <div className="info">
                                            Dave Rogers{" "}
                                            <span className="color-gray">
                                                in
                                            </span>{" "}
                                            Food
                                        </div>
                                        <small className="time color-gray">
                                            Jun 14{" "}
                                            <span className="fa fa-multi">
                                                .
                                            </span>{" "}
                                            3 min read{" "}
                                            <span className="fa fa-star">
                                                <img src={StarImage} />
                                            </span>
                                        </small>
                                    </div>
                                </li>
                                <li>
                                    <div className="img">
                                        <img src={NewsImage} alt="" />
                                    </div>
                                    <div className="content">
                                        <h5>
                                            News Needs to Meet Its Audiences
                                            Where They Are
                                        </h5>
                                        <p className="color-gray">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Eligendi temporibus praesentium
                                            neque, voluptatum quam quibusdam.
                                        </p>
                                        <div className="info">
                                            Dave Rogers{" "}
                                            <span className="color-gray">
                                                in
                                            </span>{" "}
                                            Food
                                        </div>
                                        <small className="time color-gray">
                                            Jun 14{" "}
                                            <span className="fa fa-multi">
                                                .
                                            </span>{" "}
                                            3 min read{" "}
                                            <span className="fa fa-star">
                                                <img src={StarImage} />
                                            </span>
                                        </small>
                                    </div>
                                </li>
                                <li>
                                    <div className="img">
                                        <img src={NewsImage} alt="" />
                                    </div>
                                    <div className="content">
                                        <h5>
                                            News Needs to Meet Its Audiences
                                            Where They Are
                                        </h5>
                                        <p className="color-gray">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Eligendi temporibus praesentium
                                            neque, voluptatum quam quibusdam.
                                        </p>
                                        <div className="info">
                                            Dave Rogers{" "}
                                            <span className="color-gray">
                                                in
                                            </span>{" "}
                                            Food
                                        </div>
                                        <small className="time color-gray">
                                            Jun 14{" "}
                                            <span className="fa fa-multi">
                                                .
                                            </span>{" "}
                                            3 min read{" "}
                                            <span className="fa fa-star">
                                                <img src={StarImage} />
                                            </span>
                                        </small>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-50 business">
                            <div className="title">
                                <span>Business</span>
                            </div>
                            <ul>
                                <li>
                                    <div className="img">
                                        <img src={NewsImage} alt="" />
                                    </div>
                                    <div className="content">
                                        <h5>
                                            News Needs to Meet Its Audiences
                                            Where They Are
                                        </h5>
                                        <p className="color-gray">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Eligendi temporibus praesentium
                                            neque, voluptatum quam quibusdam.
                                        </p>
                                        <div className="info">
                                            Dave Rogers{" "}
                                            <span className="color-gray">
                                                in
                                            </span>{" "}
                                            Food
                                        </div>
                                        <small className="time color-gray">
                                            Jun 14{" "}
                                            <span className="fa fa-multi">
                                                .
                                            </span>{" "}
                                            3 min read{" "}
                                            <span className="fa fa-star">
                                                <img src={StarImage} />
                                            </span>
                                        </small>
                                    </div>
                                </li>
                                <li>
                                    <div className="img">
                                        <img src={NewsImage} alt="" />
                                    </div>
                                    <div className="content">
                                        <h5>
                                            News Needs to Meet Its Audiences
                                            Where They Are
                                        </h5>
                                        <p className="color-gray">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Eligendi temporibus praesentium
                                            neque, voluptatum quam quibusdam.
                                        </p>
                                        <div className="info">
                                            Dave Rogers{" "}
                                            <span className="color-gray">
                                                in
                                            </span>{" "}
                                            Food
                                        </div>
                                        <small className="time color-gray">
                                            Jun 14{" "}
                                            <span className="fa fa-multi">
                                                .
                                            </span>{" "}
                                            3 min read{" "}
                                            <span className="fa fa-star">
                                                <img src={StarImage} />
                                            </span>
                                        </small>
                                    </div>
                                </li>
                                <li>
                                    <div className="img">
                                        <img src={NewsImage} alt="" />
                                    </div>
                                    <div className="content">
                                        <h5>
                                            News Needs to Meet Its Audiences
                                            Where They Are
                                        </h5>
                                        <p className="color-gray">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Eligendi temporibus praesentium
                                            neque, voluptatum quam quibusdam.
                                        </p>
                                        <div className="info">
                                            Dave Rogers{" "}
                                            <span className="color-gray">
                                                in
                                            </span>{" "}
                                            Food
                                        </div>
                                        <small className="time color-gray">
                                            Jun 14{" "}
                                            <span className="fa fa-multi">
                                                .
                                            </span>{" "}
                                            3 min read{" "}
                                            <span className="fa fa-star">
                                                <img src={StarImage} />
                                            </span>
                                        </small>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="recent">
                    <div className="row">
                        <div className="col-67">
                            <div className="title">
                                <span>Recent News</span>
                            </div>
                            <ul>
                                <li>
                                    <div className="content">
                                        <h5>
                                            News Needs to Meet Its Audiences
                                            Where They Are
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Eligendi temporibus praesentium
                                            neque, voluptatum quam quibusdam.
                                        </p>
                                        <div className="info">
                                            Dave Rogers{" "}
                                            <span className="color-gray">
                                                in
                                            </span>{" "}
                                            Food
                                        </div>
                                        <small className="time color-gray">
                                            Jun 14{" "}
                                            <span className="fa fa-multi">
                                                .
                                            </span>{" "}
                                            3 min read{" "}
                                            <span className="fa fa-star">
                                                <img src={StarImage} />
                                            </span>
                                        </small>
                                    </div>
                                    <div className="img">
                                        <img src={NewsImage} alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <h5>
                                            News Needs to Meet Its Audiences
                                            Where They Are
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Eligendi temporibus praesentium
                                            neque, voluptatum quam quibusdam.
                                        </p>
                                        <div className="info">
                                            Dave Rogers{" "}
                                            <span className="color-gray">
                                                in
                                            </span>{" "}
                                            Food
                                        </div>
                                        <small className="time color-gray">
                                            Jun 14{" "}
                                            <span className="fa fa-multi">
                                                .
                                            </span>{" "}
                                            3 min read{" "}
                                            <span className="fa fa-star">
                                                <img src={StarImage} />
                                            </span>
                                        </small>
                                    </div>
                                    <div className="img">
                                        <img src={NewsImage} alt="" />
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <h5>
                                            News Needs to Meet Its Audiences
                                            Where They Are
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Eligendi temporibus praesentium
                                            neque, voluptatum quam quibusdam.
                                        </p>
                                        <div className="info">
                                            Dave Rogers{" "}
                                            <span className="color-gray">
                                                in
                                            </span>{" "}
                                            Food
                                        </div>
                                        <small className="time color-gray">
                                            Jun 14{" "}
                                            <span className="fa fa-multi">
                                                .
                                            </span>{" "}
                                            3 min read{" "}
                                            <span className="fa fa-star">
                                                <img src={StarImage} />
                                            </span>
                                        </small>
                                    </div>
                                    <div className="img">
                                        <img src={NewsImage} alt="" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-33 popular">
                            <div className="title">
                                <span>Popular Posts</span>
                            </div>
                            <ul>
                                <li>
                                    <span className="number">01</span>
                                    <div className="content">
                                        <h5>
                                            News Needs to Meet Its Audiences
                                            Where They Are
                                        </h5>
                                        <div className="info">
                                            Dave Rogers{" "}
                                            <span className="color-gray">
                                                in
                                            </span>{" "}
                                            Food
                                        </div>
                                        <small className="time color-gray">
                                            Jun 14{" "}
                                            <span className="fa fa-multi">
                                                .
                                            </span>{" "}
                                            3 min read{" "}
                                            <span className="fa fa-star">
                                                <img src={StarImage} />
                                            </span>
                                        </small>
                                    </div>
                                </li>
                                <li>
                                    <span className="number">02</span>
                                    <div className="content">
                                        <h5>
                                            News Needs to Meet Its Audiences
                                            Where They Are
                                        </h5>
                                        <div className="info">
                                            Dave Rogers{" "}
                                            <span className="color-gray">
                                                in
                                            </span>{" "}
                                            Food
                                        </div>
                                        <small className="time color-gray">
                                            Jun 14{" "}
                                            <span className="fa fa-multi">
                                                .
                                            </span>{" "}
                                            3 min read{" "}
                                            <span className="fa fa-star">
                                                <img src={StarImage} />
                                            </span>
                                        </small>
                                    </div>
                                </li>
                                <li>
                                    <span className="number">03</span>
                                    <div className="content">
                                        <h5>
                                            News Needs to Meet Its Audiences
                                            Where They Are
                                        </h5>
                                        <div className="info">
                                            Dave Rogers{" "}
                                            <span className="color-gray">
                                                in
                                            </span>{" "}
                                            Food
                                        </div>
                                        <small className="time color-gray">
                                            Jun 14{" "}
                                            <span className="fa fa-multi">
                                                .
                                            </span>{" "}
                                            3 min read{" "}
                                            <span className="fa fa-star">
                                                <img src={StarImage} />
                                            </span>
                                        </small>
                                    </div>
                                </li>
                                <li>
                                    <span className="number">04</span>
                                    <div className="content">
                                        <h5>
                                            News Needs to Meet Its Audiences
                                            Where They Are
                                        </h5>
                                        <div className="info">
                                            Dave Rogers{" "}
                                            <span className="color-gray">
                                                in
                                            </span>{" "}
                                            Food
                                        </div>
                                        <small className="time color-gray">
                                            Jun 14{" "}
                                            <span className="fa fa-multi">
                                                .
                                            </span>{" "}
                                            3 min read{" "}
                                            <span className="fa fa-star">
                                                <img src={StarImage} />
                                            </span>
                                        </small>
                                    </div>
                                </li>
                            </ul>
                            <a className="trend-all">
                                SEE ALL TRENDS{" "}
                                <span className="fa fa-arrow-right>">
                                    {" "}
                                    &gt;{" "}
                                </span>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default HomePage;
