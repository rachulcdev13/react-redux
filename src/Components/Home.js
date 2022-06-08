import React from 'react'
import { Button, Col, Row } from 'react-bootstrap' 

const Home = () => {
    return (
        <> 
            <div>
                {/* <h6>Home Components</h6> */}<br />
                <Row>
                    <Col>
                        <div className="card" style={{ width: "280px" }} >
                            <input type='image' img src={`./iphone-12.png`} alt="image" style={{ width: "230px", height: "260px", marginTop: "-30px", textAlign: "center" }} />
                            <div className="card-body">
                                <h6 className="card-title" >Apple iPhone 12 (128GB) - Blue</h6>
                                <p><span style={{ fontWeight: "bold", color: "red" }}>₹59,900 </span>  <sub><del>₹69,900</del></sub> (14% off)</p>
                                <p style={{ fontSize: "10px" }}><span style={{ color: "red", fontWeight: "bold" }}>Exchange Offer:</span> Up to ₹10,500.00 off on Exchange</p>
                                <Button variant="warning">Add to Cart</Button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card" style={{ width: "280px" }} >
                            <input type='image' img src={`./iphone-12.png`} alt="image" style={{ width: "230px", height: "260px", marginTop: "-30px", textAlign: "center" }} />
                            <div className="card-body">
                                <h6 className="card-title" >Apple iPhone 12 (128GB) - Blue</h6>
                                <p><span style={{ fontWeight: "bold", color: "red" }}>₹59,900 </span>  <sub><del>₹69,900</del></sub> (14% off)</p>
                                <p style={{ fontSize: "10px" }}><span style={{ color: "red", fontWeight: "bold" }}>Exchange Offer:</span> Up to ₹10,500.00 off on Exchange</p>
                                <Button variant="warning">Add to Cart</Button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card" style={{ width: "280px" }} >
                            <input type='image' img src={`./iphone-12.png`} alt="image" style={{ width: "230px", height: "260px", marginTop: "-30px", textAlign: "center" }} />
                            <div className="card-body">
                                <h6 className="card-title" >Apple iPhone 12 (128GB) - Blue</h6>
                                <p><span style={{ fontWeight: "bold", color: "red" }}>₹59,900 </span>  <sub><del>₹69,900</del></sub> (14% off)</p>
                                <p style={{ fontSize: "10px" }}><span style={{ color: "red", fontWeight: "bold" }}>Exchange Offer:</span> Up to ₹10,500.00 off on Exchange</p>
                                <Button variant="warning">Add to Cart</Button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card" style={{ width: "280px" }} >
                            <input type='image' img src={`./iphone-12.png`} alt="image" style={{ width: "230px", height: "260px", marginTop: "-30px", textAlign: "center" }} />
                            <div className="card-body">
                                <h6 className="card-title" >Apple iPhone 12 (128GB) - Blue</h6>
                                <p><span style={{ fontWeight: "bold", color: "red" }}>₹59,900 </span>  <sub><del>₹69,900</del></sub> (14% off)</p>
                                <p style={{ fontSize: "10px" }}><span style={{ color: "red", fontWeight: "bold" }}>Exchange Offer:</span> Up to ₹10,500.00 off on Exchange</p>
                                <Button variant="warning">Add to Cart</Button>
                            </div>
                        </div>
                    </Col>
                </Row> 
            </div>
        </>
    )
}
export default Home
