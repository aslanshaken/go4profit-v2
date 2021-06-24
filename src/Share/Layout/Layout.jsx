import Nav from '../Header/Header'
import Foot from '../Footer/Footer'

export default function Layout(props) {
    return (
        <div>
            <Nav/>
            {props.children}
            <Foot />
        </div>
    )
}