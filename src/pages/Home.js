import React from 'react'
import Shipments from './Shipments';




/* High Level overview - 

    Application should load existing set of shipments over the network.
    Shipments can be filtered, viewed, edited. 

    Calculate the required number of cargo Bays for each shipment. 

UI - 
    Desktop + mobile(??)

Funktsionaalsus - 
    Appi avamisel laeb kõik Shipmendid üle võrgu  .../shipments.json

    +Search box - filtreerib olemasolevate shipmentide vahel, ettevõte nime järgi
    +Klikk Shipmendile avab selle detailid uuel urlil
    +Iga Shipment eraldi urlil. 
    Changing cargo boxes kalkuleerib uuesti vajaminevad 'Cargo Bayd'

Arvutamine +

    +Näide .json failist.

    {
        "id":"asd123123"
        "name":"Amazon.com"
        "email":"contact@amazon.com"
        "boxes":"6.8,7.9,3"

    }

    +Iga "Cargo Bay" võtab vastu kuni 10 ühikut "boxes"-i.
    +Ehk 6.8 + 7.9 + 3 = 17,7 kasti, mis on vähem kui  20 ühikut ehk vaja on 2x "Cargo Bay"-d.

    +"Boxes" String CSV - komadega eraldatud numbrid. 
*/


function Home() {
  return (
    <div>
        <Shipments/>
    </div>
  )
}

export default Home