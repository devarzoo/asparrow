import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FormOne from '../contact/FormOne';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import background from '../../assets/logoo/asparrow-bg.jpeg'


const BannerFive = () => {
    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Dedication", "Invvovation", "Passion"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
    return (
        <div className="banner banner-style-5" style={{backgroundImage:`url(${process.env.PUBLIC_URL + background})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-7">
                        <div className="banner-content">
                            {/* <h1 className="title">Technology 
                                &amp; design Studio</h1> */}
                                    <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
                  <h1 style={{color:'#FFFFFF'}}>{`We Belive in`} <span className="txt-rotate" dataPeriod="500" data-rotate='[ "Dedication", "Invvovation", "Passion" ]'><span className="wrap">{text}</span></span></h1>
                </div>}
            </TrackVisibility>
                            <div>
                                <Link to={process.env.PUBLIC_URL + "/project-grid-one"} className="axil-btn btn-fill-white btn-large">View Showcase</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-5">
                        <div className="banner-form">
                            <div className="contact-form-box shadow-box">
                                <h3 className="title">Get a free Keystroke quote now</h3>
                                <FormOne />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerFive;