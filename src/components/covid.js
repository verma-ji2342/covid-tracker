import React, { useEffect, useState } from 'react'
import './covid.css';
const Covid = () => {


    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        getCovidData();
    }, []);


    return (
        <>
            <section>
                <h1>🔴 Live</h1>
                <h2>COVID-19 CORONAVIRUS TRACKER</h2>

                <ul>
                    <li className='card card1'>
                        <div className='card-main'>
                            <div className='card-inner'>
                                <p className='card-name'><span> OUR </span> COUNTRY</p>
                                <p className='card-detail'>INDIA</p>
                            </div>
                        </div>
                    </li>
                    <li className='card card2'>
                        <div className='card-main'>
                            <div className='card-inner'>
                                <p className='card-name'><span> TOTAL </span> RECOVERED</p>
                                <p className='card-detail'>{data.recovered}</p>
                            </div>
                        </div>
                    </li>
                    <li className='card card3'>
                        <div className='card-main'>
                            <div className='card-inner'>
                                <p className='card-name'><span> TOTAL </span> CONFIRMED</p>
                                <p className='card-detail'>{data.confirmed}</p>
                            </div>
                        </div>
                    </li>
                    <li className='card card4'>
                        <div className='card-main'>
                            <div className='card-inner'>
                                <p className='card-name'><span> TOTAL </span> DEATH</p>
                                <p className='card-detail'>{data.deaths}</p>
                            </div>
                        </div>
                    </li>
                    <li className='card card5'>
                        <div className='card-main'>
                            <div className='card-inner'>
                                <p className='card-name'><span> TOTAL </span> ACTIVE </p>
                                <p className='card-detail'>{data.active}</p>
                            </div>
                        </div>
                    </li>
                    <li className='card card6'>
                        <div className='card-main'>
                            <div className='card-inner'>
                                <p className='card-name'><span> LAST </span> UPDATED</p>
                                <p className='card-detail'>{data.lastupdatedtime}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Covid
