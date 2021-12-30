import { useNavigate } from "react-router-dom"

const Success = () => {
    const navigate = useNavigate()
    console.log(navigate)
    return (
        <div>
            successfull
        </div>
    )
}

export default Success
