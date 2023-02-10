import {AiFillGithub} from "react-icons/ai"
import {GrDeploy} from "react-icons/gr"


function ProjectCard({ImgUrl , Title , Stack  , github , live}) {
    
  return (
   
      <div className="w-[270px]   p-2 shadow-xl  border-t-2 " >
        <img className="w-full h-[180px]"
          src={ImgUrl}
          alt="image"
        />
        <h3 className="text-center font-semibold mt-2">{Title}</h3>
        <h4 className="text-center mt-2">{Stack.slice(0,4).join(",")}</h4>
        <div className="flex flex-row justify-between mt-2">
        <a to={github}>
        <AiFillGithub  size="1.5rem"></AiFillGithub>
        </a>
        <a to ={live}>
          <GrDeploy  size="1.5rem" ></GrDeploy>
          </a>
        </div>
      </div>
      
   
  );
}
export default ProjectCard;
