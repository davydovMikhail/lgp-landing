import blink from '../img/blink.svg'

const Demo = () => {
    
    return (
        <div className="demo">
            <div className="demo__text">
              <img src={blink} alt="blink" className='demo__blink' />
              <div className='demo__fill'>
                Make a bets and <br /> win <span className='demo__fill_span'>$LGP</span>
              </div>
            </div>
            <div className="demo__buttons">
                <a className="demo__button button__transparent" target='_blank' href="https://test.lgp.casino/" style={{marginRight: "8px"}}>Try Testnet</a>
                <a className="demo__button button__style" target='_blank' href="https://raydium.io/swap/?inputCurrency=sol">Buy tokens</a>
            </div>
        </div>
    );
  };
  
export default Demo;