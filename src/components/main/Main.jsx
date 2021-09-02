import React from 'react'
import './main.css';

const main = () => {

    return (
      <div className="cont global-font">
        <div className="header">
          <h3>About me</h3>
          <hr/>
        </div>
        <main>
          <p style={{"font-weight": "bold", "text-align": "center"}}>"Work until you no longer have to introduce yourself"</p>
          <p>I'm a passionate UI developer (with some back-end development background) with 3+ years of experience.
              During all this time I've been working for international companies such as: USAA, Microsoft and Scotiabank. Using a great variety of state of the art technologies such as: 
              React, Nodejs, Spring, Rails, and many more. Being React my main area of expertise and preference.</p>
          
          <p>I love to: contribute, learn, teach and in general be very engaged 
              in every project I'm in, providing the highest possible quality in every development.</p>

          <p>In my free time, I enjoy: learning topics related to web development, playing the ukulele, watching series, writing, reading novels, playing video games and developing custom personal websites. </p>
          
          <p>I love and I'm looking forward to being part of teams, where I can learn, grow, and share my knowledge with others. Besides, contribute in challenging projects with: high relevance and impact.</p>
        </main>
      </div>
    )
}


export default main;