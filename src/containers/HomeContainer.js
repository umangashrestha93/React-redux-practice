import {connect} from 'react-redux'
import Home from '../components/Home'
import { addToCart } from '../services/Actions/actions'

const mapStateToProps = state =>({
    cartData: state
})

const mapDispatchToProps = dispatch=>({
    addToCartHandler: data=>dispatch(addToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home
