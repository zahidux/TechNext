// // // /////////////////////////////////////////////////////////////////////////////////////////////// [1]
// // // One data insert client site to server to database || Data create then send database

// // // create input field (must use email field) - use handelSubmit client site --

// // // client site data send --
// // // fetch("http://localhost:5000/booking", {
// // //       method: "POST",
// // //       headers: {
// // //         "content-type": "application/json",
// // //       },
// // //       body: JSON.stringify(order),
// // //     })
// // //       .then((res) => res.json())
// // //       .then((data) => {
// // //         console.log(data);
// // //         Swal.fire("Booking Successfully");
// // //         from.reset();
// // //       });

// // // Server site --
// // // const bookingCollection = client.db("carService").collection("bookings");

// // // app.post("/booking", async (req, res) => {
// // //       const booking = req.body;
// // //       console.log(booking);
// // // (first para for show data on console)
// // //       const result = await bookingCollection.insertOne(booking);
// // //       res.send(result);
// // //     });

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////// [2]
// // // Read data from database that I post

// // // Server site --
// // // app.get("/booking", async (req, res) => {
// // //   console.log(req.query.email);
// // //   let query = {};
// // //   if (req.query?.email) {
// // //     query = { email: req.query.email };
// // //   }
// // //   const result = await bookingCollection.find(query).toArray();
// // //   res.send(result);
// // // });

// the code update but not working
// app.get("/myProducts", async (req, res) => {
//     const decoded = req.decoded;
//     console.log("come back after varify");

//     if (decoded.email !== req.query.email) {
//       return res.status(403).send({ error: 1, message: "forbidden access" });
//     }

//     let query = {};
//     if (req.query?.email) {
//       query = { email: req.query.email };
//     }
//     const result = await myCollection.find(query).toArray();
//     res.send(result);
//   });

//   not work end here

// // // Client site --
// // // const { user } = useContext(AuthContext);
// // //   const [bookings, setBookings] = useState([]);
// // //   const url = `http://localhost:5000/booking?email=${user.email}`;

// // //   useEffect(() => {
// // //     fetch(url)
// // //       .then((res) => res.json())
// // //       .then((data) => {
// // //         setBookings(data);
// // //       });
// // //   }, [url]);

// // //////////////////////////////////////////////////////////////////////////////////////////////////////// [3]
// // //(All data get data from database )

// // // Server site --
// // // app.get("/services", async (req, res) => {
// // //     const cursor = serviceCollection.find();
// // //     const result = await cursor.toArray();
// // //     res.send(result);
// // //   });

// // // client site --
// // // const [services, setServices] = useState([]);
// // // useEffect(() => {
// // //   fetch("http://localhost:5000/services")
// // //     .then((res) => res.json())
// // //     .then((data) => setServices(data));
// // // }, []);

// // // ////////////////////////////////////////////////////////////////////////////////////////////////////// [4]
// // Single data get from database with Button

// // // client site in a section --
// // // {
// // //   /* <Link to={`/checkout/${_id}`}>
// // //             <FaRegArrowAltCircleRight />
// // //           </Link> */
// // // }

// // //  client site --
// // //   {
// // //     path: "/checkout/:id",
// // //     element: <Checkout />,
// // //     loader: ({ params }) =>
// // //       fetch(`http://localhost:5000/services/${params.id}`),
// // //   },

// // // server site --
// // // single data details load from database to client site

// // //   app.get("/services/:id", async (req, res) => {
// // //     const id = req.params.id;
// // //     console.log(id);
// // //     const query = { _id: new ObjectId(id) };
// // //     const options = {
// // //       // Include only the `title` and `imdb` fields in the returned document
// // //       projection: { title: 1, price: 1, service_id: 1 },
// // //     };
// // //     const result = await serviceCollection.findOne(query, options);
// // //     res.send(result);
// // //   });

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// [5]
// // // Delete one data

// // //server site --
// // //  app.delete("/booking/:id", async (req, res) => {
// // //     const id = req.params.id;
// // //     const query = { _id: new ObjectId(id) };
// // //     const result = await bookingCollection.deleteOne(query);
// // //     res.send(result);
// // //   });

// // // client site --
// // const handelDelete = (id) => {
// //     const url = `http://localhost:5000/newProducts/${id}`;
// //     Swal.fire({
// //       title: "Are you sure?",
// //       icon: "warning",
// //       showCancelButton: true,
// //       confirmButtonColor: "#3085d6",
// //       cancelButtonColor: "#d33",
// //       confirmButtonText: "Yes, delete it!",
// //     }).then((result) => {
// //       if (result.isConfirmed) {
// //         fetch(url, {
// //           method: "DELETE",
// //         })
// //           .then((res) => res.json())
// //           .then((data) => {
// //             if (data.deletedCount > 0) {
// //               Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
// //               const remaining = items.filter((item) => item._id !== id);
// //               setItems(remaining);
// //             }
// //           });
// //       }
// //     });
// //   };

// // // <button
// // //             onClick={() => handelDelete(_id)}
// // //             className="bg-red-600 text-white"
// // //           >
// // //             Delete
// // //           </button>

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// [Last]

// // // update one item ///////////// put hotche na thakle add kore diba ar patch update kore diba

// // Client site

// <Link to={`/editProducts/${_id}`}>
//             <button className="h-10 w-10 shadow-lg hover:shadow-blue duration-300">
//               <FaPen />
//             </button>
//           </Link>

//           //client site

//           {
//             path: "/editProducts/:id",
//             element: <EditProducts />,
//             loader: ({ params }) =>
//               fetch(`http://localhost:5000/myProducts/${params.id}`),
//           },

//           //client site

//           const EditProducts = () => {
//             const product = useLoaderData();

//             console.log(product);

//             const { user } = useContext(AuthContext);
//             const { _id, title, description, price, category, image, quantity, email } =
//               product;

//             //from submit
//             const handleSubmit = (e) => {
//               e.preventDefault();
//               const from = e.target;
//               const title = from.title.value;
//               const description = from.description.value;
//               const category = from.category.value;
//               const price = from.price.value;
//               const image = from.image.value;
//               const email = from.email.value;

//               if (isNaN(price)) {
//                 return Swal.fire("Price should be number");
//               }

//               if  (parseFloat(quantity)) {
//                 return Swal.fire("Quantity should be number");
//               }

//               const update = { title, description, category, price, image, email };

//               fetch(`http://localhost:5000/newProducts/${_id}`, {
//                 method: "PATCH",
//                 headers: {
//                   "content-type": "application/json",
//                 },
//                 body: JSON.stringify(update),
//               })
//                 .then((res) => res.json())
//                 .then((data) => {
//                   console.log(data);
//                   if (data.modifiedCount > 0) {
//                     Swal.Fire("Product Update Success!");
//                   }
//                 });
//             };

//             // also - defaultValue={} use on input field

// //server site

// //update my products

// app.get("/myProducts/:id", async (req, res) => {
//     const id = req.params.id;
//     const query = { _id: new ObjectId(id) };
//     const result = await myCollection.findOne(query);
//     res.send(result);
//   });

//   app.put("/myProducts/:id", async (req, res) => {
//     const id = req.params.id;
//     const filter = { _id: new ObjectId(id) };
//     const updatedProduct = req.body;
//     const updateDoc = {
//       $set: {
//         title: updatedProduct.title,
//         img: updatedProduct.img,
//         price: updatedProduct.price,
//         quantity: updatedProduct.quantity,
//         des: updatedProduct.des,
//         email: updatedProduct.email,
//       },
//     };

//     const result = await myCollection.updateOne(filter, updateDoc);
//     res.send(result);
//   });
