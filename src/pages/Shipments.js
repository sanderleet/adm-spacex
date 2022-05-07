
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";

function Shipments() {


const DATABASE_URL = 'https://adm-spacex-default-rtdb.europe-west1.firebasedatabase.app/'

    const [shipments, setShipments] = useState([]);
    const [shipmentsTemp, setShipmentsTemp] = useState([]);
    const nameRef = useRef();

    //shipments.find(e => e.id === window.location.href.split("shipmentDetails/")[1] )

    useEffect(() => {
        fetch(DATABASE_URL + 'shipments.json')
            .then(response => response.json())
            .then(body => {
                const newArray = [];
                for (const key in body) {
                    newArray.push(body[key]);
                }
                setShipments(newArray);
                setShipmentsTemp(newArray)

            });
    }, [])



    function searchByName() {

        const index = shipments.filter(element => element.name.toLowerCase().includes(nameRef.current.value.toLowerCase()))
        //console.log(index + " indeks id")
        if (index !== []) {
            setShipmentsTemp(index)
        }
    }


    return (<div >

        <div >
            <label>Search shipments by customer name</label> <br />
            <input onKeyUp={searchByName} ref={nameRef} type="text" placeholder='Search' /> <br />
        </div>

        <div >

            {shipmentsTemp.map(shipment =>

                <div className='shipment-container' key={shipment.id}>
                    <Link to={'/shipmentDetails/' + shipment.id} >
                        <h1 className='shipment-link'>
                            {shipment.name.split('.')[0]}
                        </h1>
                    </Link>
                </div>
            )}

            {shipmentsTemp.length === 0 && <div> Shipment Order Not found</div>}

        </div>
    </div>)
}

export default Shipments