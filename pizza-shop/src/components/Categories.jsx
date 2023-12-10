import React from "react";

function Categories({value, onClickCategory}) {
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    return (
        <div className="categories">
            <ul>
                {categories.map(category => (
                    <li
                        key={category}
                        className={value === categories.indexOf(category)? 'active' : ''}
                        onClick={() => onClickCategory(categories.indexOf(category))}>
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;