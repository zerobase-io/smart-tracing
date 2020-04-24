import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="container" style={{padding: 0}}>
          <iframe className="airtable-embed airtable-dynamic-height"
                  src="https://airtable.com/embed/shrnYjRudkIBlXzr9?backgroundColor=yellow"
                  frameBorder="0" onmousewheel="" width="100%" height="1149"
                  style={{background: 'transparent',
                    border: '1px solid #ccc'
                  }}>
          </iframe>
        </div>
      </div>
    )
  }
}

export default Contact;
