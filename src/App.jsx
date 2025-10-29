import Header from "./Components/Header"
import PizzaList from "./Components/PizzaList"
import Pagescroller from "./Components/Pagescroller"
import TopBestSellers from "./Components/TopBestSellers"
import Cards from "./Components/Card"
import PizzaVeraity from "./Components/PizzaVeraity"
import PizzaVeraity2 from "./Components/PizzaVeraity2"
import PopularDelight from "./Components/PopularDelight"
const App = () => {
  return (
    <div className="grid grid-col-1 grid-row-1 gap-3 mb-5">
     <Header />
     <PizzaList />
     <Pagescroller />
     <span className="w-full h-3 bg-gray-200"/>
     <TopBestSellers />
     <PizzaVeraity />
     <span className="w-full h-3 bg-gray-200"/>
     <TopBestSellers />
     <PizzaVeraity2 />
     <span className="w-full h-3 bg-gray-200"/>
     <PopularDelight />
     <div className="-mt-8.5 overflow-scroll">

     <PizzaVeraity2 />
     <h1>hello</h1>
     </div>
    </div>
  )
}

export default App