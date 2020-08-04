import {http, httpFile} from "./http_service";

export function createProduct(data) {
    return httpFile().post('/products', data)
}
export function loadProducts() {
    return http().get('/products')
}
export function deleteProduct(id) {
    return http().delete(`products/${id}`)
}
export function updateProduct(id, data) {
    return httpFile().post(`products/${id}`, data)
}
