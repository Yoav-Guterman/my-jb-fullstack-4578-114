import { useEffect, useState } from 'react'
import './Add.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import TypeModel from '../../../models/type/TypeModel'
import typeService from '../../../services/typeService'
import FurnitureModelDraft from '../../../models/furniture/FurnitureModelDraft'
import furnitureService from '../../../services/furnitureService'

export default function Add(): JSX.Element {

    const [types, setTypes] = useState<TypeModel[]>([])

    useEffect(() => {
        (async () => {
            try {
                const allTypes = await typeService.getAllTypes()
                setTypes(allTypes)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])


    const { register, handleSubmit, formState } = useForm<FurnitureModelDraft>()

    const navigate = useNavigate()

    async function submit(draft: FurnitureModelDraft) {
        try {
            await furnitureService.add(draft)
            alert('added furniture')
            navigate('/furnitures/list')
        } catch (e) {
            alert(e)
        }
    }


    return (
        <div className='Add'>
            <form onSubmit={handleSubmit(submit)}>

                <select defaultValue={''} {...register('typeId', {
                    required: {
                        value: true,
                        message: 'type is a must'
                    }
                })}>
                    <option value="" disabled>please select type...</option>
                    {types.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
                </select>
                <span className='error'>{formState.errors.typeId?.message}</span>

                <input type="number" placeholder='price' {...register('price', {
                    required: {
                        value: true,
                        message: 'price is a must'
                    }
                })} />
                <span className='error'>{formState.errors.price?.message}</span>

                <label>color</label>
                <input type="text"  {...register('color', {
                    required: {
                        value: true,
                        message: 'color is a must'
                    }
                })} />
                <span className='error'>{formState.errors.color?.message}</span>

                <label>size</label>
                <input type="text"  {...register('size', {
                    required: {
                        value: true,
                        message: 'size is a must'
                    }
                })} />
                <span className='error'>{formState.errors.size?.message}</span>

                <button>Add furniture</button>
            </form>
        </div>
    )
}