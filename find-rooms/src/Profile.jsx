import "../src/styles/Profile.css";

function Profile({style}) {
    return (
        <>
            <div className="showProfile" style={style}>
                <div className="profileImg">
                    <img
                        src="./src/accets/icons/icons8-google-48.png"
                        alt="img"
                        className="profilePic"
                    />
                    <p className="profileName">Sam</p>
                    <p className="profileEmail">samyakpopulwad@gmail.com</p>
                </div>

                <div className="profileInfo">
                    <h5>User Data</h5>
                    <p>Name: <span>Samyak populwad</span></p>
                    <p>User ID:<span>Samak@786</span></p>
                    <p>User Type:<span>Administrator</span></p>
                </div>
                <hr></hr>
                <div className="forOwner">
                    <button className="mangeRoomBtn">Mange Your Rooms</button>
                    <button className="addRoomBtn">Add New Rooms</button>
                </div>
            </div>
        </>
    );
}

export default Profile;
