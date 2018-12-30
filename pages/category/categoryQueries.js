import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "../../fragments";

export const CATEGORY_QUERY = gql`
    query categoryQuery($name: String!){
        categories {
            id
            name
        }
        category: categories(where: {
            name_contains: $name
        }) {
            name
            products {
                ...ProductItems
            }
        }
    }
    ${PRODUCT_FRAGMENT}
`