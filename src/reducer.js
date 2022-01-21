import { API_KEY, API_URL } from "./config"
import { MAX_STACK } from "./containers/Shop"
export const reducer = (state, action) => {
  switch (action.type) {
    case 'CLOSE_ALERT': {
      return { ...state, alertName: '' }
    }
    case 'REMOVE_FROM_BASKET': {
      const newAddedGoods = state.addedGoods.filter(item => {
        return item.mainId !== action.payload
      })
      return { ...state, addedGoods: newAddedGoods }
    }
    case 'CART_HANDLER': {
      return { ...state, isBasketShowed: !state.isBasketShowed }
    }
    case 'UP_QUANITY': {
      const newAddedGoods = state.addedGoods.map(item => {
        if (item.mainId === action.payload) {
          const newQuanity = item.quantity + 1
          if (newQuanity > MAX_STACK) {
            return item
          }
          return {
            ...item,
            quantity: newQuanity
          }
        }
        return item
      })
      return { ...state, addedGoods: newAddedGoods }
    }
    case 'DOWN_QUANITY': {
      const newAddedGoods = state.addedGoods.map(item => {
        if (item.mainId === action.payload) {
          const newQuanity = item.quantity - 1
          return {
            ...item,
            quantity: newQuanity === 0 ? 1 : newQuanity
          }
        }
        else {
          return item
        }
      })
      return { ...state, addedGoods: newAddedGoods }
    }
    case 'ADD_TO_CART': {
      let newAddedGoods = null
      const itemIndex = state.addedGoods.findIndex(good => good.mainId === action.payload.mainId)
      if (itemIndex < 0) {
        const newItem = {
          ...action.payload,
          quantity: 1
        }
        return {
          ...state,
          alertName: action.payload.displayName,
          addedGoods: [...state.addedGoods, newItem]
        }
      } else {
        newAddedGoods = state.addedGoods.map((good, index) => {
          if (index === itemIndex) {
            if (good.quantity >= MAX_STACK) {
              return good
            }
            // setAlertName(item.displayName)
            return {
              ...good,
              quantity: good.quantity + 1
            }
          } else {
            return good
          }
        })
      }
      return {
        ...state,
        addedGoods: newAddedGoods
      }
    }
    case 'LOADING_TRUE': {
      return {
        ...state,
        loading: true
      }
    }
    case 'LOADING_FALSE': {
      return {
        ...state,
        loading: false
      }
    }
    case 'SET_GOODS': {
      return {
        ...state,
        goods: action.payload
      }
    }
    case 'FETCH_GOODS': {
      return {
        ...state,
        goods: action.payload || [],
        loading: false
      }
    }
    default: {
      return state
    }
  }
}
