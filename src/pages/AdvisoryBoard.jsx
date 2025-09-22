import React from 'react'
import AdvisoryBoardHero from '../components/Advisory_board/hero'
import BoardMembers from '../components/Advisory_board/BoardMembers'
import Mission from '../components/Advisory_board/Mission'
import './AdvisoryBoard.css'

function AdvisoryBoard() {
  return (
    <div className="advisory-board-page">
      <AdvisoryBoardHero />
      <Mission />
      <BoardMembers />
    </div>
  )
}

export default AdvisoryBoard
