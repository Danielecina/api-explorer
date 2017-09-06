const React = require('react');
const PropTypes = require('prop-types');

function Oauth2({ apiKey, oauthUrl, change }) {
  if (!apiKey && oauthUrl) {
    return (
      <section>
        <div className="text-center">
          <a className="btn btn-primary" href={oauthUrl} target="_self">Authenticate via OAuth2</a>
        </div>
      </section>
    );
  }

  return (
    <section>
      {
      // TODO
      //   if security.description
      //     != marked(security.description)
      }
      <div className="row">
        <div className="col-xs-4">
          <label htmlFor="apiKey">Authorization</label>
        </div>
        <div className="col-xs-2">
          <div style={{ display: 'inline-block', marginRight: '10px', marginTop: '5px', fontSize: '13px' }}>Bearer</div>
        </div>
        <div className="col-xs-6">
          <input type="text" onChange={e => change(e.currentTarget.value)} name="apiKey" />
        </div>
      </div>
    </section>
  );
}

Oauth2.propTypes = {
  apiKey: PropTypes.string,
  oauthUrl: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

Oauth2.defaultProps = {
  apiKey: '',
};

function SecurityInput(props) {
  function change(value) {
    return props.onChange({ auth: { [props.scheme._key]: value } });
  }
  switch (props.scheme.type) {
    case 'oauth2':
      return Oauth2(Object.assign({}, props, { change }));
    default: return <span />;
  }
}

SecurityInput.propTypes = {
  scheme: PropTypes.shape({
    type: PropTypes.string.isRequired,
    _key: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

module.exports = SecurityInput;