import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchMovies } from '../redux/actions/home'
import { Home } from '../components/Home'

const mapStateToProps = state => ({
  movies: state.home.movies
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovies
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
