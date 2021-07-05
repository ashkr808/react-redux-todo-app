import React from 'react'
import mountain from './mountain.jpg'

function Header() {
    const day = ['Monday','Tuesday','Webnesday','Thursday','Friday','Saturday','Sunday'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
    const date = new Date();
    const todayDate = date.getDate();
    return (
        <div className="header" style={{backgroundImage: `url('${mountain}')`}}>
            <div className="overlay">
                <div className="day-info">
                    <h1>{day[date.getDay()-1]} {todayDate}{(todayDate === 1 ? 'st' : (todayDate === 2) ? 'nd' : (todayDate === 3) ? 'rd' : 'th')}</h1>
                    <h3>{monthNames[date.getMonth()]}</h3>
                </div>
            </div>
        </div>
    )
}

export default Header;
