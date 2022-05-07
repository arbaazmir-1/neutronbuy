import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_PROMOTIONS_REQUEST,
  PRODUCT_LIST_PROMOTIONS_SUCCESS,
  PRODUCT_LIST_PROMOTIONS_FAIL,
} from "../constants/prodcutConstants";
import { PRODUCT_DETAILS_FAIL,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_REQUEST } from "../constants/prodcutConstants";
import axios from "axios";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("/api/products");
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST });
      const { data } = await axios.get(`/api/products/${id}`);
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload:
          e.response && e.response.data.message
            ? e.response.data.message
            : e.message,
      });
    }
  };
  

  export const listProductPromotions = () => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_PROMOTIONS_REQUEST });
      const { data } = await axios.get(`/api/promotions`);
      dispatch({
        type: PRODUCT_LIST_PROMOTIONS_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: PRODUCT_LIST_PROMOTIONS_FAIL,
        payload:
          e.response && e.response.data.message
            ? e.response.data.message
            : e.message,
      });
    }
  };