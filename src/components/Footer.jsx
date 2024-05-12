import classes from "../modules/Footer.module.scss"
import layout from "../modules/Layout.module.scss"
import SendIcon from "../assets/send-icon.svg"
import QrCodeIcon from "../assets/qr-code.svg";
import GooglePlayIcon from "../assets/google-play.svg";
import AppStoreIcon from "../assets/app-store.svg";
import FacebookLogo from "../assets/icon-facebook.svg";
import TwitterLogo from "../assets/Icon-twitter.svg";
import LinkedinLogo from "../assets/Icon-linkedin.svg";
import InstagramLogo from "../assets/icon-instagram.svg";

const Footer = () => {
    return (
        <div className={classes['footer-wrapper']}>
            <div className={`${classes['footer']} ${layout['container']}`}>
                <div className={classes['footer-list-1']}>
                    <h1>Exclusive</h1>
                    <h4>Subscribe</h4>
                    <div>
                        <p>Get 10% off your first order</p>
                        <div className={classes['input-wrapper']}>
                            <input placeholder="Enter your email"/>
                            <img src={SendIcon} alt="send-icon"/>
                        </div>
                    </div>
                </div>
                <div className={classes['footer-list-2']}>
                    <ul>
                        <li>
                            <h2>Support</h2>
                        </li>
                        <li>
                            <p>111 Bijoy sarani, Dhaka,<br/> DH 1515, Bangladesh.</p>
                        </li>
                        <li>
                            <p>exclusive@gmail.com</p>
                        </li>
                        <li>
                            <p>+88015-88888-9999</p>
                        </li>
                    </ul>


                </div>
                <div className={classes['footer-list-3-4']}>
                    <ul>
                        <li>Account</li>
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </div>
                <div className={classes['footer-list-3-4']}>
                    <ul>
                        <li>Quick Link</li>
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className={classes['footer-list-5']}>
                    <ul>
                        <li>
                            Download App
                        </li>
                        <li>
                            <div>
                                <p>Save $3 with App New User Only</p>
                                <div className={classes['download-app']}>
                                    <img src={QrCodeIcon} className={classes['qr-code-icon']}/>
                                    <div className={classes['mobile-download-icons']}>
                                        <img src={GooglePlayIcon} alt="google-play-icon"/>
                                        <img src={AppStoreIcon} alt="appstore-icon"/>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={FacebookLogo} alt="facebook-logo"/>
                            <img src={TwitterLogo} alt="twitter-logo"/>
                            <img src={InstagramLogo} alt="instagram-logo"/>
                            <img src={LinkedinLogo} alt="linkedin-logo"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer
