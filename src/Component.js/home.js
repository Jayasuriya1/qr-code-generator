import React from "react";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import {useNavigate} from "react-router-dom"

export default function Home(){
    const navigate = useNavigate()
    return(
        <div className="home-page">
            <div className="header-section">
                < QrCodeScannerIcon sx={{ color: "#5c5ce0" }} fontSize="large" className="pl-5"/>
                <h4>QR Code Generator</h4>
            </div>
            <div className="home-banner container">
                <div className="row align-items-center h-100">
                    <div className="col-12 col-md-6 home-banner-content">
                        <h1>Create your unique QR<br/>
                             code online for free.</h1>
                        <p>
                        Make your custom QR codes by adding your own URLs to free online QR code generator. It’s a faster and easier way for clients to visit your website, social media accounts, and other online resources. Plus, having QR codes on all your collateral will help boost customer engagement and experience. Just enter a URL and you’ll get your QR code in a few taps!
                        </p>
                        <button className="home-create-btn" onClick={()=>navigate("/qr/generator")}>Create your QR code now</button>
                    </div>
                    <div className="col-12 col-md-6 home-banner-image-container">
                        <img className="img-fluid" src="qr.webp"/>
                    </div>
                </div>
            </div>
        </div>
    )
}