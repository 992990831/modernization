import { Request, Get_Order_Url } from '../util/Request';

export interface Order{
    id: number;
    note: string;
}

class OrderService {
  async getOrders(): Promise<Order[]> {
    let success = false;
    let orders:Order[] = [];
    try {
        orders = await Request.get(Get_Order_Url);
        success=true;
    } catch {
      console.log('error when fetch order')
    }

    return success ? orders : Promise.reject();
  }
}

export const orderService = new OrderService();
