import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta"><h1>About Us</h1></span>
                    <h2 className="colorlib-heading"><i>What is ITSA?</i></h2>
                    <p>ITSA is an association formed by the undergrad of Information Technology Department of PVG's COET.</p>
                    <p>ITSA gives the students a platform to share their skills with others and learn new technologies. It draws ideas out of students and helps those turn into reality.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>


        <section className="colorlib-about" data-section = "ourleaders">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta"><h1>OUR LEADERS</h1></span>
                <h2 className="colorlib-heading"><i>Our teachers have helped us a lot!</i></h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                {/*<span className="icon">
                    <i className="icon-bulb" />
                </span>*/}
                <div className="desc">
                    <h3>Prof S.S Dixit</h3>
                    <p>Head of IT Department. </p>
                </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                {/*<span className="icon">
                    <i className="icon-phone3" />
            </span>*/}
                <div className="desc">
                    <h3>Prof S.A Deshpande</h3>
                    <p>Staff Coordinator.</p>
                </div>
                </div>
            </div>
            
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                {/*<span className="icon">
                    <i className="icon-data" />
        </span>*/}
                <div className="desc">
                    <h3>Sushant Vernekar</h3>
                    <p>General Secretary.</p>
                </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                {/*<span className="icon">
                    <i className="icon-layers2" />
    </span>*/}
                <div className="desc">
                    <h3>Riya Parekh</h3>
                    <p>Joint General Secretary.</p>
                </div>
                </div>
            </div>
            
            
        </div>
        </div>
        </section>


        <section className="colorlib-about" data-section="ourteams">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta"><h1>OUR TEAMS</h1></span>
                <h2 className="colorlib-heading"><i>Here are the teams we have at ITSA!</i></h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <a href="https://github.com/"><h3>Team Web and Tech</h3></a>
                    <p>Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. </p>
                </div>
                </div>
            </div>
            <a href="https://github.com/">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Team Notification</h3>
                    <p>Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis.</p>
                </div>
                </div>
            </div>
            </a>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Team Finance</h3>
                    <p>Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis.</p>
                </div>
                </div>
            </div>

            

            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Team Student Coordination and Printing</h3>
                    <p>Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Team Event Management and Production</h3>
                    <p>Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis.</p>
                </div>
                </div>
            </div>
            
            </div>
        </div>
        </section>
      </div>
    )
  }
}
