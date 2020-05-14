import React from 'react';
import {Col} from 'antd';

function GridCard(props) {
    return(
        <Col lg={6} md={8} xs={24}>
            <div style={{position: 'relative'}}>
            <a href={`/movie/${props.movieId}`}>
                <img style={{width:'30%', height: '30%'}} alt='img' src={props.image} />
            </a>
            </div>

        </Col>
    )
};

export default GridCard;