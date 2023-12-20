import React from "react";

function Content() {
  return (
    <div>
      <div id="cursor" />
      <div id="cursor-blur" />
      <video
        autoPlay
        loop
        muted
        src="https://player.vimeo.com/external/408683833.sd.mp4?s=d7b112898d296420657e31ff283b083af3fcbdc5&profile_id=164&oauth2_token_id=57447761"
      />
      <div id="main">
        <div id="page1">
          <h1>योग: कर्मसु कौशलम् </h1>
          <h2>WELCOME TO Maa Bhagwati Krishi Seva Kendra!</h2>
          <p>
            Maa Bhagwati is a agricultural shop located in Ujjain, (M.P) .We
            have multiple products in chemicals, pesticides and also we have bio
            products. We believe in quality of the products we try to full fill
            the requirements of the farmers.
          </p>
          <div id="arrow">
            <i className="ri-arrow-down-line" />
          </div>
        </div>
        <div id="page2">
          <div id="scroller">
            <div id="scroller-in">
              <h4>BSF.</h4>
              <h4>UPL.</h4>
              <h4>CYGENTA.</h4>
              <h4>GODRAGE.</h4>
              <h4>AGROCHEM.</h4>
              <h4>DEV AGRO CHEMICAL.</h4>
              <h4>KEVAL SHIV MARKETING.</h4>
              <h4>SWAL.</h4>
            </div>
            <div id="scroller-in">
              <h4>BSF.</h4>
              <h4>UPL.</h4>
              <h4>CYGENTA.</h4>
              <h4>GODRAGE.</h4>
              <h4>AGROCHEM.</h4>
              <h4>DEV AGRO CHEMICAL.</h4>
              <h4>KEVAL SHIV MARKETING.</h4>
              <h4>SWAL.</h4>
            </div>
          </div>
          <div id="about-us">
            <img
              src="https://lh5.googleusercontent.com/p/AF1QipPphVA_HfvT_yLmIjZWBO2-lPtScNMXfUsufruF=w173-h175-n-k-no"
              alt=""
            />
            <div id="about-us-in">
              <h3>ABOUT US</h3>
              <p>
                Add:- 42/5 Murlipura (Mullapura), Badnagar road, Ujjain 456006,
                Madhya Pradesh, India. We have pesticides,
                fungicides,weedicides, fertilizers, seeds available for all
                crops. We have been ready to serve you for the last 20 years and
                will continue to do so in future too.
              </p>
            </div>
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipMZhERqB3UzHaHcRpcM4S8kQ0R2ACCepMQt7w1E=s1360-w1360-h1020"
              alt=""
            />
          </div>
          <div id="cards-container">
            <div className="card" id="card1">
              <div className="overlay">
                <h4>Pesticides</h4>
                <p>
                  Pesticides are used in agriculture to control weeds, insect
                  infestation and diseases. There are many different types of
                  pesticides; each is meant to be effective against specific
                  pests.
                </p>
              </div>
            </div>
            <div className="card" id="card2">
              <div className="overlay">
                <h4>Fertilisers</h4>
                <p>
                  Fertilisers are additional substances supplied to the crops to
                  increase their productivity. These are used by the farmers
                  daily to increase the crop yield. These fertilisers contain
                  essential nutrients required by the plants, including
                  nitrogen, potassium, and phosphorus.
                </p>
              </div>
            </div>
            <div className="card" id="card3">
              <div className="overlay">
                <h4>Seeds</h4>
                <p>
                  We contain all types of seeds used in agriculture like
                  vegitable seeds, fruit seeds, soyabean, weat etc.
                </p>
              </div>
            </div>
          </div>
          <div id="green-div">
            <img
              src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
              alt=""
            />
            <h4>
              CONTACT US TO KNOW MORE ABOUT US AND IF YOU HAVE ANY QUERY FEEL
              FREE TO CONTACT
            </h4>
            <img
              src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
              alt=""
            />
          </div>
        </div>
        <div id="page3">
          <p>
            Excellent reviews by the customers, we have 2000+ customer support.
            we insure that we provide you best quality and all products. <br></br>
            MAA BHAGWATI KRISHI SEVA KENDRA WELCOMES YOU!! 
          </p>
          <img
            id="colon1"
            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
            alt=""
          />
          <img
            id="colon2"
            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
            alt=""
          />
        </div>
        <div id="page4">
          <h1>WHAT ARE YOU WAITING FOR?</h1>
          <div className="elem">
            <h2>LOW PRICE</h2>
            <img
              src="https://deniseleeyohn.com/wp-content/uploads/2014/03/discount.jpg"
              alt=""
            />
          </div>
          <div className="elem">
            <h2>GUIDANCE</h2>
            <img
              src="https://www.iwmbuzz.com/wp-content/uploads/2021/08/we-all-need-someone-to-guide-us-on-the-right-track-so-heres-a-career-counselling-guidance-for-you-all-920x518.jpeg"
              alt=""
            />
          </div>
          <div className="elem">
            <h2>QUALITY</h2>
            <img
              src="https://static.javatpoint.com/tutorial/quality-assurance/images/quality-assurance1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
