import './Demo.css'
import squirrelImageSource from '../../assets/images/squirrel.jpg'

export default function Demo(): JSX.Element {

    const name = 'Yoav'
    const age = 22
    const isAdult = true
    const grades = [70, 80, 90]

    const dogs = [
        {
            id: 1,
            name: 'chief',
            age: 6
        },
        {
            id: 2,
            name: 'noop',
            age: 4
        }
    ]

    function sayHi() {
        alert('sayHi')
    }

    return (
        <div className='Demo'>
            <p>Hello {name}</p>
            <p>you are {age} years old</p>
            <p>you are an {isAdult ? 'adult' : 'child'}</p>
            {/* <p>your grades are {grades} </p> */}
            <ul>
                {grades.map(grade => <li>{grade}</li>)}
            </ul>
            <button onClick={sayHi}>say hi</button>
            <p>dogs:</p>
            <table>
                <thead>
                    <th>name</th>
                    <th>age</th>
                </thead>
                <tbody>
                    {dogs.map(dog =>
                        <tr key={dog.id}>
                            <td>{dog.name}</td>
                            <td>{dog.age}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <img src={squirrelImageSource} />
        </div>
    )
}