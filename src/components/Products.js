import React from 'react'
import Card from './FeatureCard';


import DummyData from '../API/DummyData.json';
import './Card.css';



const Products = () => {
    return (
        <div>
            <div className="container">
                <div className='row'>
                    <h4>Fresh Recommendations</h4>
                </div>

                <div className="row">
                    {
                        DummyData.map((card) => (

                            <div key={card.id} className="col-lg-3 col-md-4">
                                <Card data={card} />
                            </div>

                        ))
                    }

                </div>

                <div>

                    <button className='load-more'>
                        Load more
                    </button>

                </div>

            </div>
        </div>
    )
}

export default Products
