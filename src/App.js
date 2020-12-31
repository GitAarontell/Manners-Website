import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainNav from './mainNav/MainNav'
import HomePicture from './homePicture/HomePicture'
import ProductContainer from './ProductContainer/ProductContainer'
import ViewingItem from './itemPage/viewingItem'
import morePhotos from './moreData'
import AllClothing from './allClothing/AllClothing'
import Footer from './footer/Footer'
import Cart from './cart/Cart'
import './styles.css'


function App() {

  let catagories = ['Shirts', 'Pants', 'Hats', 'Briefs'];
  let homeContent = catagories.map((types) => {
    return (
      <ProductContainer photos={morePhotos[types]} type={types} key={types}/>
    );
  });

  

  return (
    <Router className='higher'>
      <div className="App">

        <header className="App-header">
          <MainNav />
        </header>
        <Switch>

          <Route exact path="/">
            <div>
              <HomePicture />
              {homeContent}
              {/*
              <ProductContainer photos={morePhotos.shirts} type='Shirts' />
              <ProductContainer photos={morePhotos.pants} type='Pants' />
              <ProductContainer photos={morePhotos.hats} type='Hats' />
              */}
            </div>
          </Route>

          {/*These keys in the routes force it to remount or else photos dont change when clicking between only these components*/}
          <Route key={'somekey'} path="/shirts">
            <AllClothing photos={morePhotos.Shirts} type='Shirts' />
          </Route>

          <Route key={'otherkey'} path='/pants'>
            <AllClothing photos={morePhotos.Pants} type='Pants' />
          </Route>

          <Route key={'anotherkey'} path='/hats'>
            <AllClothing photos={morePhotos.Hats} type='Hats' />
          </Route>

          <Route path='/briefs'>
            <AllClothing photos={morePhotos.Briefs} type='Briefs' />
          </Route>
          
          <Route path='/cart'>
            <Cart />
          </Route>

          <Route path='/:id' component={ViewingItem} />

        </Switch>

        <footer className='footer'>
          <Footer />
        </footer>
      </div>


    </Router>


  );
}

export default App;
