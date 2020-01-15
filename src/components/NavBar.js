import React from "react";

const NavBar = (props) => {

  return (
    <div className="NavBar">
      <h2>Navigation Bar</h2>
      <label>
        Search:
        <input type="text" name="search" placeholder="Bot name"
               value={props.searchValue}
               onChange={props.handleSearch} />
      </label> 

      <label>
        Filter by Class:
          <select value={props.filterValue} 
                  onChange={props.handleFilter}>
            <option value="No filter">No filter</option>
            <option value="Support">Support</option>
            <option value="Defender">Defender</option>
            <option value="Assault">Assault</option>
          </select>
        </label>
    </div>
  )
}

export default NavBar;