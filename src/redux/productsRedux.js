/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
<<<<<<< HEAD
export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);
=======
export const getCompareProducts = ({ products }) =>
  products.filter(product => product.isCompare);
>>>>>>> f10a8b5 (Limit the number of products added to compare to 4. Add selector toggleCompare to productsRedux)

/* actions */

const createActionName = actionName => `app/lists/${actionName}`;
const TOGGLE_FAVORITE = createActionName('TOGGLE_FAVORITE');
const TOGGLE_COMPARE = createActionName('TOGGLE_COMPARE');

/* action creators */

export const toggleFavorite = payload => ({
  type: TOGGLE_FAVORITE,
  payload,
});

export const toggleCompare = payload => ({
  type: TOGGLE_COMPARE,
  payload,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      return statePart.map(products =>
        products.id === action.payload
          ? { ...products, isFavorite: !products.isFavorite }
          : products
      );
    case TOGGLE_COMPARE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, isCompare: !product.isCompare }
          : product
      );
    default:
      return statePart;
  }
}
