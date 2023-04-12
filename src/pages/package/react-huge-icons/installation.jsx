import DocHugeIcon from '@/components/DocHugeIcon';
import React, { Component } from 'react';
import Head from "next/head";

class Installation extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>React Huge Icons Installation</title>
                    <meta name="description" content="React Icons package Installation, Huge Icons | Zero Limit"/>
                </Head>
                <DocHugeIcon/>
            </div>
        );
    }
}

export default Installation;