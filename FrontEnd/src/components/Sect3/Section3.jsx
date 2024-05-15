import React, { useContext, useEffect, useState } from 'react';
import './Section3.css';
import MainContext from '../../context/context';
import Card from '../Card/Card';
import axios from 'axios';

const Section3 = () => {
    const { data, setData } = useContext(MainContext);
    const [inpValue, setInpValue] = useState('');
    const [search, setSearch] = useState([]);

    useEffect(() => {
        let yusif = true;
        axios.get("http://localhost:5000/category").then(res => {
            if (!yusif) return;
            let result = res.data;
            if (inpValue.trim() !== "") {
                result = result.filter(item => item.title.toLowerCase().includes(inpValue.trim().toLowerCase()));
            }
            setSearch(result);
        });
        return () => {
            yusif = false;
        };
    }, [inpValue]);

    return (
        <section className='section3'>
            <span></span>
            <h2>Featured Products</h2>
            <input
                value={inpValue}
                type="text"
                placeholder='Search here'
                onChange={(e) => {
                    setInpValue(e.target.value);
                }}
            />
            <div className='section3Cards'>
                {search.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>
        </section>
    );
};

export default Section3;