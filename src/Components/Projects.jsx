import {AiFillGithub} from "react-icons/ai"
import {GrDeploy} from "react-icons/gr"


function ProjectCard({ImgUrl , Title , Stack  , GitLink , LiveLink}) {
    
  return (
   
      <div className="w-[270px]  p-2 shadow-xl rounded-lg border-t-2 hover:scale-105 duration-150 " >
        <img className="w-full h-[180px] border"
          src={ImgUrl}
          alt="image"
        />
        <h3 className="text-center font-semibold mt-2">{Title}</h3>
        <h4 className="text-center mt-2">{Stack.slice(0,4).join(",")}</h4>
        <div className="flex flex-row justify-between mt-2">
        <a href={GitLink} target="_blank">
           <AiFillGithub  size="1.5rem"></AiFillGithub>
        </a>
        <a href={LiveLink} target="_blank">
          <GrDeploy  size="1.5rem" ></GrDeploy>
          </a>
        </div>
      </div>
      
   
  );
}
export default ProjectCard;
