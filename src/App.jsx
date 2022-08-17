import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import AK from './assets/AKA.jpg'
import A1 from './assets/A1.jpg'
// import 'https://code.jquery.com/jquery-3.4.1.js'
// import ScriptTag from 'react-script-tag';



function App() {

  const ref = useRef();

  return (
    <div>
    <body>
        
    <main>

      <nav>
        <img className="logo" src={AK} />
        <ul>
          <div className="downward-line"></div>
            <li><a href="https://discord.gg/nftsurance"><i className="fa-brands fa-discord fa-xl fa-bounce"></i></a></li>
            <li><a href="https://twitter.com/nftsurance_io?t=cuI6aWCbztJg3ddIx2EiOg&s=09"><i className="fa-brands fa-twitter fa-xl fa-bounce"></i></a></li>
            <li><a href="https://github.com/nftsurance"><i className="fa-brands fa-github fa-xl fa-bounce"></i></a></li>
        </ul>
      </nav>

      <header id="header">
        <h1 className="bouncing-letters">
            <span>H</span><span>i</span><span>,</span> <br/>
            <span>I</span><span>'</span><span>m</span> <span></span> 
            <img className="letter" src={A1} /><span>r</span><span>n</span><span>e</span><span>,</span><br/>
            <span>W</span><span>e</span><span>b</span><span>3</span><span></span> 
            <span>d</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span>
        </h1>

        <button className="buttonA">See my Work</button>
          
      </header>
      <div className="portfolio" id="portfolio"> 
        
        <h2 className="bouncing-letters">
            <span>M</span><span>y</span>
            <span>P</span><span>o</span><span>r</span><span>t</span><span>f</span><span>o</span><span>l</span><span>i</span><span>o</span>
        </h2>

        <p>Take a look at my work! Some of the projects are orders from previous <br/>customers or projects I was a member of, others I build for myself in my freetime</p> 

        <h1 className="background"> CRYPTO</h1>
        <h3>Blockchain Applications </h3>

          <section className="flex-card-wrapper " id="portfolio">
              
              
              <article className="flex-card-container bild-1 ">
                <div className="overlay1">
                  <div className="hovercontent">
                      <h4>Contract 1</h4>
                      <p className="p">Some details that explain wth is going on</p>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                    </div>
                  </div>
                  <div className="overlay">
                      <div className="icon">
                          <img className="img" src="https://assets.codepen.io/907368/mountain-solid.svg" />
                      </div>
                      <h4>Contract 1</h4>
                      <p className="p">Some stuff that akes money go around and around.</p>
                  </div>
                  
              </article>

              <article className="flex-card-container bild-2">
                <div className="overlay1">
                      <div className="hovercontent">
                      <h4>Contract 1</h4>
                      <p className="p">Some details that explain wth is going on</p>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                    </div>
                  </div>
                  <div className="overlay">
                      <div className="icon">
                          <img className="img" src="https://assets.codepen.io/907368/route-solid.svg"/>
                      </div>
                      <h4>Contract 1</h4>
                      <p className="p">Some stuff that akes money go around and around.</p>
                  </div>
              </article>

              <article className="flex-card-container bild-3">
                <div className="overlay1">
                      <div className="hovercontent">
                      <h4>Contract 1</h4>
                      <p className="p">Some details that explain wth is going on</p>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                    </div>
                  </div>
                  <div className="overlay">
                      <div className="icon">
                          <img className="img" src="https://assets.codepen.io/907368/passport-solid.svg"/>
                      </div>
                      <h4>Contract 1</h4>
                      <p className="p">Some stuff that akes money go around and around.</p>
                  </div>
              </article>

              <article className="flex-card-container bild-4">
                <div className="overlay1">
                      <div className="hovercontent">
                      <h4>Contract 1</h4>
                      <p className="p">Some details that explain wth is going on</p>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                    </div>
                  </div>
                  <div className="overlay">
                      <div className="icon">
                          <img className="img" src="https://assets.codepen.io/907368/snowflake-solid.svg"/>
                      </div>
                      <h4>Contract 1</h4>
                      <p className="p">Some stuff that akes money go around and around.</p>
                  </div>
              </article>
          </section>

            <h1 className="background1"> PLAY</h1>
            <h3>Games </h3>

          <section className="flex-card-wrapper" id="portfolio">
              
              <article className="flex-card-container1 bild-1 ">
                <div className="overlay1">
                      <div className="hovercontent">
                      <h4>Contract 1</h4>
                      <p className="p">Some details that explain wth is going on</p>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                    </div>
                  </div>
                  <div className="overlay">
                      <div className="icon">
                          <img className="img" src="https://assets.codepen.io/907368/mountain-solid.svg"/>
                      </div>
                      <h4>Contract 1</h4>
                      <p className="p">Some stuff that akes money go around and around.</p>
                  </div>
              </article>

              <article className="flex-card-container1 bild-2">
                <div className="overlay1">
                      <div className="hovercontent">
                      <h4>Contract 1</h4>
                      <p className="p">Some details that explain wth is going on</p>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                    </div>
                  </div>
                  <div className="overlay">
                      <div className="icon">
                          <img className="img" src="https://assets.codepen.io/907368/route-solid.svg"/>
                      </div>
                      <h4>Contract 1</h4>
                      <p className="p">Some stuff that akes money go around and around.</p>
                  </div>
              </article>

              <article className="flex-card-container1 bild-3">
                <div className="overlay1">
                      <div className="hovercontent">
                      <h4>Contract 1</h4>
                      <p className="p">Some details that explain wth is going on</p>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                    </div>
                  </div>
                  <div className="overlay">
                      <div className="icon">
                          <img className="img" src="https://assets.codepen.io/907368/passport-solid.svg"/>
                      </div>
                      <h4>Contract 1</h4>
                      <p className="p">Some stuff that akes money go around and around.</p>
                  </div>
              </article>

              <article className="flex-card-container1 bild-4">
                <div className="overlay1">
                      <div className="hovercontent">
                      <h4>Contract 1</h4>
                      <p className="p">Some details that explain wth is going on</p>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                    </div>
                  </div>
                  <div className="overlay">
                      <div className="icon">
                          <img className="img" src="https://assets.codepen.io/907368/snowflake-solid.svg"/>
                      </div>
                      <h4>Contract 1</h4>
                      <p className="p">Some stuff that akes money go around and around.</p>
                  </div>
              </article>
          </section>

          <h1 className="background2"> DESIGN</h1>
          <h3>Websites</h3>

          <section className="flex-card-wrapper" id="portfolio">
              
              <article className="flex-card-container2 bild-1 ">
                <div className="overlay1">
                      <div className="hovercontent">
                      <h4>Contract 1</h4>
                      <p className="p">Some details that explain wth is going on</p>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                    </div>
                  </div>
                  <div className="overlay">
                      <div className="icon">
                          <img className="img" src="https://assets.codepen.io/907368/mountain-solid.svg"/>
                      </div>
                      <h4>Contract 1</h4>
                      <p className="p">Some stuff that akes money go around and around.</p>
                  </div>
              </article>

              <article className="flex-card-container2 bild-2">
                <div className="overlay1">
                      <div className="hovercontent">
                      <h4>Contract 1</h4>
                      <p className="p">Some details that explain wth is going on</p>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                    </div>
                  </div>
                  <div className="overlay">
                      <div className="icon">
                          <img className="img" src="https://assets.codepen.io/907368/route-solid.svg"/>
                      </div>
                      <h4>Contract 1</h4>
                      <p className="p">Some stuff that akes money go around and around.</p>
                  </div>
              </article>

              <article className="flex-card-container2 bild-3">
                <div className="overlay1">
                      <div className="hovercontent">
                      <h4>Contract 1</h4>
                      <p className="p">Some details that explain wth is going on</p>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                    </div>
                  </div>
                  <div className="overlay">
                      <div className="icon">
                          <img className="img" src="https://assets.codepen.io/907368/passport-solid.svg"/>
                      </div>
                      <h4>Contract 1</h4>
                      <p className="p">Some stuff that akes money go around and around.</p>
                  </div>
              </article>

              <article className="flex-card-container2 bild-4">
                <div className="overlay1">
                      <div className="hovercontent">
                      <h4>Contract 1</h4>
                      <p className="p">Some details that explain wth is going on</p>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                      <button className="hoverbutton" ><a href="" >Details</a></button>
                    </div>
                  </div>
                  <div className="overlay">
                      <div className="icon">
                          <img className="img" src="https://assets.codepen.io/907368/snowflake-solid.svg"/>
                      </div>
                      <h4>Contract 1</h4>
                      <p className="p">Some stuff that akes money go around and around.</p>
                  </div>
              </article>
          </section>
          </div>

        
        <section className="about-me">
          <h2 className="bouncing-letters">
            <span>A</span><span>b</span><span>o</span><span>u</span><span>t</span> 
            <span>M</span><span>e</span>
          </h2>

          <div className="content">
            <p className="aboutme-text">I am a passiate web3 developer having skills in various fields. I am always intereested in new an exciting opportunities to learn grow and build toghether with meaningful projects and accelerate the growth of web3 the best I can.</p>
            
          </div>
          <div class="tagcloud" id="tag"></div>
      </section>
         
      <section className="contact reveal" id="contact">
        <h1 className="background4"> CONTACT </h1>
        <h2 className="bouncing-letters">
        <span>G</span><span>e</span><span>t</span>
        <span>i</span><span>n</span> 
        <span>T</span><span>o</span><span>u</span><span>c</span><span>h</span>
       </h2>
        <p>You like my work and are interested to potentially work together on a project or hire me? Feel free to fill out the contact form below or reach out to me via any social media channel you see on the right.</p>
        <div>
          <form action="https://formsubmit.co/arnekaufmannbusiness@gmail.com" method="POST" autoComplete="off">
              <input type="hidden" name="_next" value="http://localhost:3000/" />
              <input type="hidden" name="_captcha" value="false"/>
              <label className="custom-field two">
              <input type="text" name="name" placeholder="&nbsp;" className="input-name" required/>
              <span className="placeholder">Name</span>
              </label>
              <label className="custom-field two">
              <input type="email" name="email" placeholder="&nbsp;" className="input-mail" autoComplete="off" required/>
              <span className="placeholder">Mail</span>
              </label>
              <label className="custom-field two">
              <input type="text" name="subject" placeholder="&nbsp;" className="input-subject" required />
              <span className="placeholder">Subject</span>
              </label>
              <label className="custom-field two">
              <textarea type="text" name="content" placeholder="&nbsp;" className="input-message" rows="6" required/>
              <span className="placeholder1">Message</span>
              </label>
              <button className="buttonC" type="submit">Send message!</button>
          </form>
          
        </div>

        <div className="planet" id="planet">
          <canvas className="bg" id="bg"></canvas>
          <div className="residing">
            <p className="currently">Location: </p><h1 className="city" id="text"></h1>
          </div>
        </div>
        
      </section>


    </main>
  </body>
  </div>

  );
}



export default App;
