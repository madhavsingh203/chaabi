import React from 'react'
import Graph from '../Graph/Graph'

const Card = () => {
  return (
    <div>
        <h4>Heading</h4>
        <div style={{
            display:'flex',
            alignItems:'center',
            gap:'10px'
        }}> 
            <div>
                <h5>3354</h5>
                chip
                number
            </div>
            <div>
                <Graph style={{
                    width:'100%',
                    height:'100%'
                }}/>
            </div>
        </div>
        {/* <Graph/> */}
    </div>
  )
}

export default Card