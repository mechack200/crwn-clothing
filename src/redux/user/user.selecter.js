import { createSelector } from 'reselect'

const selectUser = state => state.user

export const seletcCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
)