import { useSelector } from 'react-redux'
import { formatCurrency } from '../../utilities/helpers'
import DelectItem from './DelectItem'
import UpdateItemQuantity from './UpdateItemQuantity'
import { getCurrentQuantityById } from './cartSlice'
function CartItem({ item }) {
    const { pizzaId, name, quantity, totalPrice } = item
    const currentQuantity = useSelector(getCurrentQuantityById(pizzaId))
    return (
        <li className="sm:item-center py-3 sm:flex sm:justify-between">
            <p className="sm:md-0 mb-1">
                {quantity}&times; {name}
            </p>
            <div className="flex items-center justify-between sm:gap-6">
                <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
                <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity} />
                <DelectItem pizzaId={pizzaId} />
            </div>
        </li>
    )
}

export default CartItem
