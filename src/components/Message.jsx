
function Message({isLoggedIn}) {
    
    return (
        <h1>{isLoggedIn ? "Welcome":"Please login"}</h1>
    );

}
export default Message;