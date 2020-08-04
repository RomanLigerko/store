import {http, httpFile} from "./http_service";

export function createCategory(data) {
    return httpFile().post('/categories', data)
}
export function loadCategories() {
    return http().get('/categories')
}
export function getProducts(code) {
    return http().get(`/${code}`)
}
export function goToProduct(category, code) {
    return http().get(`/${category}/${code}`)
}
export function deleteCategory(id) {
    return http().delete(`categories/${id}`)
}
export function updateCategory(id, data) {
    return httpFile().post(`categories/${id}`, data)
}
