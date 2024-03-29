import { HashRouter, Route, Switch } from 'react-router-dom'
import MainNav from './mainNav/MainNav'
import HomePicture from './homePicture/HomePicture'
import ProductContainer from './ProductContainer/ProductContainer'
import ViewingItem from './itemPage/viewingItem'
import morePhotos from './moreData'
import AllClothing from './allClothing/AllClothing'
import Footer from './footer/Footer'
import Cart from './cart/Cart'
import './styles.css'
import {whiteShirt, blackShirt, greyShirt, tanShirt, 
  bluePants, blackPants, tanPants, blackHat, redHat, blueHat, darkBriefs, pladBriefs, lightBriefs} from './imageExports'


function App() {
  let images = {
    'Shirts': [whiteShirt, blackShirt, greyShirt, tanShirt],
    'Pants': [bluePants, blackPants, tanPants],
    'Hats': [blackHat, redHat, blueHat],
    'Briefs': [darkBriefs, pladBriefs, lightBriefs]
  }

  let catagories = ['Shirts', 'Pants', 'Hats', 'Briefs'];
  let homeContent = catagories.map((types) => {
    return (
      <ProductContainer photos={morePhotos[types]} type={types} key={types} images={images[types]}/>
    );
  });


  return (
    <HashRouter className='higher'>
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
            <AllClothing photos={morePhotos.Shirts} images={images['Shirts']} type='Shirts' />
          </Route>

          <Route key={'otherkey'} path='/pants'>
            <AllClothing photos={morePhotos.Pants} images={images['Pants']} type='Pants' />
          </Route>

          <Route key={'anotherkey'} path='/hats'>
            <AllClothing photos={morePhotos.Hats} images={images['Hats']} type='Hats' />
          </Route>

          <Route path='/briefs'>
            <AllClothing photos={morePhotos.Briefs} images={images['Briefs']} type='Briefs' />
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


    </HashRouter>


  );
}

export default App;
