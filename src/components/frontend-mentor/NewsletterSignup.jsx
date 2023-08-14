import React from "react";

function NewsletterSignup() {
  return (
    <div className="grid ">
      <img
        src="/frontend-mentor/newsletter-signup/illustration-sign-up-mobile.svg"
        alt=""
        className="md:col-start-2"
      />

      <div className="text-slate-800 ">
        <h1 className="text-3xl  font-bold">Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>
            <div className=" flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
              >
                <g fill="none">
                  <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                  <path
                    stroke="#FFF"
                    stroke-width="2"
                    d="M6 11.381 8.735 14 15 8"
                  />
                </g>
              </svg>
              <p>Product discovery and building what matters</p>
            </div>
          </li>
          <li>
            <div className=" flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
              >
                <g fill="none">
                  <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                  <path
                    stroke="#FFF"
                    stroke-width="2"
                    d="M6 11.381 8.735 14 15 8"
                  />
                </g>
              </svg>
              <p>Measuring to ensure updates are a success</p>
            </div>
          </li>
          <li>
            <div className=" flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
              >
                <g fill="none">
                  <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                  <path
                    stroke="#FFF"
                    stroke-width="2"
                    d="M6 11.381 8.735 14 15 8"
                  />
                </g>
              </svg>
              <p>And much more!</p>
            </div>
          </li>
        </ul>
        <p>Email address</p>
        <input type="text" placeholder="email@company.com" />
        <button>Subscribe to monthly newsletter</button>
      </div>
    </div>
  );
}

export default NewsletterSignup;
