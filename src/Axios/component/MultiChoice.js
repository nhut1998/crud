import React from 'react'

export default function MultiChoice({ id, answers }) {
    return answers.map(ans => (
      <div class='form-check'>
        <label class='form-check-label'>
          <input type='radio' class='form-check-input' name={'ans-' + id} />
          {ans.content}
        </label>
      </div>
    ))
  }
  