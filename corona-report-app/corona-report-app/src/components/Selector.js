import contriesJson from '../countries.json';
const Selector = () => {    

    return(
        <div>
            <select>
                {contriesJson.map((country,index) => 
                    <option key={index} value={country.Slug}>{country.Country}</option>
                )}
            </select>
        </div>
    );
};
export default Selector;