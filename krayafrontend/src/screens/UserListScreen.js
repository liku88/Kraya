import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from '../components/ErrorMessage'
import Loader from "../components/Loader"
import { userList } from '../actions/userActions'

const UserListScreen = () => {
    const dispatch = useDispatch()
    const userList = useSelector(state => state.userList);
    const { loading, error, users } = userList
    return (
        <div>

        </div>
    )
}

export default UserListScreen
