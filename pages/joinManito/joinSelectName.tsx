import React, {useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent, selectClasses } from '@mui/material/Select';
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import Alert from '@mui/material/Alert';
import Modal from '../../component/joinRoom/checkUserInfo';

export default function joinSelectName() {

    const [name, setName] = useState<string>('');
    const [isWarning, setIsWarning] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

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
                            <MenuItem value={0}>None</MenuItem>
                            <MenuItem value={1}>One</MenuItem>
                            <MenuItem value={2}>Two</MenuItem>
                            <MenuItem value={3}>Three</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                { isWarning && (
                    <Alert variant="outlined" severity="error" sx={{width: '80%'}}>
                        <p>이름을 선택해주세요</p>
                    </Alert>
                )}
                <button className="button1" onClick={openModal}>마니또 확인하기</button>
                <Modal isOpen={isOpen} onClose={closeModal} name={name}>

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