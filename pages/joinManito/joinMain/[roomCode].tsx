import { GetServerSideProps, NextPage } from 'next';
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';
import Lottie from 'react-lottie';
import * as animationData from '../../../public/image3.json';
import room from '../../../types/room';

interface RoomProps {
    roomInfo: room;
    roomCode: string;
}

const JoinHome: NextPage<RoomProps> = ( props ) => {
    const [name, ] = useState<string>(props.roomInfo.roomName);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    useEffect(() => {
        console.log(props);
    })

    return (
        <>
            <div className="container">
                <Image src="/logo.png" width={156} height={40} alt="logo" priority />
                <div className="character-container">
                    <Lottie options={defaultOptions} height={320} width={320} />
                </div>
                <div className="greeting">
                    <h2>마니또 초대장이<br/>도착했어요!</h2>
                </div>
                <div className="manitoName">
                    <p>From. {name}</p>
                </div>
                <Link href={`/joinManito/joinSelectName/${props.roomCode}`} className="button1">마니또 확인하기</Link>
            </div>
            <style jsx>
                {`
                    .background {
                        position: relative;
                        z-index: 1;
                    }
                    .container {
                        background-image: url('/backgroundImg.png');
                        background-size: cover;
                        backtground-repeat: no-repeat;
                        background-position: center;
                        position: absolute;
                        top: 0;
                        z-index: 2;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        padding-top: 50px;
                        padding-bottom: 50px;
                        align-items: center;
                    }

                    .character-container {
                        position: relative;
                        width: 400px;
                        height: 400px;
                        overflow: hidden;
                    }

                    iframe{
                        border: none;
                        position: relative;
                        width: 100%;
                        height: 100%;
                    }

                    .mainImage {
                        margin-top: 30px;
                    }

                    .greeting {
                        text-align: center;
                    }
                    .greeting h2 {
                        font-size: 32px;
                    }

                    .manitoName {
                        border-radius: 20px;
                        background-color: #D9D9D9;
                        padding: 15px 20px;
                    }
                    .manitoName p {
                        color: #5E5E5E;
                        font-weight: bold;
                    }
                `}
            </style>
        </>
    )
}

export default JoinHome;

export const getServerSideProps: GetServerSideProps<RoomProps> = async ({ params }) => {
    try{
        const roomCode: string = params?.roomCode as string;
        console.log(params);

        const baseUrl = process.env.API_BASE_URL;
        const apiURL = `${baseUrl}/${roomCode}`;

        const response = await axios.get(apiURL);
        const roomInfo: room = response.data;

        return {
            props: {
                roomCode,
                roomInfo,
            },
        };
    }catch(err) {
        console.error("해당 방을 찾지 못했습니다.", err);
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            },
        };
    }
};

// export const getStaticPaths: GetStaticPaths = async () => {
//     try {
//         const baseUrl = process.env.API_BASE_URL;
//         const response = await axios.get(`${baseUrl}/roomCodes`);
//         const roomCodes = response.data;
//         console.log(response.data);

//         const paths = roomCodes.map((room: {roomCode: string}) => ({
//             params: {roomCode: room.roomCode}
//         }));

//         console.log(paths);

//         return { paths, fallback: false};
//     } catch(err){
//         console.error("올바른 방을 찾지 못했습니다.", err)
//         return {paths: [], fallback: false};
//     }

// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     const roomCode: string | string[] | undefined = params?.roomCode;

//     const baseUrl = process.env.API_BASE_URL;
//     const apiURL = `${baseUrl}`;

//     const roomInfo: room = { 
//         roomCode: roomCode, 
//         roomName: '',
//         names: [],
//     }

//     try {
//         const response = await axios.get(`${apiURL}/${roomCode}`);
//         console.log(response.data);
//         roomInfo.roomName = response.data.roomName;
//         roomInfo.names = response.data.names;
//     } catch (error) {
//         console.error(error);
//     }
 
//     return { props: { roomInfo } };
// }