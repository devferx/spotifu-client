class SessionStorage {
  getItem(key) {
    try {
      return window.sessionStorage.getItem(key);
    } catch (error) {
      console.log(error);
      return new Error(error);
    }
  }
  setItem(key, value) {
    try {
      return window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
      return new Error(error);
    }
  }

  getToken() {
    return JSON.parse(this.getItem("token"));
  }

  setToken(accessToken, refreshToken, expiresIn) {
    this.setItem("token", {
      accessToken,
      refreshToken,
      expiresIn,
      date: new Date(),
    });
  }
}

export default new SessionStorage();
