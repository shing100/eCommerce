import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "../../fragments";

export const INDEX_QUERY = gql`
    {
        categories {
            id
            name
        }
        onSale: products(where: {
            sale: true
        }) {
            ...ProductItems
        }
        allProducts: products(where: {
        OR: [{
            sale: false
        }, {
            sale: true
        }]}) {
            ...ProductItems
        }
    }
    ${PRODUCT_FRAGMENT}
`