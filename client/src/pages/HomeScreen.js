import React, { useState, useEffect } from 'react';
import householdData from '../utils/householdData';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import axios from 'axios';

function HomeScreen(props){

    const [household, setHousehold] = useState([]);

    useEffect(() => {
        fetchData()    
    }, [])
    
    const fetchData = async () => {
        const {data} = await axios.get("api/household");
        setHousehold(data)
    }

    return(
        <div>
             <div classNameName="profile-info">
                <h2>Hi! User.name</h2>
                    <p>You currently belong to:</p>
                        <ul classNameName="households">
                             { household.map(house => 
                                 <li>
                                    <div classNameName="houselhold">
                                        <Link to={'/household/' + house.id}>{house.name}</Link>
                                    </div>
                                </li>)}
                        </ul>
            </div>
 
        <div classNameName="join">
            <h3>Feeling FOMO?</h3>
            <form>
            <label>Join your roommates:</label>
            <input type="text" id="hname" name="hname" placeholder="Household name"/>
            <br/>
            <input type="submit" value="Join" classNameName="btn btn-warning"/>
        </form>
        <br/>
        <hr/>
    </div>

    <div classNameName="create">
        <form>
            <label>Create your own: </label>
            <input type="text" id="hname" name="hname" placeholder="Marcella St"/>
            <br/>
            <label>Add members:</label>
            <input type="text" id="hmember" name="hmember" placeholder="Emails here"/>
            <br/>
            <input type="submit" value="Create" classNameName="btn btn-warning"/>
            <br/>
        </form>
    </div>

   <Footer/>
   </div>
    )
}

export default HomeScreen;