import React from "react";

function Categories() {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    const handleClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <div className="categories">
            <ul>
                {categories.map(category => (
                    <li
                        key={category}
                        className={activeIndex === categories.indexOf(category)? 'active' : ''}
                        onClick={() => handleClick(categories.indexOf(category))}>
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;