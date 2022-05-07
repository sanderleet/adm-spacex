import React, { useEffect, useState, useRef } from 'react'


function ShipmentDetails() {


    const boxesRef = useRef();

    const DATABASE_URL = 'https://adm-spacex-default-rtdb.europe-west1.firebasedatabase.app/'

    const [shipments, setShipments] = useState([]);
    const shipment = shipments.find(element => element.id === window.location.href.split("shipmentDetails/")[1]);

    const index = shipments.indexOf(shipment)
    //console.log(index)

    useEffect(() => {
        fetch(DATABASE_URL + 'shipments.json')
            .then(response => response.json())
            .then(body => {
                const newArray = [];
                for (const key in body) {
                    newArray.push(body[key]);
                }
                setShipments(newArray); // setProducts)= ei annaks errorit 
            });
    }, [])


    function calculateBays(boxes) {         //arvuta mitu "Cargo Bay"-d vaja - jaga kümnega ja ümarda üles
        let addition = 0
        boxes.split(',').forEach(element => { addition += Number(element) });
        return Math.ceil(addition / 10)
    }



    function editBoxes(event) {
        event.preventDefault();

        const updatedShipment = shipment
        updatedShipment.boxes = boxesRef.current.value

        const updatedShipments = shipments
        updatedShipments[index] = updatedShipment


        fetch(DATABASE_URL + 'shipments.json',
            {
                method: "PUT",
                body: JSON.stringify(updatedShipments)
            });
        setShipments(updatedShipments)

    }

    return (
        <div className='details'>
            {shipment &&
                <form onSubmit={editBoxes} >
                    <ul>
                        <li><label htmlFor=""> <h1>{shipment.name.split('.')[0].toUpperCase()} </h1></label>   </li>
                        <li><label htmlFor="">Email: {shipment.email} </label> </li>
                        <li><label htmlFor=""> Boxes: </label> </li>
                        <li><input ref={boxesRef} defaultValue={shipment.boxes} /> </li>
                        <button >Update Cargo Boxes</button>

                        <li><label htmlFor="">Required cargo bays: {calculateBays(shipment.boxes)} </label>  </li>
                    </ul>
                </form>}
        </div>


    )
}

export default ShipmentDetails