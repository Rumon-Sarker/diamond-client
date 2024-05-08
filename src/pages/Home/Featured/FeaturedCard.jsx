import { Rating } from '@smastrom/react-rating';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { TbShoppingBagPlus } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import useCart from '../../../hooks/useCart';
const FeaturedCard = ({ item }) => {
    const { user } = useContext(AuthContext);
    const { name, title, description, img, price, star, category, _id } = item;
    const [, refetch] = useCart();

    const handaleAddToCart = async () => {
        const cartInfo = {
            name,
            email: user?.email,
            price,
            img,
            title,
            category,
            star,
            description

        }
        const res = await axios.post("http://localhost:5000/cart", cartInfo);
        if (res.data.insertedId) {
            refetch();
            toast.success("Items Added Success");
        }
    }
    return (
        <div >
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
                            <button onClick={() => handaleAddToCart()} className='hover:text-green-700'><TbShoppingBagPlus /></button>
                            <Link className='btn' to={`/details/${_id}`}>details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
FeaturedCard.propTypes = {
    item: PropTypes.object
};
export default FeaturedCard;