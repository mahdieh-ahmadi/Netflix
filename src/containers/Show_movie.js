import React,{useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import './show_movie.css'
import Logo from '../components/logo/logo'
import Btn from '../components/buttons/button'

const Show_movie = props => {
    const [movie , setMovie] = useState('')

    useEffect(() => {
        setMovie(props.select_movie)
    } , [])

    return <div style={{'backgroundImage' : ` url(${movie.addres}) `, 'backgroundPosition' : 'top' , 'backgroundSize': '100%' , 'backgroundRepeat': 'no-repeat' , 'backgroundColor' : 'black'}}
        className = 'select_movie'>
        <div className='movie_header'>
            <Link to='/'><Btn class='redBtn'  title='Back'/></Link>
        </div>
        <div className = 'box_movie'>
            <div className = 'box_movie-img'>
                <img src={movie.addres} alt = {movie.name}/>
            </div>
            <div className='box_movie-content'>
                <div className='box_titr'><Logo title={movie.name}/></div>
                <p className='green_paragraph'>Mankind was born on Earth. It was never meant to die here.</p>
                <p className='white_paragraph'>The adventures of a group of explorers who make use of a newly discovered
                     wormhole to surpass the limitations on human space travel and conquer
                      the vast distances involved in an interstellar voyage.</p>
                
                <div className='green_paragraph top_space'>Adventure, Drama, Science Fiction</div>
                <div className='white_paragraph spicial_font'>Legendary Pictures, Syncopy, Lynda Obst Productions</div>

                <ul className='box_list'>
                    <li>
                        <div className='spicial_font white_paragraph'>Original Release:</div>
                        <div className='green_paragraph big_font'>2014-11-05</div>
                    </li>
                    <li>
                        <div className='spicial_font white_paragraph'>Running Time:</div>
                        <div className='green_paragraph big_font'>169 mins</div>
                    </li>
                    <li>
                        <div className='spicial_font white_paragraph'>Box Office:</div>
                        <div className='green_paragraph big_font'>$675,120,017</div>
                    </li>
                    <li>
                        <div className='spicial_font white_paragraph'>Vote Average:</div>
                        <div className='green_paragraph big_font'>8.3 / 10</div>
                    </li>
                </ul>
           
            </div>
        </div>
        <div className='movie_footer'></div>
    </div>
}

const mapStateToProps = state => {return{
    select_movie : state.filmDate
}}

export default connect(mapStateToProps)(Show_movie)