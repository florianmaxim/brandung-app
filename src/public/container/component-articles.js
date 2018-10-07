import React, {StyleSheet} from 'react';

import {Link} from 'react-router-dom';

import DATA from '../../../data.json';
import CONFIG from '../../../config.json'

export default class ModulesNews extends React.Component {
  
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
        DATA.articles.map((article, index)=>{
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
                style={{
                  width: 125,
                  height: 100,
                  border: '3px solid rgba(0,0,0,0.125)'
                }}
              />

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginLeft: 15
              }}>

                <span style={{
                  color: 'rgba(0,0,0,1)',
                  fontSize: 11
                }}>
                {article.date}
                </span>

                <span style={{
                  color: 'rgba(0,127,215,1)',
                  fontSize: 18
                }}>
                {article.heading}
                </span>

                <span style={{
                  color: 'rgba(0,0,0,1)',
                  fontSize: 12
                }}>
                {article.subHeading}
                </span>

                <Link
                  to={'/'}
                  style={{
                    color: 'black',
                    fontSize: 13,
                    fontWeight: 'bold',
                    textDecoration: 'none'
                  }}
                >
                  <span style={{
                    color: 'rgba(0,127,215,1)',
                    fontSize: 15,
                    margin: 5
                  }}>
                  >
                  </span>
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