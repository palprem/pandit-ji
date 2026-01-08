"use client"

import Streper from '@/components/image/streper'
import React, { useEffect, useState } from 'react'
import '../../../style/dashboard.css';
import ContainerWapper from '@/components/card/container-wapper';
import { Title } from '@/components/typography/title';
import api from '@/services/axiosInstance';
import { useSelector } from 'react-redux';
import { redirect } from 'next/navigation';
import { useTranslations } from 'use-intl';

function Dashboard() {
    const [data, setData] = useState([]);
    const { user: { token = null } } = useSelector((state) => state.auth);
    const n = useTranslations('Navbar')
    useEffect(() => {
        if (!token) {
            redirect('/');
        }
        (async () => {
            try {
                const response = await api.get('bookings');
                setData(response.data)
            } catch (error) {
                setData([])
            }
        })()
    }, [])
    return (
        <>
            <Streper title={n('dashboard')} />
            <ContainerWapper>
                <Title>Bookings</Title>
                <table className="table border">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Booking Date</th>
                            <th scope="col">Program Date</th>
                            <th scope="col">Type of bookings</th>
                            <th scope="col">Phone number</th>
                            <th scope="col">Email</th>
                            <th scope="col">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item) => {
                                return <tr key={item.id}>
                                    <th scope="row">{item?.id}</th>
                                    <td >{item?.createdAt?.slice(0, 10)}</td>
                                    <td >{item?.date?.slice(0, 10)}</td>
                                    <td style={{ textTransform: "capitalize" }} >{item?.type}</td>
                                    <td >{item?.phone}</td>
                                    <td >{item?.email}</td>
                                    <td style={{ textTransform: "capitalize" }}>{item?.message}</td>
                                </tr>

                            })
                        }
                    </tbody>
                </table>
            </ContainerWapper>
        </>
    )
}

export default Dashboard;