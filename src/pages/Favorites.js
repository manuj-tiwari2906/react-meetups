import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/Meetups/MeetupList';


function Favorites () {

  const favoritesCtx = useContext(FavoritesContext)


  let content;
  if(favoritesCtx.totalFavorites) {
    content = <MeetupList meetups={favoritesCtx.favorites}/>
    
  }else {
    content = <p>You got no Favorites yet now. Start Adding Some</p>
  }

  return (
    <section>
      <h1>
        My Favorites
      </h1>
      {content}
    </section>
  )
}

export default Favorites;