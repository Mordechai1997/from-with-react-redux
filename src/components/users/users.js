import { connect } from "react-redux";
import './users.css'

function Users(props) {
    return (

        <div className="all-users">
            {props.list && props.list.map((task, index) =>
                <div className="user">
                    <p key={index} ><b>User name: </b>{task.user}</p>
                    <p key={index + 1} ><b>Phone Number: </b>{task.phone}</p>
                </div>

            )}
        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}
export default connect(mapStateToProps, null)(Users);
//alt shift f