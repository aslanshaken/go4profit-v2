import Nav from '../Header/Header'
import Foot from '../Footer/Footer'

export default function Layout(props) {
    const {lang, setLang} = props
    return (
        <div>
            <Nav lang={lang} setLang={setLang} />
            {props.children}
            <Foot />
        </div>
    )
}