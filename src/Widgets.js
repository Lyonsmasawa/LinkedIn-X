import { Info } from '@material-ui/icons'
import React from 'react'
import './Widgets.css'

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">

            </div>
            <div className="widgets__articleRight">
                
            </div>
        </div>
    )

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