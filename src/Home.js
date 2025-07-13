import "./Style.css";
import About from "./About";
import Blog from "./Blog";
import Coffee from "./Coffee";
import Review from "./Review";
import Sales from "./Sales";

function Home() {

  // DISPLAY DATA
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // NORMAL FETCH METHOD
  // useEffect(() => {
  //   fetch("http://localhost:3000/posts")
  //     .then(res => res.json())
  //     .then(data => {
  //       const filteredData = data.filter(el => el.id <= 9);
  //       setData(filteredData);
  //       setLoading(false);
  //       console.log(filteredData);
  //     })
  //     .catch(err => {
  //       setError(err.message);
  //       setLoading(false);
  //     });
  // },[]);

  // USING AXIOS METHOD
  // const fetchedData = async () => {
  //   try{
  //     const response = await axios.get("http://localhost:3000/posts");
  //     const filteredData = response.data.filter( el => el.id <= 9 );
  //     setData(filteredData);
  //     setLoading(false);
  //     console.log(filteredData)
  //   }
  //   catch (err) {
  //     setError(err.message);
  //     setLoading(false);
  //   }
  // }
  // useEffect(()=>{
  //   fetchedData();
  // },[])
  // if (loading) return <div>Loading....</div>;
  // if (error) return <div>Error{error}</div>;

  // EASY & SHORT METHOD USING IIFE FUNCTION
  // (async () => {
  //   try {
  //     const { data } = await axios.get("http://localhost:3000/posts");
  //     const filteredData = data.filter(el=>el.id<=6)
  //     setData(filteredData);
  //     setLoading(false);
  //   } catch (err) {
  //     setLoading(false);
  //     setError(err.message);
  //   }
  // })();

  //   ASYNC FUNCTION API CALL METHOD

  //   const fetchedData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/posts"
  //       );
  //       const data = await response.json();
  //       const filteredData = data.filter((el) => el.id <= 4);
  //       setData(filteredData);
  //       setLoading(false);
  //     } catch (err) {
  //       setError(err.message);
  //     }
  //   };
  //   useEffect(() => {
  //     fetchedData();
  //   }, []);

  //   if (loading) return <div>Loading...</div>;
  //   if (error) return <div>Error: {error}</div>;

  // MAKING A TODO LIST USING LIST TAG
  // useEffect(()=>{
  //   (async () => {
  //     try{
  //       const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
  //       const filteredData = data.filter(el=>el.id<=10)
  //       setTodos(filteredData)
  //       setLoading(false);
  //     }
  //     catch(err){
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   })()
  // },[])
  // const handletodos = (id) => {
  //   setTodos(todos.map(el => 
  //     el.id === id ? { ...el, completed: !el.completed } : el
  //   ));
  // }
  return (
    <>
      {/* TODO LIST */}
      {/* <ul>
        {
          todos.map(el=>{
            return(
              <li key={el.id}>
                <input
                  type="checkbox"
                  checked={el.completed}
                  onChange={()=>handletodos(el.id)}
                />
                {el.title}
              </li>
            )
          })
        }
      </ul> */}


      {/* CARD COMP */}
      {/* <Container>
        <Row className="justify-content-md-center">
          {data.map((el) => {
            return <CardComp title={el.title} body={el.body} />;
          })}
        </Row>
      </Container> */}
      <About />
      <Coffee />
      <Blog />
      <Sales />
      <Review />
    </>
  );
}

export default Home;
