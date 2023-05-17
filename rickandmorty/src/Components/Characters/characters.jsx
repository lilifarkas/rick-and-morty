import { useState, useEffect } from 'react'
import './characters.css'
import {useCharacters} from"../../Api/useData";
import PagePagination from '../Pagination/pagination';
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
            <NavLink className="nav-link" activeClassName="active" to="/locations">Locations</NavLink>
          </li>
        </ul>
      </nav>
    );
}

const Card = (detail) => {
    let character = detail.detail;
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };
    if (character.type === '') {
        character.type = "NULL"
    }

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


    return (
        <div key={character.id} className="card" onClick={toggleModal}>
            <img src={character.image} alt="characters img" ></img>
            <h3> {character.name} </h3>
            <p> {character.species} </p>
            {modal && (
                <div>
                    <div className="overlay"></div>
                    <div className="modal-content">
                        <button className="close-modal" onClick={toggleModal}>
                            CLOSE
                        </button>
                        <table>
                            <tbody>
                                <tr>
                                    <td><img src={character.image} alt="pic of the char" className="modalimg"></img><br /></td>
                                    <td><h3 ><b>Name: </b>{character.name}</h3><br />
                                        <b>Gender: </b> {character.gender}<br />
                                        <b>Status: </b> {character.status}<br />
                                        <b>Species: </b> {character.species}<br />
                                        <b>Type: </b> {character.type}<br />
                                        <b>Origin: </b> {character.origin.name}<br />
                                        <b>Location: </b> {character.location.name}<br />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
            }
        </div>
    )
}


const Characters = () => {
    const [pageNum, setPageNum] = useState(1);
    const changePage = (page) => {
      setPageNum(page);
    };
  
    const characters = useCharacters(pageNum);
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
  
    if (characters === 'Loading...') {
      return <p></p>;
    }
  
    return (
      <div className="characters">
        <Navbar />
        <div className="card-container">
          {characters.results.map((character) => (
            <Card key={character.id} detail={character} />
          ))}
        </div>
  
        <PagePagination pageNum={characters.info.pages} changePage={changePage} currentPage={pageNum} />
  
        {showScrollToTop && (
          <div className="scroll-to-top" onClick={scrollToTop}>
            <FaArrowCircleUp size={36} />
          </div>
        )}
      </div>
    );
  };

export default Characters