import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(101, "The Avengers", 500, 2012, "USA", "Avengers Assemble!", "фантастика", 137));

console.log(cart.sum());
console.log(cart.sumDiscount(10));
console.log(cart.delete(101));

console.log(cart.items);
