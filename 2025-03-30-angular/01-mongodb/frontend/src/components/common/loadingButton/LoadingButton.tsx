import './LoadingButton.css'
import Loading from '../loading/Loading'
import { LoadingSize } from '../../../models/loading/loadingSize'

interface LoadingButtonProps {
    message: string

}

export default function LoadingButton(props: LoadingButtonProps): JSX.Element {
    const { message, } = props
    return (
        <div className='LoadingButton' >
            <span>{message}</span>
            <Loading size={LoadingSize.SMALL} />
        </div>
    )

}