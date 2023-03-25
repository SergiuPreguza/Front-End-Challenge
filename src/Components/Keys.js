import React, { useState } from "react";

function Keys () {
        const [keyState, setKeyState] = useState ([
            {state: 'default', name:'ESC', class:'keys esc'},
            {state: 'default', name:'F1', class:'keys'},
            {state: 'default', name:'F2', class:'keys'},
            {state: 'default', name:'F3', class:'keys'},
            {state: 'default', name:'F4', class:'keys f4'},
            {state: 'default', name:'F5', class:'keys'},
            {state: 'default', name:'F6', class:'keys'},
            {state: 'default', name:'F7', class:'keys'},
            {state: 'default', name:'F8', class:'keys f8'},
            {state: 'default', name:'F9', class:'keys'},
            {state: 'default', name:'F10', class:'keys'},
            {state: 'default', name:'F11', class:'keys'},
            {state: 'default', name:'F12', class:'keys column'},
            {state: 'default', name:'PRINT SCREEN', class:'keys'},
            {state: 'default', name:'SCROLL LOCK', class:'keys'},
            {state: 'default', name:'PAUSE BREAK', class:'keys'},
            {state: 'default', name:'~', class:'keys'},
            {state: 'default', name:'1', class:'keys'},
            {state: 'default', name:'2', class:'keys'},
            {state: 'default', name:'3', class:'keys'},
            {state: 'default', name:'4', class:'keys'},
            {state: 'default', name:'5', class:'keys'},
            {state: 'default', name:'6', class:'keys'},
            {state: 'default', name:'7', class:'keys'},
            {state: 'default', name:'8', class:'keys'},
            {state: 'default', name:'9', class:'keys'},
            {state: 'default', name:'0', class:'keys'},
            {state: 'default', name:'-', class:'keys'},
            {state: 'default', name:'=', class:'keys'},
            {state: 'default', name:'BACKSPACE', class:'keys backspace column'},
            {state: 'default', name:'INS', class:'keys'},
            {state: 'default', name:'HOME', class:'keys'},
            {state: 'default', name:'PG UP', class:'keys column'},
            {state: 'default', name:'NUMLK', class:'keys'},
            {state: 'default', name:'/', class:'keys'},
            {state: 'default', name:'*', class:'keys'},
            {state: 'default', name:'-', class:'keys'},
            {state: 'default', name:'TAB', class:'keys tab'},
            {state: 'default', name:'Q', class:'keys'},
            {state: 'default', name:'W', class:'keys'},
            {state: 'default', name:'E', class:'keys'},
            {state: 'default', name:'R', class:'keys'},
            {state: 'default', name:'T', class:'keys'},
            {state: 'default', name:'Y', class:'keys'},
            {state: 'default', name:'U', class:'keys'},
            {state: 'default', name:'I', class:'keys'},
            {state: 'default', name:'O', class:'keys'},
            {state: 'default', name:'P', class:'keys'},
            {state: 'default', name:'[', class:'keys'},
            {state: 'default', name:']', class:'keys'},
            {state: 'default', name:'\\', class:'keys backslash column'},
            {state: 'default', name:'DEL', class:'keys'},
            {state: 'default', name:'END', class:'keys'},
            {state: 'default', name:'PG DN', class:'keys column'},
            {state: 'default', name:'7', class:'keys'},
            {state: 'default', name:'8', class:'keys'},
            {state: 'default', name:'9', class:'keys'},
            {state: 'default', name:'+', class:'keys plus'},
            {state: 'default', name:'CAPS', class:'keys caps'},
            {state: 'default', name:'A', class:'keys'},
            {state: 'default', name:'S', class:'keys'},
            {state: 'default', name:'D', class:'keys'},
            {state: 'default', name:'F', class:'keys'},
            {state: 'default', name:'G', class:'keys'},
            {state: 'default', name:'H', class:'keys'},
            {state: 'default', name:'J', class:'keys'},
            {state: 'default', name:'K', class:'keys'},
            {state: 'default', name:'L', class:'keys'},
            {state: 'default', name:';', class:'keys'},
            {state: 'default', name:'\'', class:'keys'},
            {state: 'default', name:'ENTER', class:'keys enter column'},
            {state: 'default', name:'4', class:'keys'},
            {state: 'default', name:'5', class:'keys'},
            {state: 'default', name:'6', class:'keys'},
            {state: 'default', name:'SHIFT', class:'keys left_shift'},
            {state: 'default', name:'Z', class:'keys'},
            {state: 'default', name:'X', class:'keys'},
            {state: 'default', name:'C', class:'keys'},
            {state: 'default', name:'V', class:'keys'},
            {state: 'default', name:'B', class:'keys'},
            {state: 'default', name:'N', class:'keys'},
            {state: 'default', name:'M', class:'keys'},
            {state: 'default', name:',', class:'keys'},
            {state: 'default', name:'.', class:'keys'},
            {state: 'default', name:'/', class:'keys'},
            {state: 'default', name:'SHIFT', class:'keys right_shift'},
            {state: 'default', name:'UP ARROW', class:'keys up_arrow'},
            {state: 'default', name:'1', class:'keys'},
            {state: 'default', name:'2', class:'keys'},
            {state: 'default', name:'3', class:'keys'},
            {state: 'default', name:'ENTER', class:'keys right_enter'},
            {state: 'default', name:'CTRL', class:'keys last_row'},
            {state: 'default', name:'WINDOWS', class:'keys last_row'},
            {state: 'default', name:'ALT', class:'keys last_row'},
            {state: 'default', name:'SPACE', class:'keys space'},
            {state: 'default', name:'ALT', class:'keys last_row'},
            {state: 'default', name:'FN', class:'keys last_row'},
            {state: 'default', name:'MENU', class:'keys last_row'},
            {state: 'default', name:'CTRL', class:'keys last_row column'},
            {state: 'default', name:'LEFT ARROW', class:'keys'},
            {state: 'default', name:'DOWN ARROW', class:'keys'},
            {state: 'default', name:'RIGHT ARROW', class:'keys column'},
            {state: 'default', name:'0', class:'keys zero'},
            {state: 'default', name:'.', class:'keys'},
        ]);
    
    const mouseDown = (index) => {
        const updatedKey = [...keyState];
        updatedKey[index].state = 'pressed';
        setKeyState(updatedKey);

        setTimeout(() => {
            const updatedKey = [...keyState];
            updatedKey[index].state = 'released';
            setKeyState(updatedKey);
        }, 3000);
    };

    setInterval(() => {
        setKeyState(prev => prev.map(key => ({
            ...key,
            state: 'default'
        })));
        }, 60000);

        return (
            <>
                <div className="row first">
                    {keyState.slice(0,16).map((key, index) => (
                        <div
                            key={index}
                            className={key.class + (key.state === 'pressed' ? ' pressed' : '') + (key.state === 'released' ? ' released' : '')}
                            onMouseDown={() => mouseDown(index)}
                            tabIndex="0"
                        >
                            {key.name}
                        </div>
                    ))}
                </div>

                <div className="row">
                    {keyState.slice(16,37).map((key, index) => (
                        <div
                        key={index}
                        className={key.class + (key.state === 'pressed' ? ' pressed' : '') + (key.state === 'released' ? ' released' : '')}
                        onMouseDown={() => mouseDown(index+16)}
                        tabIndex="0"
                    >
                            {key.name}
                        </div>
                    ))}
                </div>

                <div className="row">
                    {keyState.slice(37,58).map((key, index) => (
                        <div
                        key={index}
                        className={key.class + (key.state === 'pressed' ? ' pressed' : '') + (key.state === 'released' ? ' released' : '')}
                        onMouseDown={() => mouseDown(index+37)}
                        tabIndex="0"
                    >
                            {key.name}
                    </div>
                    ))}
                </div>

                <div className="row">
                    {keyState.slice(58,74).map((key, index) => (
                        <div
                        key={index}
                        className={key.class + (key.state === 'pressed' ? ' pressed' : '') + (key.state === 'released' ? ' released' : '')}
                        onMouseDown={() => mouseDown(index+58)}
                        tabIndex="0"
                    >
                            {key.name}
                        </div>
                    ))}
                </div>

                <div className="row">
                    {keyState.slice(74,91).map((key, index) => (
                        <div
                        key={index}
                        className={key.class + (key.state === 'pressed' ? ' pressed' : '') + (key.state === 'released' ? ' released' : '')}
                        onMouseDown={() => mouseDown(index+74)}
                        tabIndex="0"
                    >
                            {key.name}
                        </div>
                    ))}
                </div>

                <div className="row">
                    {keyState.slice(91,104).map((key, index) => (
                        <div
                        key={index}
                        className={key.class + (key.state === 'pressed' ? ' pressed' : '') + (key.state === 'released' ? ' released' : '')}
                        onMouseDown={() => mouseDown(index+91)}
                        tabIndex="0"
                    >
                            {key.name}
                        </div>
                    ))}
                </div>
            </>
        )
    };

export default Keys;