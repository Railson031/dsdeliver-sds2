import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import { useEffect, useState } from 'react';
import './styles.css';
import { OrderLocationdata , Product } from './types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationdata>(); 
    
useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }, []);

return (
        <div className="orders-container">
        <StepsHeader />
        <ProductsList products={products} />
        <OrderLocation  onChangeLocation ={location => setOrderLocation(location)}/>
        <OrderSummary />
        </div>
    )
}

export default Orders;

