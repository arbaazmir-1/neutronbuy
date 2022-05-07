import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_PROMOTIONS_FAIL,
  PRODUCT_LIST_PROMOTIONS_REQUEST,
  PRODUCT_LIST_PROMOTIONS_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/prodcutConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, product:[] };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productListPromotionsReducer = (
  state = { products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_PROMOTIONS_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_LIST_PROMOTIONS_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_PROMOTIONS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
