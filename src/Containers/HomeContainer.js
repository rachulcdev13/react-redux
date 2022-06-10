import {connect} from "react-redux";
import Home from "../Components/Home";
import {addToCart} from "../Services/Actions/Action";

const mapStateToProps=state=>({

}) 
const mapDispatchToprops=dispatch=>({
    addToCartHandler:data=>(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToprops)(Home)
// export default Home;