
import React from "react";
import axios from "axios";
import { useEffect, useState } from 'react'
import { Card, Button, Modal } from "react-bootstrap";
function ProductPostList() {
  //we set the initial state to an empty array: useState([])
  //posts: 1st value, our current state
  //setPosts: 2nd value, is the func that is used to update your state
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);
  const [post, setPost] = useState(0)

  // useEffect(() => {
  //     //Runs on every render
  //   });
  useEffect(() => {
    //Runs only the first render
    axios.get(`https://fbuyexchange.azurewebsites.net/api/productposts/1/19?all=true`)
      .then(res => {
        setPosts(res.data);

      })
      .catch(error => console.log(error));

  }, [])
  const handleMouseOver = () => {

  }
  const changeToPurple = () => {

  }
  const changeToDark = () => {
    setShow(false)
  }

  const showModal = (post) => {
    setShow(true);
    setPost(post);
    console.log(post)


  };
  const handleClose = () => setShow(false);




  return (
    //Choose from no wrapping at all (the browser default) with .flex-nowrap, wrapping with .flex-wrap, or reverse wrapping with .flex-wrap-reverse.
    <div className="d-flex align-content-xs-stretch flex-wrap justify-content-center">
      {posts.map((post) =>
        <Card className="col-xs-12 col-sm-6 col-lg-3" style={{ width: '20rem' }}>
          {/* {
            post.img.src==="" ?
            (<Card.Img variant="top" width="250px" height="350px" src='public/assets/img/default-img.png' />) :
          } */}
          <div className="position-relative">
            <Card.Img onMouseOver={handleMouseOver} variant="top" width="250px" height="350px" src={post.images[0]} />
            {post.images.map((imgsrc) =><Card.Img onMouseOver={handleMouseOver} variant="top" width="250px" height="350px" src={imgsrc.image} />)}

            <div className="d-flex flex-row post-action justify-content-center">
              <div className="p-0" ><Button > Wish</Button></div>
              <div className="p-0"><Button> Detail </Button></div>
              <div className="p-0">

                <Button onClick={() => showModal(post)}>Modal</Button>
              </div>
            </div>
          </div>
          <Card.Body style={{ height: '70px' }}>
            <Card.Title onMouseOver={changeToPurple} onMouseLeave={changeToDark} className="text-center post-title">{post.name.toUpperCase()}</Card.Title>
          </Card.Body>
          <Card.Body>
            <Card.Text className="text-center"><strong> VND {post.price} 000</strong></Card.Text>
          </Card.Body>
        </Card>)



      }
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body id="modal-productpost-body">
          <div className="d-flex bd-highlight example-parent">
            <div className="p-2 flex-fill bd-highlight col-example">
              <img src={post.img} alt="xin chao" width="200px" height="300px"/>
            </div>
            <div className="p-2 flex-fill bd-highlight col-example">
              <h2>{post.name}</h2>
              <h3>VND {post.price} 000</h3>
              <p>{post.description}</p>
            </div>
          </div>
        </Modal.Body>

      </Modal>
    </div>




  )

}
export default ProductPostList;


