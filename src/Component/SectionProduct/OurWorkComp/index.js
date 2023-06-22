import React from 'react';
import { useState, useEffect } from 'react';
import { Carousel, Card, Button, Container } from 'react-bootstrap';
import './OurWorkComp.css';
import Slider from '../Carousel/Slider';
import imageSlider from '../Carousel/imageSlider';

const OurWorkComp = () => {
  const [optKey, setOptKey] = useState('Out of Home');
  const [content, setContent] = useState([]);
  const [parent, setParent] = useState(0);

  useEffect(() => {
    const defaultContent = imageSlider.filter(
      (item) => item.option === optKey
    )[0].data;
    setContent(defaultContent);
    const Parent = option.filter((item, idx) => item.option === optKey)[0].key;
    setParent(Parent);
  }, [optKey]);

  // const changeSelect = (opt) => {
  //   return imageSlider.filter((item) => item.option === opt)[0].data;
  // };

  const option = [
    {
      option: 'Out of Home',
      key: 0,
    },
    {
      option: 'Installation',
      key: 1,
    },
    {
      option: 'POSM & Sign',
      key: 2,
    },
    {
      option: 'Digital',
      key: 3,
    },
  ];

  // console.log(option.filter((item, idx) => item.option === optKey )[0].key);
  return (
    <div className='bg-gray'>
      <Container>
      <div id="section3" className='wrapper'> 
        <div className='title'>
          <h1>Our Product</h1>
        </div>
        <div></div>
        <div className='aside'>
          <ul className='option'>
            <li></li>
            {option.map((item, index) => (
              <>
                <li
                  key={item.key}
                  onClick={() => {
                    setOptKey(item.option);
                    // setParent(index)
                  }}>
                  <hr className={optKey === item.option ? 'strip' : ''} />
                  {item.option}
                </li>
              </>
            ))}
          </ul>
          <div className='mobile'>
            <select
              name='option'
              id='option'
              onChange={(e) => {
                setOptKey(e.target.value);
                // setParent(option.filter((item, idx) => item.option === optKey )[0].key);
              }}
              className='select'>
              {option.map((item) => (
                <>
                  <option value={item.option} key={item.key}>
                    {item.option}
                  </option>
                </>
              ))}
            </select>
          </div>
        </div>
        <div className='carousel'>
          <Slider imageSlider={content} parentIdx={parent} optKey={optKey} />
        </div>
      </div>
      </Container>
    </div>
  );
};

export default OurWorkComp;
