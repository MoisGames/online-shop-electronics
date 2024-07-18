import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'}
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 Pro', price: 25000, rating: '5', img: 'C:\Project-React\online-store-electronics\server\static\iphone12Pro_1.jpg'},
            {id: 2, name: 'Iphone 12 Pro', price: 25000, rating: '5', img: 'C:\Project-React\online-store-electronics\server\static\iphone12Pro_2.jpg'},
            {id: 3, name: 'Iphone 12 Pro', price: 25000, rating: '5', img: 'C:\Project-React\online-store-electronics\server\static\iphone12Pro_3.jpg'},
            {id: 4, name: 'Iphone 12 Pro', price: 25000, rating: '5', img: 'C:\Project-React\online-store-electronics\server\static\iphone12Pro_4.jpg'},
        ]
        this._selectedType = {};
        makeAutoObservable (this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands (brands) {
        this._brands = brands;
    }

    setDevices (devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType;
    }
}
