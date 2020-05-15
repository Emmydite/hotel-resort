import React, { Component } from 'react';
import Title from './title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

 class Services extends Component {

    state= {
     services : [
         {
             icon : <FaCocktail />,
             title : 'Free cocktail',
             info : 'lorem1 nfhdh gtyehdjfuy stgafdgh jskdufyygs ffdfdfsgah jduyttsggsg'
         },
         {
            icon : <FaHiking />,
            title : 'Endless Hiking',
            info : 'lorem1 nfhdh gtyehdj fuystga fdghjsk dufyygsff dfdfsgahj duyttsggsg'
        },
        {
            icon : <FaShuttleVan />,
            title : 'Free Shuttle',
            info : 'lorem1 nfhdhgty ehdjfuystg afdghjskdu fyygsffdf dfsgahjdu yttsggsg'
        },
        {
            icon : <FaBeer />,
            title : 'Strongest Beer',
            info : 'lorem1 nfhdhgt yehdjfuys tgafdgh jskdufyyg sffdfd fsgahjdu yttsggsg'
        }
     ]
    }

    render() {
        return (
            <section className="services">
                <Title title='services'/>

                <div className="services-center">
                 {
                     this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                         <span>{item.icon}</span>
                         <h6>{item.title}</h6>
                         <p>{item.info}</p>
                        </article>
                     })
                 }
                </div>
                
            </section>
        )
    }
}

export default Services;