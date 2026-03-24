import axios from "axios";
import assert from "assert";
import { Definer } from "../lib/Definer";
import { serverApi } from "../lib/config";
import { Shop } from "../types/user";

class ShopApiServices {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }

 async getTopStoreShops() {
  try {
    const url = "/shops?order=top&page=1&limit=8"; 
    const result = await axios.get(this.path + url, { withCredentials: true });
    assert.ok(result, Definer.general_err1);
    console.log("result", result);
    const top_shops: Shop[] = result.data.data;
    return top_shops;
  } catch (err: any) {
    console.log(`ERROR ::: getTopStoreShops", ${err.message}`);
    throw err;
  }
}
}
export default ShopApiServices;
