import React, { createElement } from 'react'
import FilBlank from './FilBlank'
import MultiChoice from './MultiChoice'

const QUESTION = {
  1: MultiChoice,
  2: FilBlank
}
export default function Axios({ questions }) {
  console.log(questions)
  return (
    <>
      <div className='text-center display-4 mb-3'>Axios</div>
    {
      questions.map(ques=>{
        return <div key={ques.id}>{ques.content}</div>
      })
    }
      {/* <div className='container'>
          {
            questions.map((ques, quesIdx) => {
              const { content, questionType, id, answers } = ques
  
              return (
                <div key={id}>
                  <h6 className='mt-3'>Câu {+quesIdx + 1}: {content}</h6>
                  {
                    createElement(QUESTION[questionType], { id, answers })
                  }
                </div>
              )
            })
          }
          <div className='d-flex mt-3'>
            <button className='btn btn-warning me-2'>Làm lại</button>
            <button className='btn btn-success me-2'>Nộp bài</button>
            <div className='mt-2'>Bạn trả lời đúng 0/{questions.length}</div>
          </div>
        </div> */}
    </>
  )
}
