import { createStore, combineReducers } from 'redux'
import { postsReducer as posts, usersReducer as users, currentPostReducer as currentPostID } from './reducers'
export const store = createStore(combineReducers({ posts, users, currentPostID }))
