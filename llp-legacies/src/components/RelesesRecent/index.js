import './index.css'

const RelesesRecent = () => {
    return(
        <div className='wcu-card'>
            <div className='container-options'>
            <h1 className='heading'>Recent Releases</h1>
            <select className='select'>
                <option>India</option>
                <option>UK</option>
                <option>UAE</option>
                <option>Africa</option>
            </select>
            </div>
            <hr/>
           <ul className='one-side-lining'>
            <li className='list-type'>
            <h1 className='heading-one'>Febrauary 12, 2024</h1>
            <h2 className='heading-two'>Industrial Production</h2>
            <p className='paragraph'>Index of Industrial Production (IIP) grew by 3.8% YoY in December, as compared to a 5.1% YoY growth in the some month last year. Electrictity has seen the slowest growth of the 1.2% YoY in December as compared to 10.4% YoY growth in the same month last year.</p>
            </li>
            <li className='list-type' style={{marginTop:'12px'}}>
            <h1 className='heading-one'>Febrauary 12, 2024</h1>
            <h2 className='heading-two'>
                CPI Inflation
            </h2>
            <p className='paragraph'>Index of Industrial Production (IIP) grew by 3.8% YoY in December, as compared to a 5.1% YoY growth in the some month last year. Electrictity has seen the slowest growth of the 1.2% YoY in December as compared to 10.4% YoY growth in the same month last year.</p>
            </li>
            </ul>
        </div>

      

    )
}

export default RelesesRecent