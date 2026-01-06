import axios from "axios";
import assert from "assert";
import { Definer } from "../lib/Definer";
import { serverApi } from "../lib/config";
import { Product,} from "../types/product";
import { ProductSearchObj } from "../types/other";

class ProductApiServices {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }

 async getAllProducts(data:ProductSearchObj) {
  try {
    const url = "/products"; 
    const result = await axios.post(this.path + url, data, { withCredentials: true });
    assert.ok(result, Definer.general_err1);
    console.log("state", result.data.state);
    const produts: Product[] = result.data.data;
    console.log("product::",produts);
    return produts;
  } catch (err: any) {
    console.log(`ERROR ::: getAllProducts", ${err.message}`);
    throw err;
  }
}
  async getChosenProduct(product_id: string): Promise<Product> {
    try {
      const url = `/products/${product_id}`,
        result = await axios.get(this.path + url, {
          withCredentials: true,
        });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);
      console.log("state:::", result.data.state);
      const product: Product = result.data.data;
      return product;
    } catch (err: any) {
      console.log(`ERROR ::: getChosenProduct ${err.message}`);
      throw err;
    }
  }
}
export default ProductApiServices;
