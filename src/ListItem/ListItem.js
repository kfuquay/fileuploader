import React from 'react'
import './ListItem.css'
import ControlBar from '../ControlBar/ControlBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faFileImage,
  faFileAudio,
  faFileAlt,
  faFileVideo
 } from '@fortawesome/free-solid-svg-icons'

class ListItem extends React.Component {
    render() {
        const icons = {
            "jpg": faFileImage,
            "mov": faFileVideo,
            "txt": faFileAlt,
            "mp3": faFileVideo
        }

        return(
            <div className="ListItem">
                <div className="ListItem-icon">
                    <div className="ListItem-circle">
                        <FontAwesomeIcon icon={icons[this.props.fileType] || faFileAlt }/>
                    </div>
                </div>
                <div className="ListItem-content">
                    <div className="ListItem-heading">
                        <div className="ListItem-title">{this.props.name}</div>
                        <div className="ListItem-size">{this.props.size}</div>
                    </div>
                    <div className="ListItem-actions">
                        <div className="ListItem-status">{this.props.status}</div>
                        <ControlBar />
                    </div>
                </div>
            </div>
        )
    }
}

export default ListItem