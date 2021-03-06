import React from 'react'
import { Grid, List } from 'antd-mobile'
// used this lib to limit the types of parameters of a function
import PropTypes from 'prop-types'

// Component AvatarSelector that handles the logic to select a avatar.

class AvatarSelector extends React.Component {
    static propTypes = {
        // selectAvatar can only accept function, not anything else
        selectAvatar: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.state={}
    }

    render() {
        // list of names of images
        const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
                            .split(',')
                            .map(v=>({
                                icon:require(`../img/${v}.png`),
                                text:v
                            }))
                            
        // Display the avatar if selected, display the info if not.
        const gridHeader = this.state.icon
                            ? (<div>
                                <span>You have selected: </span>
                                <img  style={{width:20}} src={this.state.icon} alt=""/>
                                </div>)
                            : <div>Please select your avatar</div>
        return (
            <div>
                <List renderHeader={()=>gridHeader}>
                    <Grid 
                    data={avatarList} 
                    columnNum={5} 
                    onClick={elm=>{
                        this.setState(elm)
                        this.props.selectAvatar(elm.text)
                    }} />
                </List>
            </div>
        )
    }
}

export default AvatarSelector