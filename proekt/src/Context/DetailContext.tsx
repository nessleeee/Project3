import router from "next/router";
import { createContext } from "react";


interface DetailContextType {

}

export const DetailContext = createContext<DetailContextType>({
 
});

interface Props {
  children: React.ReactNode;
}

const DetailContextConstructor: React.FC<Props> = ({ children }) => {
    // const [isFavorite, setIsFavorite] = useState(false);
    // const [buttonText, setButtonText] = useState('Додај во Кошничка');

    // const handleAddToCart = () => {
    //     setButtonText('Додадено');
    
    //     const order = JSON.parse(localStorage.getItem('order') || '[]');
    //     const updatedOrder = [...order, product];
    
    //     localStorage.setItem('order', JSON.stringify(updatedOrder));
    
    //     setTimeout(() => {
    //       router.push('/order');
    //     }, 1000);
    //   };
    
    //   const handleToggleFavorite = () => {
    //     setIsFavorite((prevFavorite) => !prevFavorite);
    
    //     const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    //     const updatedFavorites = isFavorite
    //       ? favorites.filter((fav: ProductType) => fav.id !== product.id)
    //       : [...favorites, product];
    
    //     localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    //   };

  return (
    <DetailContext.Provider
      value={{
       
      }}
    >
      {children}
    </DetailContext.Provider>
  );
};

export default DetailContextConstructor;
