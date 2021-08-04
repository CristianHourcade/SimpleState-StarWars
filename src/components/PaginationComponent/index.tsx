import { PaginationComponentProps } from "../../models/components/pagination";

const PaginationComponent = (props: PaginationComponentProps): JSX.Element => {
    return (
        <>
            {Array(props.navigationData.count / 10).fill(true).map((_, index) => {
                return (
                    <span key={index}>
                        <button
                            style={{
                                width: "35px",
                                height: "35px"
                            }}
                            onClick={() => props.changePage(index + 1)}
                            className={(index + 1 === props.pageIndex) ? 'pagination-active' : ''}>{index + 1}</button>
                    </span>
                )
            })
            }
        </>
    )
}
export default PaginationComponent;