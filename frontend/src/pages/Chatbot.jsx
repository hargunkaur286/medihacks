import React, {useState} from 'react'

const Chatbot = () => {
    const [error, setError] = useState("")
  return (
    <section className='margin-0 padding-0 width-100vw'>
        <p>What Do you want to know?
            <button className="surprise">Surprise Me!</button>
        </p>
        <div className="input-container">
            <input
                value={""}
                placeholder="Suggest some nutricious food during pregnancy?"
                onChange={""}
            />
            {!error && <button>Ask Me</button>}
            {error && <button>Clear</button>}
        </div>
        {error && <p>{error}</p> }
        <div className="search-results">
            <div key={""}>
                <p className="answer">

                </p>
            </div>
        </div>
    </section>
  )
}

export default Chatbot
