
import React, {useEffect, useState} from 'react'
import data from "../Datas/datas";



const PizzaList = () => {
 const [innerWidth12, setInnerWidth12] = useState(0);
    const [datas, setData] = useState(data);
     
    useEffect(() => {
        const windowInnerWidth = () => setInnerWidth12(window.innerWidth);
        window.addEventListener("resize", windowInnerWidth);

        return () => window.removeEventListener("resize", windowInnerWidth);
    }, []);

    useEffect(() => {
        if(innerWidth12 < 768) {
          const filteredData = data.filter(item => item.id %2 !== 0);
          setData(filteredData);
        } else {
           setData(data);
        }
    }, [innerWidth12]);

   
    

  return (
    <div className="flex flex-col bg-white">
 <h1 className='font-bold w-full relative left-5'>What are you craving for?</h1>
    <div className="flex flex-row mt-5 mx-2.8 mr-2.8">
        {datas.map(({id, url, name}) => (
          <div key={id} className="flex flex-col mx-3 h-auto border-none">
            <img src={url} alt="pizza image" className='flex justify-items-center h-[114px] p-3'/>
            <h1 className='text-[10px] font-bold text-center'>{name}</h1>
            </div>
            ))
          }
    </div>
    </div>
  )
}

export default PizzaList;