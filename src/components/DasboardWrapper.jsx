import { ContainerLeft } from "./ContainerLeft"
import { ContainerMiddle } from "./ContainerMiddle"
import { ContainerRight } from "./ContainerRight"
import { Header } from "./Header"

export const DashboardWrapper = () => {

    return (

        <div>
            <div>
                <Header />

            </div>
            <div className='d-flex flex-row w-100'>
                <div style={{ borderRight: "1px solid #EAEBF0" }}>
                    <ContainerLeft />
                </div>
                <div >

                    <ContainerMiddle />
                </div>
                <div className="w-100" style={{ backgroundColor: "#fafbfc" }}>
                    <ContainerRight />
                </div>

            </div>
        </div>
    )
}