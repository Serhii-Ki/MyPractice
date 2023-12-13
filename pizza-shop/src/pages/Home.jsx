import React from 'react';
import {useSelector, useDispatch} from "react-redux";

import {setCategoryId} from "../redux/slices/filterSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";

function Home(props) {
    const categoryId = useSelector(state => state.filter.categoryId);
    const sortType = useSelector(state => state.filter.sort);
    const dispatch = useDispatch();

    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setIsLoading(true);
        fetch(
            `https://6572056dd61ba6fcc0143cae.mockapi.io/items?
            ${categoryId ? `category=${categoryId}` : ''}&sortBy=${sortType.sort}&order=desc`
        )
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId, sortType]);

    const onClickCategory = (id) => {
        dispatch(setCategoryId(id));
        console.log(categoryId);
    };


    return (
        <container>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(id)=>onClickCategory(id)}/>
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? [...new Array(6)].map((item, index) => <Skeleton key={index}/>)
                        : items.map(pizza => <PizzaBlock key={pizza.id} {...pizza}/>)
                }
            </div>
        </container>
    );
}

export default Home;