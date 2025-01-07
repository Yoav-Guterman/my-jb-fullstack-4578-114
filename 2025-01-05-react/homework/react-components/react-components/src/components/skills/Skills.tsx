import './Skills.css'

export default function Skills(): JSX.Element {
    const skillsArray = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'React']
    return (
        <div className='Skills'>
            <p>i know the following technologies:</p>
            <ul>
                {skillsArray.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </div>


    )
}