import Dexie from 'dexie'

const db = new Dexie('TravelApp')
db.version(1).stores({
    travel: '++id, name, location, group, date, price, description, image, rating'
});

db.travel.bulkPut([
    {id: 1, name: "Switzerland", location: "Switzerland", group: "120+ People", date: "12/12/2021", price: "$1200", description: "Qui tempore voluptate qui quia commodi rem praesentium alias et.", image: "/images/archive1.png", rating: "5.0"},
    {id: 2, name: "Berlin", location: "Germany", group: "120+ People", date: "12/12/2021", price: "$1200", description: "Qui tempore voluptate qui quia commodi rem praesentium alias et.", image: "/images/archive2.png", rating: "5.0"},
    {id: 3, name: "Maldives", location: "Maldives", group: "120+ People", date: "12/12/2021", price: "$1200", description: "Qui tempore voluptate qui quia commodi rem praesentium alias et.", image: "/images/archive3.png", rating: "5.0"},
    {id: 4, name: "Toronto", location: "Canada", group: "120+ People", date: "12/12/2021", price: "$1200", description: "Qui tempore voluptate qui quia commodi rem praesentium alias et.", image: "/images/archive4.png", rating: "5.0"},
    {id: 5, name: "Baku", location: "Baku", group: "120+ People", date: "12/12/2021", price: "$1200", description: "Qui tempore voluptate qui quia commodi rem praesentium alias et.", image: "/images/archive5.png", rating: "5.0"},
    {id: 6, name: "Chinese", location: "Chinese", group: "120+ People", date: "12/12/2021", price: "$1200", description: "Qui tempore voluptate qui quia commodi rem praesentium alias et.", image: "/images/archive6.png", rating: "5.0"},
])

export const {travel} = db
export default db;

