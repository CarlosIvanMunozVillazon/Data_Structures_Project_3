import { ProductInterface } from "@/app/interface/Product.interface"

export interface ComparisonInterface {
    best: ProductInterface,
    worst: ProductInterface,
    products_order: ProductInterface[]
  }