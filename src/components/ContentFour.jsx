export const ContentFour = () => {

    return (
        <div className="d-flex flex-column flex-sm-row justify-content-between  content-4 ">
            <span>Brian Ford</span>
            <div className="d-flex justify-content-between mt-1 ">
                <div className="d-flex gap-1">
                    <button type="button" class="btn btn-outline-secondary content-btns-1">Edit section</button>
                    <button type="button" class="btn btn-primary content-btns-2">Add item</button>
                </div>
                <div className="d-flex d-sm-none" style={{ padding: "11.2px 11.7px", border: " 1px solid #DAE0E6", borderRadius: "5px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" fill="#5F6D7E" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                    </svg>
                </div>
            </div>
        </div>
    )
}