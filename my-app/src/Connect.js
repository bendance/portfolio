const sendEmail = (content) => 
{

}

const Connect = (props) =>
{
    return(
        <div id="connect">
            <h2>Connect</h2>
            <form onSubmit={sendEmail}>
                <textarea rows="10">

                </textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Connect;