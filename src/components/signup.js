import "../assets/styles.css"

function SignUp(props) {
    function handleSubmit(e){
        e.preventDefault();   
             props.settrue()
    }
  return (
        <div className="sideText">
            <p className="textParagraph">Join The Event.</p>
            <form onSubmit={handleSubmit}>
                <div className="fieldSigupParent">
                <div className="fliedParent">
                    <label className="textInSideDate">First Name</label>
                    <input type="text" className="fieldSignUp"/>
                </div>
                <div className="fliedParent">
                    <label className="textInSideDate">Last Name</label>
                    <input type="text" className="fieldSignUp"/>
                </div>
                </div>


                <div className="fieldSigupParent">
                <div className="fliedParent">
                    <label className="textInSideDate">Bussiness Email</label>
                    <input type="text" className="fieldSignUp"/>
                </div>
                <div className="fliedParent">
                    <label className="textInSideDate">Title</label>
                    <input type="text" className="fieldSignUp"/>
                </div>
                </div>


                <div className="fieldSigupParent">
                <div className="fliedParent">
                    <label className="textInSideDate">Comapny Name</label>
                    <input type="text" className="fieldSignUp"/>
                </div>
                <div className="fliedParent">
                    <label className="textInSideDate">Company Size</label>
                    <select  type="select" className="fieldSignUp"/>
                </div>
                </div>

                <div>
                <div className="fliedParent">
                    <label className="textInSideDate">What are you hoping to learn about?</label>
                    <textarea className="textArea" rows="10" cols="30">
                    </textarea> 
                </div>
                
              
                </div>
                <div  >
                <button className="button" type="submit"><p className="buttonText">Register for this event</p></button> 
                </div>
            </form>
        </div>
  );
}

export default SignUp;
