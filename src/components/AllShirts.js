import {useEffect, useState} from "react";
import {findAllByDisplayValue} from "@testing-library/react";
import './AllShirts.css'

export const AllShirts = () => {
    const [allShirts, setAllShirts] = useState([])
    const getAllShirts = () => {
        fetch(`http://skj-api.us-east-2.elasticbeanstalk.com/api/shirts/all-products`)
            .then(res => res.json())
            .then(data => {
                if (!allShirts.includes(data)) {
                    setAllShirts(data)
                }
            })
    }
    useEffect(() => {
        window.addEventListener('load', getAllShirts)
        //     console.log('useEffect Called!')
    }, [allShirts])
    return (
        <div className={'allShirtsContainer'}>
            {allShirts.map((shirts) => {
                return (

                    <div key={shirts.id} className={'shirtCard'}>
                        <img src="" alt=""/>
                        <h3>{shirts.name}</h3>
                        <p>{shirts.price}</p>
                        <small>{shirts.size}</small>
                    </div>

                )
            })}
        </div>
    )
}