// import { useContext} from "react";
// import NavigationContext from "../context/navigation";
import useNavigation from "../hooks/use-navigation";

function Route({ path, children }){
    // const { currentPath } = useContext(NavigationContext);
    const { currentPath } = useNavigation();

    if(currentPath === path)
        return children;

    return null;
}

export default Route;