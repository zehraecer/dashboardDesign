import { ContainerLeft } from "./ContainerLeft"
import { ContainerMiddle } from "./ContainerMiddle"
import { ContainerRight } from "./ContainerRight"
import { Header } from "./Header"

export const DashboardWrapper = () => {

    return (

        <div>
            <Header />
            <div style={{ display: "flex" }} className='.container-fluid d-flex  '>
                <ContainerLeft />
                <ContainerMiddle />
                <ContainerRight />
                <div>

                </div>
            </div>
        </div>
    )
}