import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import { getUserList } from '../../actions/index';


class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userLists: []
        }
    }

    fetchUserList = async () => {
        const { getUserList } = this.props;
        await getUserList('http://dummy.restapiexample.com/api/v1/employees');
        this.setState({ userLists: this.props.userList });

    }

    componentDidMount() {
        this.fetchUserList();
    }


    render() {
        const { userLists } = this.state;
        return (
            <div className='lists'>
                {userLists && userLists.length === 0 && <Loader
                    type="Rings"
                    color="black"
                    height={100}
                    width={100}

                />}
                <h1>Home</h1>
                {userLists && userLists.map((list) => {
                    return <span key={Math.random()} style={{ marginLeft: '20px' }}>{list.employee_name}</span>
                })}
            </div>
        )
    }

}

// get data which is created by mapDispatchToProps
const mapStateToProps = (state) => {
    return {
        userList: state.payload
    }
};

// called action 
const mapDispatchToProps = dispatch => ({
    getUserList: url => dispatch(getUserList(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
