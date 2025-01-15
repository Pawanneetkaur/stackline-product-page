// src/types/index.ts
export interface SalesData {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  image: string;
  sales: SalesData[];
}
