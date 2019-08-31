import React from 'react'
import './main.css';
import PageContentContainer from '../pageContentContainer/pageContentContainer';

const main = () => {

    return (
      <PageContentContainer>
        <div className="cont">
          <div className="header">
            <h3>About me</h3>
            <hr/>
          </div>
          <main>
            I'm a full stack developer with 3+ years of experience using state of the art technologies such as: React, Spring, Hibernate, Django, Sql, Firebase and many more. 
            I have worked for international consultancy companies and international clients as well.

            I love to: contribute, learn, teach and in general be very engaged in every project I'm in, providing the highest posible quality in every development.
            In my free time, I enjoy learning topics related to web development, playing the ukelele and developing projects as a freelance.
            I love to be part of teams where I can learn and provide my knowledge in projects with high relevance and impact.
          </main>
        </div>
      </PageContentContainer>
    )
}


export default main;