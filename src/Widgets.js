import { Info } from '@material-ui/icons'
import React from 'react'
import './Widgets.css'

function Widgets() {
  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <Info />
        </div>
    </div>
  )
}

export default Widgets