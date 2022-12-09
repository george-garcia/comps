import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';


function ButtonPage() {

    return (
        <div>
            <div>
                <Button primary rounded outline><GoBell/> Click Me!!</Button>
            </div>
            <div>
                <Button secondary outline><GoCloudDownload/> Buy Now!!</Button>
            </div>
            <div>
                <Button success ><GoDatabase/> See Deal!!</Button>
            </div>
            <div>
                <Button warning >Hide Ads!!</Button>
            </div>
            <div>
                <Button danger outline>Bid!</Button>
            </div>
        </div>
    );
}

export default ButtonPage;