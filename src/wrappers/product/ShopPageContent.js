import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react'
import { Card, Button, Modal } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import ImageSlider from '../image-slider/ImageSlider';
//dung de show list san pham da duoc filter
const containerStyles = {
    width: "320px",
    height: "350px",
    margin: "20px auto",
};
function ShopPageContent({ posts }) {

    const [show, setShow] = useState(false);
    const [post, setPost] = useState({})
    const [links, setLinks] = useState([])
    const history = useHistory();
    const [keyword, setKeyword] = useState("");
    const [selected, setSelected] = useState(0);
    //default la ko sort gia tien
    const [val1, setVal1] = useState(0);
    const [val2, setval2] = useState(0);
    //search by name

    //search theo list cateID

    //tang  giam gia tien san pham

    //phần hình ảnh bài đăng sản phẩm 
    const handleMouseOver = () => {
        //thực hiện phóng to hình ảnh
    }
    const changeToPurple = () => {

    }
    const changeToDark = () => {
    }
    //NÚT WISH

    //NÚT DETAIL


    //NÚT MODAL
    const showModal = (post) => {
        setPost(post);
        setLinks([]);
        console.log(links)
        { post.images && post.images.map((imgsrc) => setLinks(links => [...links, { 'url': imgsrc.image }])) }
        setShow(true);
        console.log(post);
        console.log(links);

    };

    const handleClose = () => setShow(false);
    const changeHandler = (e) => {
        console.log('input : ' + e.target.value);
        setKeyword(e.target.value)
    }
    const selectHandler = (e) => {
        console.log('selected: ' + e.target.value);
        if(e.target.value==="priceHighToLow"){
            setVal1(1);
            setval2(-1)
        }else if (e.target.value==="priceLowToHigh"){
            setVal1(-1);
            setval2(1)
        }
        
    }
    useEffect(() => {

    }, [keyword, selected])
    return (
        <div>
            <div className='shop-top-navbar'>
                <div className="shop-top-bar mb-35">
                    <div className="select-shoing-wrap">
                        <div className="shop-select">
                            <select onChange={selectHandler}>
                                <option value="default">Default</option>
                                <option value="priceHighToLow">Price - High to Low</option>
                                <option value="priceLowToHigh">Price - Low to High</option>
                            </select>
                        </div>
                    </div>

                    <div className="shop-tab">
                        {/* <button

                        >
                            <i className="fa fa-th-large" />
                        </button>
                        <button

                        >
                            <i className="fa fa-th" />
                        </button>
                        <button

                        >
                            <i className="fa fa-list-ul" />
                        </button> */}
                        <div>

                            <input type="text" id="searchValue" onChange={changeHandler} value={keyword || ""} placeholder="Search here..." />

                        </div>
                    </div>
                </div>
            </div>
            {/* HIỆN SẢN PHẨM ĐÃ ĐƯỢC FILTER TẠI ĐÂY */}
            <div className='d-flex align-content-xs-stretch flex-wrap'>
                
                {/* {posts && posts.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase())).map((post) =>
                    <Card className="col-xs-12 col-sm-6 col-lg-4" style={{ width: '20rem' }}>
                        <div className="position-relative">
                            {post.images.length > 1 ? (
                                <Card.Img onMouseOver={handleMouseOver} variant="top" width="200px" height="350px" src={post.images[0].image} />
                            ) : (
                                <Card.Img variant="top" width="250px" height="350px" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBg8SBw4NDQ0NEA0QDw4PEBAPDQ4NFhEWFxUSExMYKCggGBolGxUTITEhJSkrLi4uFx8zODMsNyg5LisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKcBLwMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABAECAwcF/8QAMRABAAEDAQUFBwQDAAAAAAAAAAECAxEEEiExUXETFGGBkSIyNEFCkrEjoaLRUnLB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APs4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5uVbFEzxwknWTPu0x+8gtEO3dr4RMeWG9hcr9+fWcgrm5FPGYjzh51amiPnno8o0X+VXpD0p0lMccz5g4q1sfTEz1xDjvkzMYiIjPVVFmmnhTH5Ta6nGzMeMAsHNudq3E84h0AAAAAAAAAAAAAAAAAAAAAAAAAAAADK42qJjnEpNBO+qOkrEWn9jVzH+0A9tVem1jYxvzxeHea+Ueku9f9Pm29em1bo2PnAPPvVfKPSTvVfKPSXdFd2unNMRj8vOdVXE78egN71Xyj0lxdvVXacVR47olve6/D0b3uvw9AKNRVRTEREbvCXpZ1NVy7EVRG9ljU1V3YirGJ8HNv46etQLgAAAAAAAAAAAAAAAAAAAAAAAAAAAEV32NbE85iVqPXRiuJjkDdf9Pm51fuUdP6brZzFHjE/8c6v3KOgPSzqqabURVmJjdw4pLlW3XM85Kbc1R7MTOGU0zXVinfMg23RNyrFKu5pI7P2Pej93tYsxZo3cZ4y9AfnaWMaiPP8ADu38dPWpTNn9aKqd3HPjuTWvjp61AuAAAAAAAAAAAAAAAAAAAAAAAAAAAATa6P04nlKlxdt9pRidwIbtcVW6McYicq5sxdina4RHDmmv6fs8bGas5y2L1yI3RP2gtiNmMU7oZFERVmIjM/NH29zlP2ydvc5T9sguEPb3OU/bJ3i5y/jILkNr42etR3i5y/jLNPEzqc1RMZzPCQXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3BsyAGDAAYMABhmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q==" />
                            )}
                            <div className="d-flex flex-row post-action justify-content-center">
                                <div className="p-0" ><Button > Wish</Button></div>
                                <div className="p-0">
                                    <Button onClick={() => history.push("/productpost/" + post.id)}> Detail </Button>
                                </div>
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
                    </Card>
                )
                } */}
                {posts && posts.sort((a, b) => a.price < b.price ? val1 : val2).map((post, index) => 
                <Card key={index} className="col-xs-12 col-sm-6 col-lg-4" style={{ width: '20rem' }}>
                    <div className="position-relative">
                        {post.images.length > 1 ? (
                            <Card.Img onMouseOver={handleMouseOver} variant="top" width="200px" height="350px" src={post.images[0].image} />
                        ) : (
                            <Card.Img variant="top" width="250px" height="350px" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBg8SBw4NDQ0NEA0QDw4PEBAPDQ4NFhEWFxUSExMYKCggGBolGxUTITEhJSkrLi4uFx8zODMsNyg5LisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKcBLwMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABAECAwcF/8QAMRABAAEDAQUFBwQDAAAAAAAAAAECAxEEEiExUXETFGGBkSIyNEFCkrEjoaLRUnLB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APs4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5uVbFEzxwknWTPu0x+8gtEO3dr4RMeWG9hcr9+fWcgrm5FPGYjzh51amiPnno8o0X+VXpD0p0lMccz5g4q1sfTEz1xDjvkzMYiIjPVVFmmnhTH5Ta6nGzMeMAsHNudq3E84h0AAAAAAAAAAAAAAAAAAAAAAAAAAAADK42qJjnEpNBO+qOkrEWn9jVzH+0A9tVem1jYxvzxeHea+Ueku9f9Pm29em1bo2PnAPPvVfKPSTvVfKPSXdFd2unNMRj8vOdVXE78egN71Xyj0lxdvVXacVR47olve6/D0b3uvw9AKNRVRTEREbvCXpZ1NVy7EVRG9ljU1V3YirGJ8HNv46etQLgAAAAAAAAAAAAAAAAAAAAAAAAAAAEV32NbE85iVqPXRiuJjkDdf9Pm51fuUdP6brZzFHjE/8c6v3KOgPSzqqabURVmJjdw4pLlW3XM85Kbc1R7MTOGU0zXVinfMg23RNyrFKu5pI7P2Pej93tYsxZo3cZ4y9AfnaWMaiPP8ADu38dPWpTNn9aKqd3HPjuTWvjp61AuAAAAAAAAAAAAAAAAAAAAAAAAAAAATa6P04nlKlxdt9pRidwIbtcVW6McYicq5sxdina4RHDmmv6fs8bGas5y2L1yI3RP2gtiNmMU7oZFERVmIjM/NH29zlP2ydvc5T9sguEPb3OU/bJ3i5y/jILkNr42etR3i5y/jLNPEzqc1RMZzPCQXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3BsyAGDAAYMABhmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q==" />
                        )}
                        <div className="d-flex flex-row post-action justify-content-center">
                            <div className="p-0" ><Button > Wish</Button></div>
                            <div className="p-0">
                                <Button onClick={() => history.push("/productpost/" + post.id)}> Detail </Button>
                            </div>
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
                </Card>)}


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
                            {/* <div className="p-2 flex-fill bd-highlight col-example">
                            {post.images && post.images.map((imgsrc) => <img width="250px" height="350px" src={imgsrc.image} />)}

                        </div> */}
                            <div style={containerStyles}>
                                {links !== null && <ImageSlider slides={links} />}
                            </div>
                            <div className="p-2 flex-fill bd-highlight col-example">

                                <h2>{post.id}:{post.name}</h2>
                                <h3>VND {post.price}000</h3>
                                <p>{post.description}</p>
                            </div>
                        </div>
                    </Modal.Body>

                </Modal>
            </div>
        </div>


    )
}

export default ShopPageContent