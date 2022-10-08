import "./home.styles.css";
import {Link} from 'react-router-dom';

export const Home = () => {
    return(
        <div className="home">
            <section> 
                <div className="home--intro">
                    
                    <h1>Lorem ipsum dolor sit amet consectetur, a...!</h1>
                    <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque doloremque sint eius, a, eaque eveniet sunt recusandae dolorem.</h3>
                    <div className="home--intro_links">
                        {/* <img src="https://picsum.photos/id/237/200/300" /> */}
                        <Link to='/login'>Login here</Link>
                        <Link to='/register'>Register here</Link>
                    </div>
                
                </div>                      
            
                
            </section>

            <section>
                <div  className="home--hero">
                    <h2>We have hundreds of card templates ready to use!</h2>
                    <img src="https://picsum.photos/id/237/200/300" alt="picsum" />

                </div>
            </section>
            <section >
                <div  className="home--hero row-reverse_desktop">
                    <h2>Stop wasting your time designing cards, we do that for you! </h2>
                    <img src="https://picsum.photos/id/237/200/300" alt="picsum" />
                </div>
            </section>

            <section >
                <div className="home--main">
                    <div>
                        <img src="https://picsum.photos/seed/picsum/200/300" alt="picsum"  />
                        <h3>Be more productive.</h3>
                    </div>
                    <div>

                        <img src="https://picsum.photos/seed/picsum/200/300" alt="picsum"  />
                        <h3>Save time for you and your coworkers.</h3>     
                    </div>
                    <div>
                        <img src="https://picsum.photos/seed/picsum/200/300" alt="picsum"  />
                        <h3>Focus on what's important.</h3>     
                    </div>
                </div>
            </section>
            <section >
                <div className="home--last-section">

                    <h2>Gain access to hundreds of designs, made by industry experts!</h2>
                    <div className="home--intro_links">
                        {/* <img src="https://picsum.photos/id/237/200/300" /> */}
                        <Link to='/login'>Login here</Link>
                        <Link to='/register'>Register here</Link>
                    </div>
                </div>
            </section>

        </div>
    )
}