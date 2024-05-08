import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import PropTypes from 'prop-types';
import { GoKebabHorizontal } from 'react-icons/go';
import { TbShoppingBagPlus } from 'react-icons/tb';
import { Link } from 'react-router-dom';
const FeaturedCard = ({ item }) => {
    const { name, title, img, price, star, } = item;
    return (
        <Link>
            <div className="card glass mx-auto hover:shadow-2xl">
                <figure><img src={img} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{title}</p>
                    <p className='text-xl font-bold'>$ {price}</p>
                    <div className='flex justify-between'>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={star}
                            readOnly
                        ></Rating>
                        <div className='flex gap-3 text-3xl'>
                            <button className='hover:text-green-700'><TbShoppingBagPlus /></button>
                            <button><GoKebabHorizontal /></button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
FeaturedCard.propTypes = {
    item: PropTypes.object
};
export default FeaturedCard;