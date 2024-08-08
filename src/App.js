import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';



function App(){

    const {tg, onToggle} = useTelegram();

    useEffect( () => {
        tg.ready();
    }, [])


   

    return(
        <div className='App'>
            <button onClick={onToggle}>toggle</button>
        </div>
    );
}

export default App