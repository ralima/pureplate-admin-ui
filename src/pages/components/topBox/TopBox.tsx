import "./topBox.scss"
import {topDealUsers} from "../../../data";

const TopBox = () => {
    return(
        <div className="topBox">
            <h1>Top Deals</h1>
            <div className="list">
                {topDealUsers.map(user =>(
                    <div key={user.id} className="listItem">
                        <div className="user">
                            <img src={user.img} alt="" />
                            <div className="userTexts">
                                <span className="userame">{user.username}</span>
                                <span className="email">{user.email}</span>
                            </div>
                            <span className="amount">${user.amount}</span>

                        </div>

                    </div>
                ) )}
            </div>
        </div>
    )
}
export default TopBox