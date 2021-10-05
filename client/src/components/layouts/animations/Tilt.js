import React from 'react';
import VanillaTilt from 'vanilla-tilt';


class Tilt extends React.Component {
    componentDidMount() {
      VanillaTilt.init(this.rootNode, {
        max: 30,
        speed: 400,
        
        "max-glare": 0.9,
      })
    }
    render() {
       return (
        <div
          ref={node => (this.rootNode = node)}
          className="tilt-root"
          >
          <div className="tilt-child">
            <div className="totally-centered" {...this.props} />
          </div>
        </div>
      )
    }
  }

export default Tilt