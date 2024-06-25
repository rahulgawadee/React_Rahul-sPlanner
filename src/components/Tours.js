import React from 'react'
import Card from './card';

const Tours = (props) => {
    function getId(id)
    {
        props.removeTour(id);
    }

    return (
        <div className='container'>
            <div>
                <h2 className="title">Rahul- Tours and Travels😎</h2>
            </div>

            <div className="cardsContainer">
                {
                    props.tours.map((tour) => {
                        return <Card tour={tour} getRemoveId = {getId}/>
                    })
                }
            </div>
        </div>
    )
}

export default Tours