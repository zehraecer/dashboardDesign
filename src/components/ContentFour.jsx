export const ContentFour = () => {

    return (
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start content-4 w-100 ">
            <span className="content-4-span1  ">Brian Ford</span>
            <div className="d-flex justify-content-between mt-1 d-flex-responsive ">
                <div className="d-flex gap-1">
                    <button type="button" className="btn btn-outline-secondary content-btns-1">Edit section</button>
                    <button type="button" className="btn btn-primary content-btns-2">Add item</button>
                </div>
                <div className="d-block d-sm-none content-1-dots" >

                    <div className="three-dots">...</div>

                </div>
            </div>
        </div>
    )
}