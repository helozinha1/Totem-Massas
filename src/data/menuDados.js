import comboExpress from '../assets/img/Combos/combo-express.png';
import comboPizza from '../assets/img/Combos/combo-pizza.png';

import macarraoBolonhesa from '../assets/img/Massas/Macarrao/macarrao-bolonhesa.png';
import macarraoCarbonara from '../assets/img/Massas/Macarrao/macarrao-carbonara.png';
import risoli from '../assets/img/Massas/Macarrao/risoli.png';
import nhoque from '../assets/img/Massas/Inhoque/nhoque.png';

import lasanhaBolonhesa from '../assets/img/Massas/Lasanha/lasanha-bolonhesa.png';
import lasanhaFrango from '../assets/img/Massas/Lasanha/lasanha-frango.png';

import pizzaMargarita from '../assets/img/Massas/Pizza/pizza-margarita.png';
import pizzaPepperoni from '../assets/img/Massas/Pizza/pizza-calabresa.png';

import pao from '../assets/img/Acompanhamentos/pao.png';
import polenta from '../assets/img/Acompanhamentos/polenta.png';

import tiramisu from '../assets/img/sobremesa/tiramisu.png';
import pannaCotta from '../assets/img/sobremesa/panna.png';
import cannoli from '../assets/img/sobremesa/canolli.png';

import sucoNatural from '../assets/img/Bebidas/suco-natural.png';
import vinhoTaca from '../assets/img/Bebidas/vinho-taca.png';
import sodaItaliana from '../assets/img/Bebidas/soda-italiana.png';
import refriLata from '../assets/img/Bebidas/refri-lata.png';

export const categoriasDados = [
  { id: 'combos', name: 'Combos & Ofertas' },
  { id: 'massas', name: 'Massas & Nhoques' },
  { id: 'lasanhas', name: 'Lasanhas & Forno' },
  { id: 'pizzas', name: 'Pizzas Brotão' },
  { id: 'acompanhamentos', name: 'Acompanhamentos' },
  { id: 'sobremesas', name: 'Sobremesas' },
  { id: 'bebidas', name: 'Bebidas' }
];

export const produtosDados = [
  // COMBOS & OFERTAS
  { id: 'c1', name: 'Combo Express (Massa + Refri)', price: 89.9, image: comboExpress, categoryId: 'combos', category: { name: 'Combos & Ofertas' } },
  { id: 'c2', name: 'Combo Pizza (Pizza + Refri)', price: 79.9, image: comboPizza, categoryId: 'combos', category: { name: 'Combos & Ofertas' } },

  // MASSAS & NHOQUES
  { id: 'm1', name: 'Spaghetti à Bolonhesa', price: 68.9, image: macarraoBolonhesa, categoryId: 'massas', category: { name: 'Massas & Nhoques' } },
  { id: 'm2', name: 'Fettuccine Carbonara', price: 78.9, image: macarraoCarbonara, categoryId: 'massas', category: { name: 'Massas & Nhoques' } },
  { id: 'm3', name: 'Ravioli de Ricota com Pomodoro', price: 74.9, image: risoli, categoryId: 'massas', category: { name: 'Massas & Nhoques' } },
  { id: 'm4', name: 'Nhoque 4 Queijos', price: 82.9, image: nhoque, categoryId: 'massas', category: { name: 'Massas & Nhoques' } },

  // LASANHAS & FORNO
  { id: 'l1', name: 'Lasanha à Bolonhesa', price: 76.9, image: lasanhaBolonhesa, categoryId: 'lasanhas', category: { name: 'Lasanhas & Forno' } },
  { id: 'l2', name: 'Lasanha Frango c/ Catupiry', price: 72.9, image: lasanhaFrango, categoryId: 'lasanhas', category: { name: 'Lasanhas & Forno' } },

  // PIZZAS BROTÃO
  { id: 'p1', name: 'Pizza Margherita', price: 58.9, image: pizzaMargarita, categoryId: 'pizzas', category: { name: 'Pizzas Brotão' } },
  { id: 'p2', name: 'Pizza Pepperoni', price: 58.9, image: pizzaPepperoni, categoryId: 'pizzas', category: { name: 'Pizzas Brotão' } },

  // ACOMPANHAMENTOS
  { id: 'a1', name: 'Bastões de Pão de Alho', price: 32.9, image: pao, categoryId: 'acompanhamentos', category: { name: 'Acompanhamentos' } },
  { id: 'a2', name: 'Polenta Frita Crocante', price: 36.9, image: polenta, categoryId: 'acompanhamentos', category: { name: 'Acompanhamentos' } },

  // SOBREMESAS
  { id: 's1', name: 'Tiramisù em Pote', price: 34.9, image: tiramisu, categoryId: 'sobremesas', category: { name: 'Sobremesas' } },
  { id: 's2', name: 'Panna Cotta em Pote', price: 29.9, image: pannaCotta, categoryId: 'sobremesas', category: { name: 'Sobremesas' } },
  { id: 's3', name: 'Cannoli Siciliano', price: 26.9, image: cannoli, categoryId: 'sobremesas', category: { name: 'Sobremesas' } },

  // BEBIDAS
  { id: 'b1', name: 'Suco Natural (Laranja/Uva)', price: 18.9, image: sucoNatural, categoryId: 'bebidas', category: { name: 'Bebidas' } },
  { id: 'b2', name: 'Vinho em Taça', price: 42.9, image: vinhoTaca, categoryId: 'bebidas', category: { name: 'Bebidas' } },
  { id: 'b3', name: 'Soda Italiana', price: 24.9, image: sodaItaliana, categoryId: 'bebidas', category: { name: 'Bebidas' } },
  { id: 'b4', name: 'Refrigerante Lata', price: 14.9, image: refriLata, categoryId: 'bebidas', category: { name: 'Bebidas' } }
];