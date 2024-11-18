// stores/user.js
import { defineStore } from 'pinia'
import type { Entity } from '../types/apis/login'
export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    isLoggedIn: false,
    userInfo: {} as Entity,
  }),
  getters: {
    getUserInfo: (state) => state.userInfo,
  },
  actions: {
    setUser(userInfo: Entity) {
      this.userInfo = userInfo
      this.isLoggedIn = true
    },
    logout() {
      this.userInfo = {} as Entity
      this.isLoggedIn = false
    },
  },
  persist: {
    key: 'user',
    storage: sessionStorage,
  },
})
