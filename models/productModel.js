const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/products.json');

const readData = () => {
    try {
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify([]));
        }
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error('Error reading or parsing JSON:', error);
        return [];
    }
};


const writeData = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

module.exports = {
    getAll: () => readData(),
    getById: (productId) => readData().find(product => product.productId === productId),
    create: (product) => {
        const products = readData();
        // console.log(product,"product");
        products.push(product);
        writeData(products);
        return product;
    },
    updateById: (productId, newData) => {
        let products = readData();
        products = products.map(product => product.productId === productId ? { ...product, ...newData } : product);
        writeData(products);
        return products.find(product => product.productId === productId);
    },
    deleteById: (productId) => {
        let products = readData();
        const productIndex = products.findIndex(product => product.productId === productId);
        if (productIndex > -1) {
            const [product] = products.splice(productIndex, 1);
            writeData(products);
            return product;
        }
        return null;
    }
};
