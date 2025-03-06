import Employee from '../../../models/employee/employee'
import employeesService from '../../../services/employees'
import './Card.css'

interface CardProps {
    employee: Employee,
    removeEmployee(id: string): void
}

export default function Card(props: CardProps): JSX.Element {

    const { lastName, address, employmentDate, firstName, id } = props.employee
    const { name } = props.employee.job

    async function deleteMe() {
        try {
            await employeesService.remove(id)
            props.removeEmployee(id)
        } catch (e) {
            alert(e)
        }
    }


    return (
        <div className='Card'>
            <h4>first name:{firstName}</h4>
            <p>last name: {lastName}</p>
            <p>employment Date: {(new Date(employmentDate)).toLocaleDateString()}</p>
            <p>address: {address}</p>
            <p>job: {name}</p>
            <div className='deleteButton'>
                <button onClick={deleteMe}>delete</button>
            </div>
        </div>
    )
}