import React from 'react'

export default function About(props) {
  

  return (
    <div className="container " style={{backgroundColor:props.mode==='light'?'white':'#3A3B3C',color:props.mode==='light'?'#3A3B3C':'white'}}>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={{backgroundColor:props.mode==='light'?'white':'#3A3B3C',color:props.mode==='light'?'#3A3B3C':'white'}} >
    <h2 className="accordion-header">
      <button className="accordion-button" style={{backgroundColor:props.mode==='light'?'white':'#3A3B3C',color:props.mode==='light'?'#3A3B3C':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        TextUtils helps you to analyze and edit your text for free.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor:props.mode==='light'?'white':'#3A3B3C',color:props.mode==='light'?'#3A3B3C':'white'}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='light'?'white':'#3A3B3C',color:props.mode==='light'?'#3A3B3C':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       Completely free to use
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor:props.mode==='light'?'white':'#3A3B3C',color:props.mode==='light'?'#3A3B3C':'white'}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='light'?'white':'#3A3B3C',color:props.mode==='light'?'#3A3B3C':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Works smoothly in any web browser.
      </div>
    </div>

  </div>
</div>
    </div>
  )
}
