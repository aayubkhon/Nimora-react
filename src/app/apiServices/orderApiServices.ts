import axios from "axios";
import assert from "assert";
import { Definer } from "../lib/Definer";
import { serverApi } from "../lib/config";
import { CartItem } from "../types/other";
import { OrderInput } from "../types/order";

class orderApiServices {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }
  async createOrder(data: CartItem[]) {
    try {
      const url = "/orders/create",
        result = await axios.post(this.path + url, data, {
          withCredentials: true,
        });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data.state !== "fail", result?.data?.message);
      console.log("state", result.data.state);

      const order: any = result.data.data;
      console.log("order", order);
      return order;
    } catch (err: any) {
      console.log(`ERROR ::: createOrder", ${err.message}`);
      throw err;
    }
  }

  async getMyOrders(data: OrderInput) {
    try {
      let url = `/orders`;
      if (data.order_status) {
        url += `?order_status=${data.order_status}`;
      }
      if (data.order_id) {
        url += `?order_id=${data.order_id}`;
      }

      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data.state !== "fail", result?.data?.message);
      console.log("state", result.data.state);
      
      const orders: any = result.data.data;
      return orders;
    } catch (err: any) {
      console.log(`ERROR ::: getMyOrders", ${err.message}`);
      throw err;
    }
  }
    async updateOrderStatus(data: any) {
    try {
      const url = "/orders/edit",
        result = await axios.post(this.path + url, data, {
          withCredentials: true,
        });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);
      console.log("state:::", result.data.state);
      const order: any = result.data.data;
      return order;
    } catch (err: any) {
      console.log(`ERROR ::: updateOrderStatus ${err.message}`);
      throw err;
    }
  }
}

export default orderApiServices;
