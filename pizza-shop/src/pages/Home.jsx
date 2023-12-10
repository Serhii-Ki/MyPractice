import React from 'react';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";

function Home(props) {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState({name: 'популярности', sort: 'rating'});

    React.useEffect(() => {
        setIsLoading(true);
        fetch(
            `https://6572056dd61ba6fcc0143cae.mockapi.io/items?
            ${categoryId ? `category=${categoryId}` : ''
            }&sortBy=${sortType.sort}&order=desc`
        )
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId, sortType]);

    const onClickCategory = (id) => {
        setCategoryId(id);
    };

    const onClickSort = (type) => {
        setSortType(type);
    };

    return (
        <container>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(id)=>onClickCategory(id)}/>
                <Sort value={sortType.name} onClickSort={(type) => onClickSort(type)}/>
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