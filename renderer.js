const { createElement, createClass } = require('react')
const { render } = require('react-dom')
const { pd } = require('pretty-data')

var JsonApp = createClass({
  getInitialState() {
    return {
      inputJson: '',
      outputJson: '',
    };
  },

  _prettify: function(e) {
    var outputJson = '';
    try {
      outputJson = pd.json(e.target.value)
    } catch (error) {
      outputJson = e.target.value
    }

    this.setState({
      inputJson: e.target.value,
      outputJson: outputJson,
    });
  },

  render: function() {
    const brElem = createElement('br', null, null)
    const inputLabel = createElement('label', {width: '100%'}, 'Type/drag in your ugly json:')
    const inputTextarea = createElement('textarea', {cols: 100, rows: 20, onChange: this._prettify}, null)

    const outputLabel = createElement('label', {width: '100%'}, 'prettied JSON:')
    const outputTextarea = createElement('textarea', {cols: 100, rows: 20, value: this.state.outputJson}, null)
    const root = createElement('div', null,
      inputLabel,
      brElem,
      inputTextarea,
      brElem,
      outputLabel,
      brElem,
      outputTextarea
    )

    return root
  }
});

render(
  createElement(JsonApp),
  document.getElementById('main')
);
