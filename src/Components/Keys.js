import React from "react";

function Keys () {
        const keys = [
            {name:'ESC', class:'keys esc'},
            {name:'F1', class:'keys'},
            {name:'F2', class:'keys'},
            {name:'F3', class:'keys'},
            {name:'F4', class:'keys f4'},
            {name:'F5', class:'keys'},
            {name:'F6', class:'keys'},
            {name:'F7', class:'keys'},
            {name:'F8', class:'keys f8'},
            {name:'F9', class:'keys'},
            {name:'F10', class:'keys'},
            {name:'F11', class:'keys'},
            {name:'F12', class:'keys column'},
            {name:'PRINT SCREEN', class:'keys'},
            {name:'SCROLL LOCK', class:'keys'},
            {name:'PAUSE BREAK', class:'keys'},
            {name:'~', class:'keys'},
            {name:'1', class:'keys'},
            {name:'2', class:'keys'},
            {name:'3', class:'keys'},
            {name:'4', class:'keys'},
            {name:'5', class:'keys'},
            {name:'6', class:'keys'},
            {name:'7', class:'keys'},
            {name:'8', class:'keys'},
            {name:'9', class:'keys'},
            {name:'0', class:'keys'},
            {name:'-', class:'keys'},
            {name:'=', class:'keys'},
            {name:'BACKSPACE', class:'keys backspace column'},
            {name:'INS', class:'keys'},
            {name:'HOME', class:'keys'},
            {name:'PG UP', class:'keys column'},
            {name:'NUMLK', class:'keys'},
            {name:'/', class:'keys'},
            {name:'*', class:'keys'},
            {name:'-', class:'keys'},
            {name:'TAB', class:'keys tab'},
            {name:'Q', class:'keys'},
            {name:'W', class:'keys'},
            {name:'E', class:'keys'},
            {name:'R', class:'keys'},
            {name:'T', class:'keys'},
            {name:'Y', class:'keys'},
            {name:'U', class:'keys'},
            {name:'I', class:'keys'},
            {name:'O', class:'keys'},
            {name:'P', class:'keys'},
            {name:'[', class:'keys'},
            {name:']', class:'keys'},
            {name:'\\', class:'keys backslash column'},
            {name:'DEL', class:'keys'},
            {name:'END', class:'keys'},
            {name:'PG DN', class:'keys column'},
            {name:'7', class:'keys'},
            {name:'8', class:'keys'},
            {name:'9', class:'keys'},
            {name:'+', class:'keys plus'},
            {name:'CAPS', class:'keys caps'},
            {name:'A', class:'keys'},
            {name:'S', class:'keys'},
            {name:'D', class:'keys'},
            {name:'F', class:'keys'},
            {name:'G', class:'keys'},
            {name:'H', class:'keys'},
            {name:'J', class:'keys'},
            {name:'K', class:'keys'},
            {name:'L', class:'keys'},
            {name:';', class:'keys'},
            {name:'\'', class:'keys'},
            {name:'ENTER', class:'keys enter column'},
            {name:'4', class:'keys'},
            {name:'5', class:'keys'},
            {name:'6', class:'keys'},
            {name:'SHIFT', class:'keys left_shift'},
            {name:'Z', class:'keys'},
            {name:'X', class:'keys'},
            {name:'C', class:'keys'},
            {name:'V', class:'keys'},
            {name:'B', class:'keys'},
            {name:'N', class:'keys'},
            {name:'M', class:'keys'},
            {name:',', class:'keys'},
            {name:'.', class:'keys'},
            {name:'/', class:'keys'},
            {name:'SHIFT', class:'keys right_shift'},
            {name:'UP ARROW', class:'keys up_arrow'},
            {name:'1', class:'keys'},
            {name:'2', class:'keys'},
            {name:'3', class:'keys'},
            {name:'ENTER', class:'keys right_enter'},
            {name:'CTRL', class:'keys last_row'},
            {name:'WINDOWS', class:'keys last_row'},
            {name:'ALT', class:'keys last_row'},
            {name:'SPACE', class:'keys space'},
            {name:'ALT', class:'keys last_row'},
            {name:'FN', class:'keys last_row'},
            {name:'MENU', class:'keys last_row'},
            {name:'CTRL', class:'keys last_row column'},
            {name:'LEFT ARROW', class:'keys'},
            {name:'DOWN ARROW', class:'keys'},
            {name:'RIGHT ARROW', class:'keys column'},
            {name:'0', class:'keys zero'},
            {name:'.', class:'keys'},
        ];

        return (
            <>
                <div className="row first">
                    {keys.slice(0,16).map((key) => (
                        <div className={key.class}>
                            {key.name}
                        </div>
                    ))}
                </div>

                <div className="row">
                    {keys.slice(16,37).map((key) => (
                        <div className={key.class}>
                            {key.name}
                        </div>
                    ))}
                </div>

                <div className="row">
                    {keys.slice(37,58).map((key) => (
                        <div className={key.class}>
                            {key.name}
                        </div>
                    ))}
                </div>

                <div className="row">
                    {keys.slice(58,74).map((key) => (
                        <div className={key.class}>
                            {key.name}
                        </div>
                    ))}
                </div>

                <div className="row">
                    {keys.slice(74,91).map((key) => (
                        <div className={key.class}>
                            {key.name}
                        </div>
                    ))}
                </div>

                <div className="row">
                    {keys.slice(91,104).map((key) => (
                        <div className={key.class}>
                            {key.name}
                        </div>
                    ))}
                </div>
            </>
        )
    };

export default Keys;