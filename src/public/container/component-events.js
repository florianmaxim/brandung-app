import React, {StyleSheet} from 'react';

import {Link} from 'react-router-dom';

import DATA from '../../../data.json';
import CONFIG from '../../../config.json';

import '../styles/index.scss';

export default class ModulesEvents extends React.Component {
  
  constructor(props){
    super(props);
  }

  render(){

    return(
      <div style={{
        border: '3px solid rgba(0,0,0,0.125)',
        borderTop: '0px solid rgba(0,0,0,0.125)'
      }}>

      {
        DATA.events.map((article, index)=>{
          return(
            <div 
              key={index}
              style={{
                padding: 25,
                borderBottom: '1px solid rgba(0,0,0,0.125)',
                display: 'flex',
                flexDirection: 'row'
              }}
            >
              <img 
                src={article.uri}
              />

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginLeft: 15
              }}>

               <span className='info'>
                {article.date}
                </span>

                <span className='heading'>
                {article.heading}
                </span>

                <span className='sub-heading'>
                {article.subHeading}
                </span>

                <Link
                  to={'/'}
                  className='info-link'
                >
                  <span className='info-link'>> </span>
                  {CONFIG.articles.more.caption}
                </Link>

              </div>
              
            </div>
          )
        })
      }

      </div>
    )
  }
}