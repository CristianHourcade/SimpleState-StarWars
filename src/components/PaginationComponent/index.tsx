import { PaginationComponentProps } from "../../models/components/pagination";

const PaginationComponent = (props: PaginationComponentProps): JSX.Element => {
    return (
        <>
            {Array(props.navigationData.count / 10).fill(true).map((_, index) => {
                return (
                    <span key={index}>
                        <a href="#"
                            onClick={() => props.changePage(index + 1)}
                            className={(index + 1 == props.pageIndex) ? 'pagination-active' : ''}>{index + 1}</a>
                    </span>
                )
            })
            }
        </>
    )
}
export default PaginationComponent;