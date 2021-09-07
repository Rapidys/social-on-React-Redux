import React from 'react';
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import {isToggleFetching} from "../../redux-store/UsersReducer";

class Users extends React.Component {


    componentDidMount() {
        this.props.getUsers(this.props.PgSize, this.props.currentPage)

    }


    onPageChange = (PageNumber) => {

        this.props.SetCurrentPage(PageNumber)
        this.props.getUsers(this.props.PgSize, PageNumber)


    }

    render() {



        let PagesCount = Math.ceil(this.props.totalCount / this.props.PgSize)

        let pages = []
        for (let i = 1; i <= PagesCount; i++) {
            pages.push(i)
        }
        if(this.props.isToggleFetching){
            return <Preloader />
        }
        return (<div className={s.pageWrapp}>
            <div className={s.paginationSection}>
                {pages.map(p => {
                    return <span
                        className={this.props.currentPage === p && s.activePage}
                        onClick={(e) => {
                            this.onPageChange(p)
                        }}
                    >{p}</span>
                })}
            </div>
            {this.props.users.map(p => {
                return <div className={s.wrapper}>
                    <div>
                        <NavLink to={'/Profile/' + p.id}>
                            <img src={p.photos.small ? p.photos.small
                                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FuEJbKwDdaz1h387130xmYkAIQbZpahhbQ&usqp=CAU'

                            } alt="img" className={s.img}/>
                        </NavLink>
                        <div>
                            {p.followed ? <button
                                    onClick={() => {
                                        this.props.getUnFollowed(p.id)


                                    }

                                    }
                                >unFollowed</button>
                                : <button
                                    onClick={() => {
                                        this.props.getFollowed(p.id)
                                    }}
                                >Follow</button>
                            }
                        </div>
                    </div>
                    <div>
                        <div>{p.name}</div>
                        <div>{p.id}</div>
                    </div>

                    <div>
                        <div>Country</div>
                        <div>city</div>
                    </div>
                </div>

            })}</div>)


    }
}

;

export default Users;