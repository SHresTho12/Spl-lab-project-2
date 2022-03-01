import React from 'react'
import '../Css/style.css'
function Footer() {
  return (
    <footer class="footer">
        <div class="footer__logo-box">
            <img  src="images/logo-white.png" alt="" class="footer__logo"/>
        </div>
        <div class="row">
            <div class="col-1-of-2">
                <div class="footer__navigation">
                    <ul class="footer__list">
                        <li class="footer__item"><a href="#" class="footer__link">About</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Privacy</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Terms</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-1-of-2">
                <p class="footer__copyright">
                    This is a Project of Team 12 of SPL 1 !!!!!!!! By <br/> <a href="" class="footer__link">Tasfia Barshat </a><br/> <a href="" class="footer__link">Talimul Bari ShresTho </a><br/> <a href="" class="footer__link"> Mumtahina Rahman</a> <br/> . The design of the homescreen  is inspired from Jonas Schmedtman.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer