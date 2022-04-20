import React from 'react'
import '../Css/style.css'
function Footer() {
  return (
    <footer className="footer">
        <div className="footer__logo-box">
            <img  src="images/logo-white.png" alt="" className="footer__logo"/>
        </div>
        <div className="row">
            <div className="col-1-of-2">
                <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item"><a href="#" className="footer__link">About</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Privacy</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-1-of-2">
                <p className="footer__copyright">
                    This is a Project of Team 12 of SPL 1 !!!!!!!! By <br/> <a href="" className="footer__link">Tasfia Barshat </a><br/> <a href="" className="footer__link">Talimul Bari ShresTho </a><br/> <a href="" className="footer__link"> Mumtahina Rahman</a> <br/> . The design of the homescreen  is inspired from Jonas Schmedtman.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer