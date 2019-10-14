// Code SimpleComponent Here
const state = "Happy"

class TextField extends Component {
  render() {
    return (
      <input
        className="field field-light"
        onChange={this.props.onChange}
        defaultstate={this.props.default || defaultstate}
      />
    );
  }
}
