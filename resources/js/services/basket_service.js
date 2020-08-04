import {http, httpFile} from "./http_service";

export function loadOrder() {
    return http().get('/basket')
}

export function addToBasket(product_id) {
    // localStorage.setItem("name", product_id)
    return http().post(`/basket/add/${product_id}`)
}

export function deleteFromBasket(product_id) {
    return http().post(`/basket/remove/${product_id}`)
}
