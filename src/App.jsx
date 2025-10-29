import React, {useState} from "react";
import Nav from './Nav.jsx'
import './App.css'
import ItemPage from './ItemPage.jsx';
import {items} from './static-data.jsx';
import CartPage from "./CartPage.jsx";

const App =() =>{
  const [activeTab, setActiveTab]= useState('items');
  const[cart,setCart]=useState([]);

  const addToCart = (item)=>{
    setCart(prevCart =>[...prevCart,item])
  }

  const removeItem =(item)=>{
    let index = cart.findIndex(i=>i.id === item.id);
    if(index>0){
      setCart(cart => {
        const copy =[...cart];
        copy.splice(index,1);
        return copy;
      })
    }
  }

  return(
    <div className="App">
      <Nav
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <main className="App-content">
        <Content
        tab={activeTab} 
        onAddToCart={addToCart}
        cart ={summarizeCart(cart)}
        onRemoveItem={removeItem}/>
      </main>
    </div>
  )
}

const Content =({tab, onAddToCart,cart, onRemoveItem}) =>{
  switch(tab){
    case 'items':
      return <ItemPage items={items} onAddToCart={onAddToCart}/>;
    case 'cart':
      return <CartPage items={cart} onAddOne={onAddToCart} onRemoveOne={onRemoveItem}/>;
    default:
      break;
  }
}

const summarizeCart = (cart)=>{
  const groupItems = cart.reduce((summary, item)=>{
    summary[item.id]=summary[item.id] || {
      ...item,
      count:0
    }
    summary[item.id].count++
    return summary;
  }, {});
  return Object.values(groupItems);
}

export default App;