
import mail from '../assets/mail.svg'
//import './otp.css'
import { useLocation } from 'react-router-dom';


const OtpVerify = () => {
const { state } = useLocation();
const phone = state?.phone;
    return ( <div>
        <h1 className="verify">Verification</h1>
        <img src={mail} alt="Mail Icon" />
  
    </div>  
    );
}
export default OtpVerify;