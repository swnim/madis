import React from 'react'
import './TreeView.css'

class TreeView extends React.Component {
  componentDidMount () {
    const toggler = document.getElementsByClassName("caret");
    
    for (let i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", () => {
        toggler[i].parentElement.querySelector(".nested").classList.toggle("active");
        toggler[i].classList.toggle("caret-down");
      });
    }
  }
  
  render () {
    return (
      <ul id="myUL" className='TreeView root'>
        <li><span className="caret">Beverages</span>
          <ul className="nested">
            <li>Water</li>
            <li>Coffee</li>
            <li><span className="caret">Tea</span>
              <ul className="nested">
                <li>Black Tea</li>
                <li>White Tea</li>
                <li><span className="caret">Green Tea</span>
                  <ul className="nested">
                    <li>Sencha</li>
                    <li>Gyokuro</li>
                    <li>Matcha</li>
                    <li>Pi Lo Chun</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    )
  }
}

export default TreeView
