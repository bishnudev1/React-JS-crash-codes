import React from 'react'
import ReuseComp from './Reuse_Comp';

const ReuseComp2 = () => {
    const data = [
        {
            name:'Bishnudev',
            dept:'CSE',
            roll:'10700120026'
        },
        {
            name:'Alam',
            dept:'CSE',
            roll:'10700120045'
        },
        {
            name:'Arup',
            dept:'CSE',
            roll:'10700120021'
        },
    ]
  return (
    <>
        {
            data.map((item,i)=>
                <ReuseComp data = {item}/>
            )
        }
    </>
  )
}

export default ReuseComp2