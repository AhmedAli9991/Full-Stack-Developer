import "../assets/styles.css"

function Login() {
  return (
        <div className="sideText">
            <p className="textParagraph">Sign In</p>
            <form>
                <div className="fliedParent">
                    <label className="textInSideDate">First Name</label>
                    <input type="text" className="fieldLogin"/>
                </div>
                <div className="fliedParent">
                    <label className="textInSideDate">Last Name</label>
                    <input type="text" className="fieldLogin"/>
                </div>
                <div>
                <input type="checkbox" /> <label className="textInSideDate">Remember me</label>

                </div>
                <div >
                <button className="button"><p className="buttonText">Submit</p></button> 
                </div>
            </form>
        </div>
  );
}

export default Login;
