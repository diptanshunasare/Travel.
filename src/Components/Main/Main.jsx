import axios from 'axios';
import React, { useState, useEffect }  from 'react'
import './main.css'
import {  HiOutlineLocationMarker} from 'react-icons/hi'
import {  HiOutlineClipboard} from 'react-icons/hi'
import Aos from 'aos';
import 'aos/dist/aos.css'


function Main() {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        axios.get("https://freetestapi.com/api/v1/destinations?limit=5")
          .then((res) => {
            setDestinations(res.data);
            Aos.init({duration:2000});
          })
          .catch(() => {
            alert("Data not found!");
          });
      }, []);

  return (

      <section className='main container section'>
        <div className="secTitle">
           <h3 data-aos="fade-right" className="title"> Most visited destinations</h3>
        </div>

        <div className="setContent grid">
            {
                destinations.map((destination)=>{
                    return(
                        <div key={destination.id}  data-aos="fade-up" className='singleDestination'>
                           
                            <div className="imageDiv">
                                <img src={destination.image} alt={destination.name} />
                            </div>

                            <div className="cardInfo">
                                <h4 className="destTitle">{destination.name}</h4>
                                <span className="continent flex">
                                <HiOutlineLocationMarker className="icon"/>
                                <span className='name'>{destination.country}</span>
                                </span>

                                <div className="fees flex">
                                    <div className="grade">
                                        <span><b>Language:</b> {destination.language}</span>
                                    </div>
                                    <div className='price'>
                                        <h5>{destination.population}</h5>
                                    </div>
                                </div>

                                <div className="desc">
                                    <p>{destination.description}</p>
                                </div>

                                <button className='btn flex'>
                                    DETATILS <HiOutlineClipboard className="icon"/>
                                </button>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>

      </section>

  )
}

export default Main
