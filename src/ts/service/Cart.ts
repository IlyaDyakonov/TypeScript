import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    // считаем сумму price без учёта скидки
    sum(): number{
        let amount = 0;
        for (const item of this._items) {
            amount += item.price;
        }
        return amount;
    }

    // считаем сумму price с учётом скидки
    sumDiscount(sale: number): number{
        const amount = (this.sum() / 100) * sale;
        const amountDiscount = this.sum() - amount;
        return amountDiscount;
        }

    delete(id: number): void {
        for (let i = 0; i < this._items.length; i++) {
            if (this._items[i].id === id) {
                this._items.splice(i, 1);
                break;
            }
        }
    }
}