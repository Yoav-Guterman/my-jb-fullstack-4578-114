import './Header.css'

export default function Header(): JSX.Element {
    const header = 'welcome to my resume website'
    return (
        <div className='Header'>
            <p>{header}</p>
        </div>
    )
}