import React from 'react'
import './locations.css'
import { useLocations } from '../api/useData'
import PagePagination from '../pagination/PagePagination'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowCircleUp } from 'react-icons/fa';

const Navbar = () => {
    return (
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="nav-link" activeClassName="active" to="/characters">Characters</NavLink>
          </li>
        </ul>
      </nav>
    );
}

const Card = (detail) => {

    const [modal, setModal] = useState(false);


    let location = detail.detail;
    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }



    return (
        <div className='ram_locations-container_card' key={location.id}onClick={() => { toggleModal() }}>
            <h3> {location.name} </h3>
            {
                <React.Fragment key={location.id}>                        
                        {modal && (
                            <div>
                                <div className="overlay"></div>
                                <div className="modal-content">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><h3 ><b>Name: </b>{location.name}</h3><br />
                                                    <b>Type: </b> {location.type}<br />
                                                    <b>Dimension: </b> {location.dimension}<br />
                                                    <b>Residents: </b> {location.residents.length}<br />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button className="close-modal" onClick={toggleModal}>
                                        CLOSE
                                    </button>
                                </div>
                            </div>
                        )
                        }
                </React.Fragment>
            }

        </div>
    )
}


const Locations = () => {

    const [pageNum, setPageNum] = useState(1);
    const changePage = (page) => { setPageNum(page) }
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    
      useEffect(() => {
        const handleScroll = () => {
          if (window.pageYOffset > 300) {
            setShowScrollToTop(true);
          } else {
            setShowScrollToTop(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    let locations = useLocations(pageNum);

    if (locations === 'Loading...') {
        return (
            <p></p>
        )
    }
    return (
        <React.Fragment>
        <Navbar/>
        <div className="ram_locations-container">
            {locations.results.map(location => (
                <Card key={location.id} detail={location} />
            ))}
            
        </div>
        <PagePagination pageNum={locations.info.pages} changePage={changePage} currentPage={pageNum} />
        {showScrollToTop && (
          <div className="scroll-to-top" onClick={scrollToTop}>
            <FaArrowCircleUp size={36} />
          </div>
        )}
        </React.Fragment>

    )
}



export default Locations