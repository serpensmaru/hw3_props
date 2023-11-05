import React from 'react'

interface Item {
    listing_id: string | number;
    state: string;
    title: string;
    currency_code: string;
    price: string;
    quantity?: number;
    url: string;
    MainImage: {
      url_570xN: string;
    };
}
  
interface ItemProps {
    item: Item;
}


const Items: React.FC<ItemProps> = ( props ) => {
    const {url, image, title, price, quantity} = props
    return (
      <div className="item">
        <div className="item-image">
          <a href={url}>
            <img src={image} alt={title}/>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{title}</p>
          <p className="item-price">{price}</p>
          <p className={`item-quantity level-${quantity}`}>{quantity} left</p>
        </div>
      </div>
    )
  }
  export default Items
