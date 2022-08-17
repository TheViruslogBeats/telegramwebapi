import { makeAutoObservable } from "mobx";

class Store {
  tg = undefined

  firstName = ''
  lastName = ''

  constructor() {
    makeAutoObservable(this)
  }


  async logWindow(){
    await console.log(window.Telegram.WebApp);
    this.tg = window.Telegram.WebApp
    this.setUserName()
  }

  setUserName() {
    this.firstName = this.tg.initDataUnsafe.user.first_name
    this.lastName = this.tg.initDataUnsafe.user.last_name
  }
}

export default new Store()