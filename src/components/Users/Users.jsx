import React from "react";
import s from "./Users.module.css"
import User from "./User/User";
import {get} from "axios";
import * as axios from "axios";
// Зачем нам ClassComponent?
// 1. <Users /> вызывало нашу функциональную компоненту
// if (props.users.length === 0 ){ она отправляла запрос на сервер
//     axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
//             props.setUsers(response.data.items)
//         }
//     )
// }
// Что противоречит концепции чистых функций и называется сторонним эффектом(Side Effect),
// т.е. функция "лезет" во внешний мир.
// Путь решения проблемы:
// Создать функцию getUsers(), button, повесить ему обработчик: по нажатию делать запрос на сервак-
// это решение, НО пользователи нам нужны в тот момент, когда мы загрузили страницу, т.е. сразу,
// а не после нажатия
class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
                this.props.setUsers(response.data.items)
            }
        )
    }

    render() {
        console.log(this.props.users.length)
        let follow = (id) => {
            this.props.follow(id)
        }
        let unfollow = (id) => {
            this.props.unfollow(id)
        }
        let usersElements = this.props.users.map(u => {
            return <User id={u.id} name={u.name} status={u.status}/>
        })
        return <div className={s.Users}>
            {usersElements}
        </div>
    }
}


// const Usersc = (props) => {
//     let usersElements_1 = props.users.map( u => {
//         return <User id={u.id} name={u.name} location={u.location} status={u.status} avaURL={u.avaURL}
//                      follow={this.follow} unfollow={this.unfollow}
//                      followStatus={u.followStatus}/>
//     })
// }
export default Users