import bigMac from './mock-assets/big-mac.jpeg';
import nuggets from './mock-assets/nuggets.jpg';
import frenchFries from './mock-assets/french-fries.jpeg';
import coke from './mock-assets/coke.jpeg';
import flurry from './mock-assets/flurry.jpeg';
import hamburger from './mock-assets/hamburger.jpg';
import cheeseBurger from './mock-assets/cheese-burrger.jpeg';
import soda from './mock-assets/soda.jpg';
import applePie from './mock-assets/apple-pie.jpg';
import shake from './mock-assets/shake.jpeg';
import chicken from './mock-assets/fried-chicken.png';
import chickenSalad from './mock-assets/chicken-salad.jpeg';
import iceCream from './mock-assets/ice-cream.jpg';
import salad from './mock-assets/salad.png';
import hot_chocolate from './mock-assets/hot-choclate.jpeg';
import wrap from './mock-assets/chicken-wrap.jpeg';

const mockFoodData = [
    {
        id: 1,
        image: bigMac,
        name: 'Big Mac',
        category: 'Burger',
        description: 'Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.',
        price: 5.99,
        searchKeywords: ['burger', 'big mac', 'beef', 'sauce', 'lettuce', 'cheese', 'pickles', 'onions'],
    },
    {
        id: 2,
        image: nuggets,
        name: 'Nuggets',
        category: 'Chicken',
        description: 'Tender, juicy chicken pieces breaded and fried to perfection.',
        price: 4.99,
        searchKeywords: ['chicken', 'nuggets', 'fried', 'tender', 'juicy'],
    },
    {
        id: 3,
        image: frenchFries,
        name: 'French Fries',
        category: 'Side',
        description: 'Golden brown and crispy on the outside, fluffy on the inside.',
        price: 2.99,
        searchKeywords: ['fries', 'side', 'crispy', 'golden brown'],
    },
    {
        id: 4,
        image: coke,
        name: 'Coke',
        category: 'Drink',
        description: 'A refreshing and classic cola.',
        price: 1.99,
        searchKeywords: ['drink', 'cola', 'coke', 'refreshing'],
    },
    {
        id: 5,
        image: flurry,
        name: 'Flurry',
        category: 'Dessert',
        description: 'A creamy, delicious dessert with a mix of soft serve and your favorite candy.',
        price: 3.99,
        searchKeywords: ['dessert', 'flurry', 'soft serve', 'candy'],
    },
    {
        id: 6,
        image: hamburger,
        name: 'Hamburger',
        category: 'Burger',
        description: 'A juicy beef patty on a sesame seed bun.',
        price: 3.99,
        searchKeywords: ['burger', 'hamburger', 'beef', 'patty', 'sesame seed bun'],
    },
    {
        id: 7,
        image: nuggets,
        name: 'Chicken Nuggets',
        category: 'Chicken',
        description: 'Tender, juicy chicken pieces breaded and fried to perfection.',
        price: 4.99,
        searchKeywords: ['chicken', 'nuggets', 'fried', 'tender', 'juicy'],
    },
    {
        id: 8,
        image: cheeseBurger,
        name: 'Cheeseburger',
        category: 'Burger',
        description: 'A juicy beef patty topped with melted cheese on a sesame seed bun.',
        price: 4.99,
        searchKeywords: ['burger', 'cheeseburger', 'beef', 'cheese', 'patty', 'sesame seed bun'],
    },
    {
        id: 9,
        image: frenchFries,
        name: 'Fries',
        category: 'Side',
        description: 'Golden brown and crispy on the outside, fluffy on the inside.',
        price: 2.99,
        searchKeywords: ['fries', 'side', 'crispy', 'golden brown'],
    },
    {
        id: 10,
        image: soda,
        name: 'Soda',
        category: 'Drink',
        description: 'A refreshing beverage to quench your thirst.',
        price: 1.99,
        searchKeywords: ['drink', 'soda', 'beverage', 'refreshing'],
    },
    {
        id: 11,
        image: applePie,
        name: 'Apple Pie',
        category: 'Dessert',
        description: 'A warm, flaky pastry filled with sweet apple filling.',
        price: 2.99,
        searchKeywords: ['dessert', 'apple pie', 'pastry', 'apple filling', 'sweet'],
    },
    {
        id: 12,
        image: shake,
        name: 'Shake',
        category: 'Drink',
        description: 'A creamy, cold shake made with your favorite flavor.',
        price: 3.99,
        searchKeywords: ['drink', 'shake', 'cold', 'creamy', 'flavor'],
    },
    {
        id: 13,
        image: chicken,
        name: 'Chicken',
        category: 'Chicken',
        description: 'A crispy chicken fillet in a toasted bun.',
        price: 4.99,
        searchKeywords: ['chicken', 'chicken', 'crispy', 'fillet', 'toasted bun'],
    },
    {
        id: 14,
        image: chickenSalad,
        name: 'Chicken Salad',
        category: 'Chicken',
        description: 'A refreshing salad with grilled chicken, lettuce, and your choice of dressing.',
        price: 5.99,
        searchKeywords: ['chicken', 'salad', 'grilled chicken', 'lettuce', 'dressing'],
    },
    {
        id: 15,
        image: frenchFries,
        name: ' Fries',
        category: 'Side',
        description: 'Golden brown and crispy on the outside, fluffy on the inside.',
        price: 2.99,
        searchKeywords: ['fries', 'side', 'crispy', 'golden brown'],
    },
    {
        id: 16,
        image: coke,
        name: 'Coca-Cola',
        category: 'Drink',
        description: 'A refreshing and classic cola.',
        price: 1.99,
        searchKeywords: ['drink', 'cola', 'coke', 'refreshing'],
    },
    {
        id: 17,
        image: iceCream,
        name: ' Ice Cream',
        category: 'Dessert',
        description: 'A creamy, delicious dessert with a mix of soft serve and your favorite candy.',
        price: 3.99,
        searchKeywords: ['dessert', 'ice cream', 'soft serve', 'candy'],
    },
    {
        id: 18,
        image: salad,
        name: ' Salad',
        category: 'Side',
        description: 'A refreshing salad with lettuce, tomatoes, and your choice of dressing.',
        price: 3.99,
        searchKeywords: ['salad', 'lettuce', 'tomatoes', 'dressing'],
    },
    {
        id: 19,
        image: hot_chocolate,
        name: ' Hot Chocolate',
        category: 'Drink',
        description: 'A warm, comforting drink perfect for cold days.',
        price: 2.99,
        searchKeywords: ['drink', 'hot chocolate', 'warm', 'comforting'],
    },
    {
        id: 20,
        image: wrap,
        name: 'Wrap',
        category: 'Chicken',
        description: 'A wrap filled with grilled chicken, lettuce, and your choice of sauce.',
        price: 5.99,
        searchKeywords: ['chicken', 'wrap', 'grilled chicken', 'lettuce', 'sauce'],
    },
];

export default mockFoodData;
