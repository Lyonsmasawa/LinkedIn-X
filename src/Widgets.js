import { FiberManualRecord, Info } from '@material-ui/icons'
import React from 'react'
import './Widgets.css'

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <Info />
        </div>
        {newsArticle("OnePlus Nord", " OnePlus Nord 2T review: minor improvements to a masterful midranger")}
        {newsArticle("Samsung", " Samsung will charge $500 to put your face on its fridge")}
        {newsArticle("Boeing", " Boeing’s third launch attempt nears for embattled Starliner spacecraft")}
        {newsArticle("MacBook", " Anker says its new USB-C hub lets M1 MacBooks output to three external monitors")}
        {newsArticle("Modular Gadgets", " Framework’s new laptop means the promise of modular gadgets might be coming true")}
    </div>
  )
}

export default Widgets