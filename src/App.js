import './App.css';
import { List } from './component/List';
import Avatar, { Welcome } from './component/Welcome';
import {Greeting} from './component/Greeting'
import { ProductList } from './component/ProductList';
import { FormSubmit } from './component/Event';
import { ProductCollection } from './component/Product';

function App() {

  const products = [
    {
      id : 1,
      title : "Hello"
    },
    {
      id : 2,
      title : "Hi"
    }
  ]

  return (
    <div>
          <Welcome title="Cambodia"/>
          <Avatar 
            imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHZbUXVBf2Tr7Zq1c7iAwbQnYIDdGHNQUyA&usqp=CAU" 
            size='400'
          />
          <List products={products}/>

          <Greeting isLogin={false} />

          <ProductList />
          <FormSubmit/>
        

    </div>
  )
}

export default App;
