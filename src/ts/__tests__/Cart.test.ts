import Book from '../domain/Book';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';
import Cart from '../service/Cart';

test('new card should be empty', () => {
    const cart = new Cart();

    expect(cart.items.length).toBe(0);
});

test('добавление add', () => {
    const cart = new Cart();
    const book = [{
        id: 1001,
        name: 'War and Piece',
        author: 'Leo Tolstoy',
        price: 2000,
        pages: 1225
    }]
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    expect(cart.items).toEqual(book);
});

test(("проверка sum"), () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(101, "The Avengers", 500, 2012, "USA", "Avengers Assemble!", "фантастика", 137));

    expect(cart.sum()).toBe(3400);
});

test(("проверка sumDiscount"), () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(101, "The Avengers", 500, 2012, "USA", "Avengers Assemble!", "фантастика", 137));

    expect(cart.sumDiscount(10)).toBe(3060);
    expect(cart.sumDiscount(50)).toBe(1700);
});

test(("проверка delete"), () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(101, "The Avengers", 500, 2012, "USA", "Avengers Assemble!", "фантастика", 137));

    const array = [{
        id: 1001,
        name: 'War and Piece',
        author: 'Leo Tolstoy',
        price: 2000,
        pages: 1225
        },
        {
        id: 1008,
        name: 'Meteora',
        author: 'Linkin Park',
        price: 900
        }]
    cart.delete(101)
    expect(cart.items).toEqual(array);
});

