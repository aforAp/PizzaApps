import data from "../Datas/pizzaType";
import Cards from "./Card"; 

const PizzaVeraity = () => {
  return (
    <div className="flex flex-row mt-5 mr-5 overflow-y-scroll">
        {
            data.map((datas, id) => (
              <>
                <Cards {...datas} key={id}/>
              </>
              
            ))
        }
    </div>
  )
}

export default PizzaVeraity;
