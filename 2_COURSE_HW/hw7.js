const products = ['салат оливье', 'салат цезарь', 'паста карбонара', 'салат мимоза', 'сэндвич с ветчиной'];
const search = 'салат';

products.forEach((product) => {
    if (product.toLowerCase().startsWith(search.toLowerCase())) {
        console.log(product);
    }
});


