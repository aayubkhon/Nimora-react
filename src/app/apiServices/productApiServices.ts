import axios from "axios";
import assert from "assert";
import { Definer } from "../lib/Definer";
import { serverApi } from "../lib/config";
import { Product,} from "../types/product";
import { ProductData } from "../types/other";

class ProductApiServices {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }

 async getAllProducts(data:ProductData) {
  try {
    const url = "/products"; 
    const result = await axios.post(this.path + url, data, { withCredentials: true });
    assert.ok(result, Definer.general_err1);
    console.log("state", result.data.state);
    const produts: Product[] = result.data.data;
    return produts;
  } catch (err: any) {
    console.log(`ERROR ::: getAllProducts", ${err.message}`);
    throw err;
  }
}
}
export default ProductApiServices;
