import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import bbc from "../assets/bbc.jpg"
import insider from "../assets/insider.jpg"
import cnbc from "../assets/cnbc.jpg"
import ft from "../assets/ft.jpg"
import forbes from "../assets/forbes.jpg"
import indepen from "../assets/indepen.jpg"
import users from "../assets/users.png"
import user from "../assets/user.png"
import mobile from "../assets/mobile.png"
import mobileview from "../assets/mobile.png"
import cards from "../assets/cards.png"
import multicomments from "../assets/multicomments.png"
import reviews from "../assets/reviews.png"
import lock from "../assets/lock.jpg"
import camera from "../assets/camera.jpg"
import agent from "../assets/agent.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Hileets" />
    <Header />

    <section className="companies d-flex align-items-center">
      <div className="companies__container container">
        <div className="companies__row row">
          <div className="companies__content d-flex flex-column justify-content-around col-12">
            <div className="companies__heading">
              Trusted by thousands of businesses globally
            </div>
            <div className="companies__cards-wrapper">
              <div className="companies__card ">
                <div className="companies__number">935,994</div>
                <div className="companies__text">businesses</div>
                <div className="space-4"></div>
                <hr className="companies__line"></hr>
              </div>
              <div className="companies__card ">
                <div className="companies__number">2,399,459</div>
                <div className="companies__text">freelancers</div>
                <div className="space-4"></div>
                <hr className="companies__line"></hr>
              </div>
              <div className="companies__card ">
                <div className="companies__number">£130,572,105</div>
                <div className="companies__text">earned by freelancers</div>
                <div className="space-4"></div>
                <hr className="companies__line"></hr>
              </div>
            </div>
            <div className="companies__subtext">Seen on:</div>
            <div className="companies__logo-wrapper">
              <img className="companies__logo" src={bbc} />
              <img className="companies__logo" src={insider} />
              <img className="companies__logo" src={cnbc} />
              <img className="companies__logo" src={ft} />
              <img className="companies__logo" src={forbes} />
              <img className="companies__logo" src={indepen} />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="browse d-flex align-items-center">
      <div className="browse__container container">
        <div className="browse__row row">
          <div className="browse__left col-4">
            <h3>Discover Freelancers</h3>
            <h2>Hire in minutes pay per hour</h2>
            <p>
              PeoplePerHour connects your business to an international community
              of freelancers who want nothing more than to help your business
              succeed. Discover rated and reviewed experts for every skill
              imaginable — One discovery could change your business forever.
            </p>
            <div className="btn btn-default d-flex align-items-center justify-content-center">
              Browse Freelancers
            </div>
            <h3>Popular Categories:</h3>
          </div>
          <div className="browse__right col-5 container-fluid">
            <img
              className="browse__image-users img-fluid "
              src={users}
              alt="users"
            />
            <img
              className="browse__image-user img-fluid "
              src={user}
              alt="user"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="post d-flex align-items-center">
      <div className="post__container container">
        <div className="post__row row">
          <div className="post__left col-6 container-fluid">
            <img
              className="post__image-mobile img-fluid"
              src={mobile}
              alt="mobile"
            />
          </div>
          <div className="post__right col-5">
            <h3>Let freelancers discover you</h3>
            <h2>Post projects quickly, receive responses even quicker.</h2>
            <p>
              When you've got a project in mind, post it using our project
              writing tool. It's programmed to ask all the right questions to
              help you get your project ready for publishing. Our artificial
              intelligence system does the hard work — matching and contacting
              the best freelance talent for your project. Each freelancer then
              responds with their tailored proposal within minutes.
            </p>
            <div className="btn btn-default d-flex align-items-center justify-content-center">
              Post a project
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="offer d-flex align-items-center">
      <div className="offer__container container">
        <div className="offer__row row">
          <div className="offer__left col-4">
            <h3>Explore Offers</h3>
            <h2 className="offer__heading">Discover fixed price offers.</h2>
            <p className="offer__text">
              PeoplePerHour gives you a unique way to discover services to grow
              your business. Explore fixed-price offers from as little as £10 —
              Giving you the freedom to test ideas cost effectively. Once you're
              happy with the results, request a follow-on project.
            </p>
            <div className="btn btn-default d-flex align-items-center justify-content-center">
              Browse Offers
            </div>
            <h3>Popular offer categories:</h3>
          </div>
          <div className="offer__right col-8 container-fluid">
            <img className="offer__image-cards img-fluid" src={cards} />
          </div>
        </div>
      </div>
    </section>
    <section className="trust d-flex align-items-center">
      <div className="trust__container container">
        <div className="trust__row row">
          <div className="trust__left col-8 container-fluid">
            <img
              className="trust__image-comments img-fluid"
              src={multicomments}
            />
          </div>
          <div className="trust__right col-4">
            <h3>Trusted Experts</h3>
            <h2 className="trust__heading">
              Trust our experts to help grow your business.
            </h2>
            <p className="trust__text">
              We carefully check everybody before allowing them onto our
              platform to guarantee you'll be working with an expert in their
              field of work. Above all, every freelancer is rated and reviewed
              by the PeoplePerHour community.
            </p>
            <div className="btn btn-default d-flex align-items-center justify-content-center">
              Browse Freelancers
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="control d-flex align-items-center">
      <div className="control__container container">
        <div className="control__row row">
          <div className="control__left col-4">
            <h3>Stay in control, keep in touch</h3>
            <h2>Collaborate with ease, and speed.</h2>
            <p>
              PeoplePerHour gives you a clearly marked inbox of tasks,
              structured threads for communication and simple, organised
              invoicing. Make drowning in admin a thing of the past.
            </p>
            <div className="btn btn-default d-flex align-items-center justify-content-center">
              Browse Freelancers
            </div>
            <h3>Popular Categories:</h3>
          </div>
          <div className="control__right col-8 container-fluid">
            <img className="control__image-reviews img-fluid" src={reviews} />
          </div>
        </div>
      </div>
    </section>
    <section className="funds d-flex align-items-center">
      <div className="funds__container d-flex flex-column align-items-center justify-content-around container">
        <div className="funds__row row">
          <div className="funds__content col-12">
            <div className="funds__image"></div>
            <div className="funds__heading-wrapper">
              <h3>Money Protection</h3>
              <h2>Your funds are always protected.</h2>
              <p>
                Outsource your tasks risk-free on PeoplePerHour and collaborate
                with freelancers from any country on the planet.
              </p>
              <p>If there's ever an issue, we'll help you fix it</p>
            </div>
          </div>
        </div>
        <div className="funds__row d-flex justify-content-center row">
          <div className="funds__content col-3">
            <div className="funds__sub-image">
              <img className="funds__lock" src={lock} />
            </div>
            <div className="space-1"></div>
            <div>
              <div>Painless and Risk-free</div>
              <div>
                Our intuitive payment system holds payments in an escrow account
                until work is considered complete by both parties.
              </div>
            </div>
          </div>
          <div className="funds__content col-3">
            <div className="funds__sub-image">
              <img className="funds__camera" src={camera} />
            </div>
            <div className="space-1"></div>
            <div>
              <div>Anti-Fraud Protection</div>
              <div>
                We have your back 24/7. We monitor every transaction and employ
                smart identification procedures to protect you from phishing,
                fraud and identity theft.
              </div>
            </div>
          </div>
          <div className="funds__content col-3">
            <div className="funds__sub-image">
              <img className="funds__agent" src={agent} />
            </div>
            <div className="space-1"></div>
            <div>
              <div>Here to help</div>
              <div>
                Whether you're experiencing technical or collaboration issues,
                our customer support specialists can help you solve them swiftly
                and promptly.
              </div>
            </div>
          </div>
        </div>
        <div className="funds__row row">
          <div className="col-12">
            <div className="btn btn-default d-flex align-items-center justify-content-center">
              Join for free
            </div>
            <div>No upfront payments, no hidden fees.</div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
