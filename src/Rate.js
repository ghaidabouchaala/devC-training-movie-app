import React from 'react'

const Rate= ({rate, changeRate = () => {}} ) =>  {
    let arr = []
    for( let i =0 ; i < 5 ; i++)
    {
        if (i < rate )
        arr.push(<i class="fas fa-star" style={{color : "gold"}} onClick={()=>changeRate(i+1)}></i>)
        else 
        arr.push(<i class="far fa-star" style={{color : "gold"}} onClick={()=>changeRate(i+1)}></i>)
    }
    return (
        <div>
            {arr}
        </div>
    )
}

export default Rate ; 
