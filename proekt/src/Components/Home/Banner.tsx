import React from 'react';
import Link from 'next/link';
import { BannerType } from '@/types/types';

const Banner: React.FC<BannerType> = ({title, description}) => {
    const buttonStyle: React.CSSProperties = {
        width: '240px',
        height: '240px',
        borderRadius: '50%',
        border: '1px solid #000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'black',
        position: 'relative'
      };

  return (
   <div className="row" >
    <div className="col">
    <div className="row">
        <div className="col" style={{paddingRight: "0"}}>
            <img className='banner-img' src="../Images/coll 1.jpg" alt="" />
        </div>
        
    </div>
    <div className="row position-relative" style={{top: "-132px", left:"9px"}}>
    <div className="col">
    <Link href="/product">
      <div className='bg-banner' style={buttonStyle}>
        <img className='absolute' src="../Icons/sparks-elements-and-symbols-isolated-on-white-background-free-vector 2.png" alt="" style={{top: "25px", width:"40px"}} />
        <img className='absolute' src="../Icons/Vector.png" alt="" style={{top: "59px", left:"39px"}}/>
        <img className='absolute' src="../Icons/Vector.png" alt="" style={{top: "66px", left:"84px", width:"15px"}}/>
        <img className='absolute' src="../Icons//Ново.png" alt="" style={{top: "61px", left:"51px"}}/>

        <h2 className='circle-title absolute' style={{ marginBottom: '5px', top: "72px", left:"56px"  }}>{title}</h2>
        <p className='absolute text-center pt-1' style={{ marginBottom: '5px', top: "122px", left:"48px", width:"142px", fontSize:"13px" }}>{description}</p>
        <img className='absolute' src="../Icons/Group 36.svg" alt="" style={{top: "172px", left:"95px"}}/>

      </div>
    </Link>
        </div>
    </div>
   </div>
   </div>
  );
};

export default Banner;
