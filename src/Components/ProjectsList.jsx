import { useState } from "react"
import ProjectCard from "./Projects"

const cardData = [
    {
        id:11,
        ImgUrl:"https://res.cloudinary.com/dybiiddob/image/upload/v1676014554/Mern_zelc3b.png",
        Title:"Todo App with Auth",
        Stack:["React", "MangoDB" , "Express" , "Nodejs" , "Mern Stack"] ,
        GitLink:"",
        LiveLink:""

    },
    {
        id:12,
        ImgUrl:"https://res.cloudinary.com/dybiiddob/image/upload/v1676015257/InShot_20230210_131541660_urabbz.jpg",
        Title:"Nine-Dine",
        Stack:["React"],
        GitLink:"",
        LiveLink:""

    },
    {
        id:1,
        ImgUrl:"https://res.cloudinary.com/dybiiddob/image/upload/v1676009533/Gaming_Landing_Page_ks72h3.png",
        Title:"Gaming Landing Page",
        Stack:["Html" ,"css"] ,
        GitLink:"",
        LiveLink:""

    },
    {
        id:2,
        ImgUrl:"https://res.cloudinary.com/dybiiddob/image/upload/v1676010087/Credit_card_landing_page_j8hmwh.png",
        Title:"Credit_card_landing_page",
        Stack:["Html" ,"css"] ,
        GitLink:"",
        LiveLink:""

    },
    {
        id:3,
        ImgUrl:"https://res.cloudinary.com/dybiiddob/image/upload/v1676010087/Main_Landing_page1_zrqoew.png",
        Title:"Main_Landing_page",
        Stack:["Html" ,"css"] ,
        GitLink:"",
        LiveLink:""

    },
    {
        id:4,
        ImgUrl:"https://res.cloudinary.com/dybiiddob/image/upload/v1676010116/Real_Estate_-_Desktop_zg0cci.png",
        Title:"Real_Estate_Desktop",
        Stack:["Html" ,"css"] ,
        GitLink:"",
        LiveLink:""

    },
    {
        id:8,
        ImgUrl:"https://res.cloudinary.com/dybiiddob/image/upload/v1676013318/Vs_code_z4tm1l.png",
        Title:"Vs code Clone",
        Stack:["Html" ,"css"] ,
        GitLink:"",
        LiveLink:""

    },
    
    {
        id:6,
        ImgUrl:"https://res.cloudinary.com/dybiiddob/image/upload/v1676012829/Project_s62uiq.png",
        Title:"Shade Up",
        Stack:["Html" ,"css","Javascript"]  ,
        GitLink:"",
        LiveLink:""

    },
    {
        id:7,
        ImgUrl:"https://res.cloudinary.com/dybiiddob/image/upload/v1676012703/Quiz_app_x1lmz7.png",
        Title:"Quiz App",
        Stack:["Html" ,"css","Javascript"]  ,
        GitLink:"",
        LiveLink:""

    },
    {
        id:9,
        ImgUrl:"https://res.cloudinary.com/dybiiddob/image/upload/v1676013756/Tictactoe_m4jwdg.png",
        Title:"Tic Tac Toe",
        Stack:["Html" ,"css","Javascript"] ,
        GitLink:"",
        LiveLink:""

    },
    {
        id:10,
        ImgUrl:"https://res.cloudinary.com/dybiiddob/image/upload/v1676015462/InShot_20230210_131948320_felpan.jpg",
        Title:"Task Manager",
        Stack:["Html" ,"css","Javascript"] ,
        GitLink:"",
        LiveLink:""

    },
    {
        id:11,
        ImgUrl:"https://res.cloudinary.com/dybiiddob/image/upload/v1676028676/1_zbrijz.png",
        Title:"Landing page Desktop",
        Stack:["Html" ,"css"] ,
        GitLink:"",
        LiveLink:""

    },
    {
        id:12,
        ImgUrl:"https://res.cloudinary.com/dybiiddob/image/upload/v1676028677/3_udptna.png",
        Title:"Landing page Desktop",
        Stack:["Html" ,"css"] ,
        GitLink:"",
        LiveLink:""

    },
    {
        id:13,
        ImgUrl:"https://res.cloudinary.com/dybiiddob/image/upload/v1676028678/2_rpiwjy.png",
        Title:"Landing page Desktop",
        Stack:["Html" ,"css"] ,
        GitLink:"",
        LiveLink:""

    }
    
    
]


function ProjectsList(){

    const [Filteredprojects , setFilteredProjects] = useState(cardData)
    const [selectedValue ,setSelectedValue] = useState("")


    const FilterProjects =(cardData,selectedValue)=>{
             if(selectedValue!==null)
             {
               let projects = cardData.filter((data)=>{
                       
                return data.Stack.includes(selectedValue)

               })
               setFilteredProjects(projects)
            }
           

    }

 

    return (
      <div className="my-8 py-8">
        <h3 className="text-center text-3xl font-semibold mb-4">Projects</h3>
        <div className="text-center m-4">
        <label htmlFor="filter" className="font-medium text-lg">
            You can Filter Projects by Stack
        </label>
        <select name="filter" id="filter" value={selectedValue} onChange={(e)=>setSelectedValue(e.target.value)} 
          className="mx-4 border border-pink-400 active:outline-none  focus:outline-none">
            <option value="Javascript" className="bg-pink-400 text-white ">Javascript</option>
            <option value="React" className="bg-pink-400 text-white">React</option>
            <option value="Mern Stack" className="bg-pink-400 text-white">Mern Stack</option>
        </select>
        <button  onClick={()=>FilterProjects(cardData,selectedValue)}
        className="px-2 bg-pink-500 text-white font-medium mt-2">Filter</button>
        <button onClick={()=>setFilteredProjects(cardData)}
        className="px-2 bg-pink-500 ml-4 text-white font-medium mt-2"> Clear Filter</button>
        </div>
        <div className="flex flex-row justify-center gap-6 flex-wrap py-8">
     {
           Filteredprojects.map((data)=>{
              return <ProjectCard ImgUrl={data.ImgUrl} Title={data.Title} Stack={data.Stack} key={data.id}/>
           })
     }


        </div>
        </div>
    )
}

export default ProjectsList