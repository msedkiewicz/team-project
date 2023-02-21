import { connect } from 'react-redux';

import HotDealsProductBox from './HotDealsProductBox';

const mapStateToProps = state => ({
  hotDealsProductBox: state.hotDealsProductBox,
});

export default connect(mapStateToProps)(HotDealsProductBox);
