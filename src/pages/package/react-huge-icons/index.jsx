import * as ListIconOutline from "react-huge-icons/outline";
import * as ListIconSolid from "react-huge-icons/solid";
import * as ListIconBulk from "react-huge-icons/bulk";
import ShowIcon from '@/components/iconList/ShowIcon';
import React from 'react';
import Head from "next/head";

const Index = () => {
    const mergedObj = {...ListIconBulk, ...ListIconOutline, ...ListIconSolid}

    return (
        <>
            <Head>
                <title>React Icons package, Huge Icons</title>
                <meta name="description" content="React Icons package, Huge Icons | Zero LimLimitit"/>
            </Head>

            <ShowIcon listOfIcons={{
                outline: ListIconOutline,
                bulk: ListIconBulk,
                solid: ListIconSolid
            }}/>
        </>
    );
};

export default Index;