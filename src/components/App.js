import Corpo from './Corpo';
import NavBar from './NavBar';
import FundoMobile from './FundoMobile';

export default function App(){
    return(
    <div>
        <NavBar />
        <Corpo user='catanacomics' subUser='Catana'/>
        <FundoMobile />
    </div>
    );
}