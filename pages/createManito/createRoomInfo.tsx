import React, {useState, useEffect} from "react";
import { TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Modal from '../../component/createRoom/checkRoomInfo'


export default function CreateRoomInfo() {
    const [step, setStep] = useState<number>(1);
    const [inputTitle, setInputTitle] = useState<string>('');
    const [addPerson, setAddPerson] = useState<string>('');
    const [participantList, setParticipantList] = useState<string[]>([]);
    const totalSteps: number = 2;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputTitle(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const roomNameInput = e.currentTarget.querySelector('#input_roomName') as HTMLInputElement;
        const roomName = roomNameInput.value;

        setInputTitle(roomName);

        console.log('input submitted: ', inputTitle);

        if(step < totalSteps){
            setStep(step + 1);
        }
    };

    const handleInputPersonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddPerson(e.target.value);
    };

    const handleAddParticipant = () => {
        if(addPerson.trim() !== ''){
            setParticipantList([...participantList, addPerson]);
            setAddPerson('');
        }
    };

    const removeParticipant = (index: number) => {
        const updateList = [...participantList];
        updateList.splice(index, 1);
        setParticipantList(updateList);
    };

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    useEffect(() => {
        console.log(participantList);
    }, [participantList]);
    

    return (
        <>  
            <div className="container">

                <progress value={step} max={totalSteps} />

                { step === 1 && (
                    <div className="innerContainer">
                        <h1>방 이름을 정해볼까요?</h1>
                        <p className="subTitle">특별한 의미를 담아 우리만의 방을 만들어요</p>
                        <form onSubmit={handleSubmit}>
                            <TextField 
                                id="input_roomName"
                                sx={{
                                    width: 300,
                                }}
                                label="방 이름" 
                                placeholder="예) 즐거운 크리스마스 파티"
                                defaultValue={inputTitle}
                                variant="standard" 
                                required
                                onChange={handleInputChange} 
                            />
                            
                            <button className="button1" type="submit">다음</button>
                        </form>
                    </div>
                )}

                {step === 2 && (
                    <div className="innerContainer">
                        <h1>누구와 함께 하나요?</h1>
                        <p className="subTitle">참여하는 친구의 이름을 모두 적어주세요</p>

                        <div className="nameInput">
                            <TextField 
                                id="input-name" 
                                label="" 
                                variant="standard" 
                                value={addPerson}
                                onChange={handleInputPersonChange}
                                fullWidth
                            />
                            <button className="plusBtn" onClick={handleAddParticipant}><AddIcon fontSize="large"/></button>
                        </div>
                        <div className="participants">
                            {participantList.map((participant, index) => (
                                <div className={`participant${index === 0 ? '1' : (index % 4 >= 2 ? (index % 2 === 0 ? '2' : '1') : (index % 2 === 0 ? '1' : '2'))}`} key={index}> 
                                    {participant}
                                    <button onClick={() => removeParticipant(index)}><RemoveIcon/></button>
                                </div>
                            ))}
                        </div>

                        {participantList.length < 3 && (
                            <div className="minAlert">
                                구성원이 3명 이상이어야<br/>
                                매칭이 가능해요!
                            </div>
                        )}
                        
                        <div className="btnContainer">
                            <button className="button4" onClick={() => setStep(step-1)}>이전</button>
                            {participantList.length < 3 && (
                                <button 
                                    className="button3" 
                                    style={{backgroundColor: "#B2EEE8" }} 
                                    disabled
                                >
                                    다음
                                </button>
                            )}
                            {participantList.length >= 3 && (
                                <button className="button3" onClick={() => openModal()}>다음</button>
                            )}
                        </div>
                        <Modal isOpen={isOpen} onClose={closeModal}>
                            <div className="participants">
                                {participantList.map((participant, index) => (
                                    <div className={`participant${index === 0 ? '1' : (index % 4 >= 2 ? (index % 2 === 0 ? '2' : '1') : (index % 2 === 0 ? '1' : '2'))}`} key={index}> 
                                        {participant}
                                    </div>
                                ))}
                            </div>
                        </Modal>
                    </div>
                )}
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;            
                }

                .innerContainer {
                        height: 60vh;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                }

                .nameInput {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    width: 65%;
                }

                .plusBtn {
                    width: 45px;
                    height: 45px;
                    background-color: #00C5B3;
                    color: white;
                    border-radius: 100%;
                    border: none;
                    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
                }

                .participants{
                    display: flex;
                    flex-wrap: wrap;
                    overflow-y: scroll;
                    justify-content: flex-start;
                    align-items: flex-start;
                    align-content: flex-start;
                    width: 80%;
                    height: 300px;
                    margin: 50px;
                }

                .participant1{
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex: 0 0 calc(50% - 20px); /* 한 줄에 두 개의 요소가 오도록 설정 */
                    height: 50px;
                    margin: 10px 10px;
                    padding: 10px 20px;
                    background-color: #00C5B3;
                    color: #FFFFFF;
                    font-size: 21px;
                    border-radius: 30px;
                }

                .participant1 button {
                    position: absolute;
                    top: -5px;
                    right: -5px;
                    width: 30px;
                    height: 30px;
                    border: none;
                    border-radius: 100%;
                    background-color: #FFFFFF;
                    color: #999999;
                    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
                }

                .participant2{
                    position: relative;
                    display: flex;
                    flex: 0 0 calc(50% - 20px); /* 한 줄에 두 개의 요소가 오도록 설정 */
                    height: 50px;
                    margin: 10px 10px;
                    padding: 10px 20px;
                    background-color: #DDF8F6;
                    align-items: center;
                    justify-content: center;
                    color: #7B7B7B;
                    font-size: 21px;
                    border-radius: 30px;
                }
                .participant2 button {
                    position: absolute;
                    top: -5px;
                    right: -5px;
                    width: 30px;
                    height: 30px;
                    border: none;
                    border-radius: 100%;
                    background-color: #FFFFFF;
                    color: #999999;
                    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
                }

                .minAlert {
                    position: relative;
                    width: 75%;
                    height: 100px;
                    padding: 20px 20px;
                    border-radius: 10px;
                    text-align: center;
                    box-shadow: rgba(178, 238, 232, 0.5) 10px 13px 27px -5px, rgba(178, 238, 232, 0.8) 10px 8px 16px -8px;
                    margin-bottom: 20px;
                }

                .btnContainer {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    gap: 20px;
                }

                form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                form > button {
                    margin-top: 40vh;
                }

                progress {
                    width: 80%;
                    margin: 30px auto;
                    margin-bottom: 40%;
                    appearance: none;
                    border: none;
                }

                progress::-webkit-progress-bar {
                    background-color: #ddd; /* progress 바의 배경색 */
                    border-radius: 60px;
                }

                progress::-webkit-progress-value {
                    background-color: #00C5B3; /* progress 바의 채우는 부분의 색상 */
                    border-radius: 60px;
                }

                progress::-moz-progress-bar {
                    background-color: #00C5B3;
                    border-radius: 60px; 
                }
            `}</style>
        </>
        
    )

} 