import { makeAutoObservable } from "mobx";

class telegramWebApi {
  tg = undefined;
  initDataUnsafe = {
    query_id: "124",
    user: {
      id: 1,
      first_name: "124",
      last_name: "412",
      username: "412",
      language_code: "412",
    },
    auth_date: "412",
    hash: "142",
  };
  constructor() {
    makeAutoObservable(this);
  }

  async startWebApi() {
    await console.log(window.Telegram.WebApp);
    this.tg = window.Telegram.WebApp;
    this.setInitDataUnsafe();
    this.expandWindow();
    this.sendData(this.initDataUnsafe);
  }

  async setInitDataUnsafe() {
    this.initDataUnsafe = this.tg.initDataUnsafe;
  }

  expandWindow() {
    this.tg.expand();
  }

  async sendData(data) {
    fetch("https://requestinspector.com/inspect/01gapzwzz6adgde5rpkb6099h9", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }
}

export default new telegramWebApi();
