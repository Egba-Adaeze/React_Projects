import React from 'react'
const poem = {
    lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.'
    ]
  };

export default function () {
  return (
<div>
  <h3>A Poem haiku by Katsushika Hokusai</h3>
<article>
  <p>I write, erase, rewrite</p>
  <hr />
  <p>Erase again, and then</p>
  <hr />
  <p>A poppy blooms.</p>
</article>   
</div>
  )
}
