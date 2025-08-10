import '../src/styles/MenuBar.css';

function MenuBar({style}) {
  return (
    <>
        <div className='menuBar' style={style}>
            <span className='home' >
            <img src="../src/accets/icons/home.png" alt="home" />Home
            </span>
            <hr />
            <span className='category'>
                <img src="../src/accets/icons/category.png" alt="home" />Categorie's
            </span>
            <span>
            <img src="../src/accets/icons/room.png" alt="home" />Single Rooms
            </span>
            <span>
            <img src="../src/accets/icons/Droom.png" alt="home" />Double Rooms
            </span>
            <span>
                <img src="../src/accets/icons/1bhk.png" alt="home" />1BHK
            </span>
            <span>
                <img src="../src/accets/icons/hotel.png" alt="home" />Hotels
            </span>
            <span>
                <img src="../src/accets/icons/like.png" alt="home" />Like Rooms
            </span>
            <hr />
            <span>
            <img src="../src/accets/icons/settings.png" alt="home" />Settings
            </span>
            <span>
                <img src="../src/accets/icons/logout.png" alt="home" />Log Out
            </span>
            
        </div>
    </>
  )
}

export default MenuBar;