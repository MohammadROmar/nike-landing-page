import Database from 'better-sqlite3';
import sql from 'sql-template-tag';

export const db = new Database('products.db');

export type Product = {
  image: string;
  name: string;
  price: string;
  rating: number;
};

const products: Product[] = [
  {
    image: 'shoe4.svg',
    name: 'Nike Air Jordan-01',
    price: '$200.20',
    rating: 4.9,
  },
  {
    image: 'shoe5.svg',
    name: 'Nike Air Jordan-10',
    price: '$210.20',
    rating: 4.2,
  },
  {
    image: 'shoe6.svg',
    name: 'Nike Air Jordan-100',
    price: '$220.20',
    rating: 4.8,
  },
  {
    image: 'shoe7.svg',
    name: 'Nike Air Jordan-001',
    price: '$230.20',
    rating: 4.5,
  },
];

const createProductsTabel = sql`CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  image TEXT NOT NULL,
  price TEXT NOT NULL,
  rating INTEGER NOT NULL
)`.text;
db.prepare(createProductsTabel).run();

const insertDataQuery = db.prepare(
  sql`INSERT INTO products (
  name,
  image,
  price,
  rating
) VALUES (?, ?, ?, ?)`.text
);

export function getProducts(): Product[] {
  const query = db.prepare(sql`SELECT * FROM products`.text).all();

  return query as Product[];
}

function init() {
  const storedProducts = getProducts();

  if (storedProducts.length === 0) {
    for (const product of products) {
      const { image, name, price, rating } = product;

      insertDataQuery.run(name, image, price, rating);
    }
  }
}

init();
