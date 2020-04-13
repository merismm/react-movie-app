import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import './Header.css';

class Header extends Component {
    onSearch(query) {
        this.props.onSearch(query.target.value)
    }

    render() {
        const { active } = this.props;

        return (
		 
            <nav className="nav navbar navbar-expand-lg ">
			<p>
			<div class="btn-group">
               <Button color="white" className="is-rounded"><Link color="black"  className={`nav-link`} to='/movies'>Movies</Link></Button>
			   <Button color="white" className="is-rounded"><Link className={`nav-link`} to='/shows'>TV Shows</Link></Button>
			</div>
			<p>
			</p>
            <div class="search">
              <span class="fa fa-search"></span>
              <input   type="search" placeholder="search" aria-label="search" onChange={(e) => this.onSearch(e)} /> 
	      </div>
          </p>
          </nav>
        );
    }
}

export default Header;