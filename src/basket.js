
class Basket {
    constructor() {
        this.items = this.loadFromLocalStorage() || [];

    }


    clear() {
        this.items.length = 0;
        this.saveToLocalStorage();
    }

    add(item) {
        this.items.push(item);
        this.saveToLocalStorage();

    }

    getTotalValue() {
        return this.items.reduce((prev, curr) => prev + curr.price, 0);

        // let sum = 0;
        // for (const product of this.items) {
        //     sum += product.price
        // }
        // return sum;

    }

    getBasketSummary() {
        return this.items
            .map((product, i) => {
                return {
                    id: i + 1,
                    text: `${i + 1} - ${product.name} - ${product.price.toFixed(2)} zł`,
                };
            });

    }

    remove(no) {
        this.items.splice(no - 1, 1);
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem('basket-items', JSON.stringify(this.items));
    }

    loadFromLocalStorage() {
        return JSON.parse(localStorage.getItem('basket-items'));
    }
}

class Product {
    constructor(productName, productPrice) {
    this.name = productName;
    this.price = productPrice;
    }

    setNewPrice(newPrice) {
        this.price = newPrice
    }
}




