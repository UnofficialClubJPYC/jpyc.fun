/**
 * Nuko.js
 */

/**
 *
 * @param {*} keys
 */

const URL = "https://api.nuko.town/jpycFun/v1/";

class Nuko {
  /* Tweet Message
   * @param {*} message
   */
  static async twitterUserInfo(username) {
    const data = await fetch(`${URL}/usersShow/${username}`);
    const ret = JSON.parse(await data.text());

    return ret.result;
  }
}

export default Nuko;
