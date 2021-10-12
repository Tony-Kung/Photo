import React, {useState , useEffect} from 'react'
import Search from '../components/Search';
import Picture from '../components/Picture';

export const Homepage = () => {
    const [input, setInput] =useState("");
    let [data, setData] = useState(null);
    let [page,setPage] = useState(1);
    let [currentSearch,setCurrentSearch] = useState("");
    const auth='563492ad6f917000010000013ec2ed4a8ad945bf9bc77b5eaa845e56'; 
    const intialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
    const searchURL = "https://api.pexels.com/v1/search?query="+ currentSearch +"&per_page=15&page=1"; 
  
    //search method,fetch data from pexels api
    const search =async (url) =>{
        setPage(2);//網頁打開後state=1的照片顯示出來之後page=2
        const dataFetch = await fetch(url , {
            method:"GET",
            headers:{
                Accept:"appliction/json",
                Authorization:auth,
                
            },
        });
        let parseDate = await dataFetch.json();
        setData(parseDate.photos);
    };

    //+入更多圖片
    const morepicture = async () =>{
        let newURL;
        if(input === ""){
            newURL = "https://api.pexels.com/v1/curated?page=" + page + "&per_page=15";
        }
        else{
            
           // newURL = `https://api.pexels.com/v1/search?query="${input}&per_page=15&page=${page}`; 

            newURL = "https://api.pexels.com/v1/search?query="+ input +"&per_page=15&page=" + page; 
        }
        setPage(page + 1);
        const dataFetch = await fetch(newURL , {
            method:"GET",
            headers:{
                Accept:"appliction/json",
                Authorization:auth,
                
            },
        });
        let parseDate = await dataFetch.json();
        setData(data.concat(parseDate.photos));
    }


    //useEffect 網頁打開就直接跑好照片
    useEffect(() => {
        search(intialURL);
    }, []);

   
    useEffect(() => {
        if (currentSearch === "") {
          search(intialURL);
        } else {
          search(searchURL);
        }
      }, [currentSearch]);
    
    return (
        <div style={{minHeight:"100vh"}}>
          
            <Search search={() =>{
                setCurrentSearch(input);
                //search(searchURL);
                }}
                 setInput={setInput}
                 />

            <div className="pictures">
                {data &&
                    data.map((d) => {
                        return <Picture data={d}></Picture>
                    })
                }
               
            </div>

            <div className="morePicture">
                <button onClick={morepicture}>載入更多</button>
            </div>    

        </div>
    )
}
export default Homepage;