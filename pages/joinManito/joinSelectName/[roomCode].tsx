import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from "react";
import axios from "axios";
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent, selectClasses } from '@mui/material/Select';
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import Alert from '@mui/material/Alert';
import Modal from '../../../component/joinRoom/checkUserInfo';
import room from '../../../types/room';

interface roomProps {
    className: string;
    roomInfo: room;
}

const joinSelectName: NextPage<roomProps> = ( props ) => {

    const [name, setName] = useState<string>('');
    const [nameList, ] = useState<string[]>(props.roomInfo.names.map(name => name.name));
    const [isWarning, setIsWarning] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const router = useRouter();

    const handleChange = (event : SelectChangeEvent) => {
        setName(event.target.value);
    };

    const openModal = () => {
        if(name === ''){
            setIsWarning(true);
        }else {
            setIsOpen(true)
        }
    };
    const closeModal = () => setIsOpen(false);

    const movePage = () => {
        // router.push(`/joinManito/joinComplete/${props.roomInfo.roomCode}?name=${name}`);
        router.push(
            {
                pathname: `/joinManito/joinComplete/${props.roomInfo.roomCode}`,
                query: {
                    "name": name,
                },
            },
            `/joinManito/joinComplete/${props.roomInfo.roomCode}`
        )
    }

    return (
        <>
            <div className="container">
                <div className="innerContainer">
                    <h2 className="title">이름이<br/>무엇인가요?</h2>
                    <FormControl>
                        <Select
                            labelId="inputLabel"
                            IconComponent={ExpandMoreIcon}
                            MenuProps={{
                                anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "left",
                                },
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "left",
                                },
                            }}
                            value={name}
                            onChange={handleChange}
                            sx={{
                                width: "100%",
                                mt: 2.5,
                                [`& .${selectClasses.select}`]: {
                                    minWidth: "250px",
                                    background: "white",
                                    color: "grey.700",
                                    borderRadius: "4px",
                                    paddingLeft: "12px",
                                    paddingTop: "14px",
                                    paddingBottom: "15px",
                                },
                                [`& .${outlinedInputClasses.notchedOutline}`]: {
                                    borderColor: "#00C5B3",
                                    borderStyle: "solid",
                                    borderWidth: "2px",
                                },
                                "&:hover": {
                                    [`& .${outlinedInputClasses.notchedOutline}`]: {
                                    borderColor: "#00C5B3",
                                    },
                                },
                                boxShadow: "rgba(0, 197, 179, 0.25) 0px 13px 27px -5px, rgba(0, 197, 179, 0.3) 0px 8px 16px -8px"
                            }}
                        >
                            <MenuItem value={''}>이름을 선택해주세요</MenuItem>
                            { nameList.map((name, index) => (
                                <MenuItem key={index} value={name}>{name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                { isWarning && (
                    <Alert variant="outlined" severity="error" sx={{width: '80%'}}>
                        <p>이름을 선택해주세요</p>
                    </Alert>
                )}
                <button className="button1" onClick={openModal}>마니또 확인하기</button>
                <Modal isOpen={isOpen} onClose={closeModal} name={name} movePage={movePage}>

                </Modal>
            </div>
            <style jsx>
                {`
                    .container {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                        align-items: center;
                    }

                    .innerContainer {
                        margin: 30% 0;
                        text-align: center;
                        width: 100%;
                        height: 40%;
                    }

                    .title {
                        font-size: 32px;
                        margin-bottom: 50px;
                        line-height: 1.5;
                    }

                `}
            </style>
        </>
    )
}

export default joinSelectName;

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const baseUrl = process.env.API_BASE_URL;
        const response = await axios.get(`${baseUrl}/roomCodes`);
        const roomCodes = response.data;
        console.log(response.data);

        const paths = roomCodes.map((room: {roomCode: string}) => ({
            params: {roomCode: room.roomCode}
        }));

        console.log(paths);

        return { paths, fallback: false};
    } catch(err){
        console.error("올바른 방을 찾지 못했습니다.", err)
        return {paths: [], fallback: false};
    }

}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const roomCode: string | string[] | undefined = params?.roomCode;

    const baseUrl = process.env.API_BASE_URL;
    const apiURL = `${baseUrl}`;

    const roomInfo: room = { 
        roomCode: roomCode, 
        roomName: '',
        names: [],
    }

    try {
        const response = await axios.get(`${apiURL}/${roomCode}`);
        console.log(response.data);
        roomInfo.roomName = response.data.roomName;
        roomInfo.names = response.data.names;
    } catch (error) {
        console.error(error);
    }
 
    return { props: { roomInfo } };
}