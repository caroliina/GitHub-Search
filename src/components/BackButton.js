import React from 'react'

class BackButton extends React.Component {
  static contextTypes = {
    router: () => true
  }

  render() {
    return (<button className='button back' onClick={this.context.router.history.goBack}>
      Back
    </button>)
  }
}

export default BackButton
