import BigLogo from "../img/biglogo.svg";
import x from "../img/x.svg";
import tg from "../img/tg.svg";
import mac from "../img/mac.png";


const Intro = () => {
    
    return (
        <>
            <a id="intro" className="anchor" href=""></a>
        <div className="intro">
            <div className="banner">
                <img src={BigLogo} className="banner__logo" />
                <div className="banner__text">
                    LuckyGap Casino is a gambling platform that operates on a revenue-share model, creating an ecosystem in which holders become partial owners of the casino and benefit from the generated revenue. The casino is powered by <span className='banner__text_span'>$LGP</span>.
                </div>
                {/* <div className="banner__text">
                    CA: <span className='banner__text_span'></span>
                </div> */}
                <div className="links">
                    <a target="_blank" href="https://x.com/lgpcasino" style={{marginRight: "8px"}}>
                        <img src={x} alt="x"/>
                    </a>
                    {/* <a target="_blank" href="https://t.me/">
                        <img src={tg} alt="tg"/>
                    </a> */}
                </div>
            </div>
            <div className="girl">
                <img  src={mac} className="girl__pic" />
            </div>
        </div>
        </>
    );
  };
  
export default Intro;