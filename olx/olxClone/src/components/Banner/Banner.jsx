import React from 'react'
import './Banner.css'
import BannerImage from '../../assets/carsBanner.webp';

function Banner() {
    return (
        <div>
            <div className='OutBan'>
                <div className='Image-Ban'>
                    <img src={BannerImage} alt="Banner_Image" />
                </div>
                <div className='Text_content'>
                    <h3>Top Deals Lowest Prices</h3>
                    <p>Valid Till Stock Last</p>
                </div>
                <div className='Input_boxCss'>
                    <input type="text" placeholder='Search Your Favorite Items....' />
                </div>
                <div className='svg_tag'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Banner