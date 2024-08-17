/* eslint-disable react-refresh/only-export-components */
import { useFetcher } from 'react-router-dom'
import Buttons from '../../ui/Buttons'
import { updateOrder } from '../../services/apiRestaurant'

function UpdateOrder() {
    const fetcher = useFetcher()
    return (
        <fetcher.Form method="PATCh" className="text-right">
            <Buttons type="primary">Make Priority</Buttons>
        </fetcher.Form>
    )
}

export default UpdateOrder

export async function action({ params }) {
    const data = { priority: true }
    await updateOrder(params.orderId, data)

    return null
}
