// 'use client';

import { ChangeEventHandler } from 'react';
import { Input, InputErros } from './Form';

type InputProps = {
    type: string,
    name: string,
    placeholder: string,
    error: string | undefined,
    value: string,
    onChange:  ChangeEventHandler<HTMLInputElement> | undefined
   
}

export function InputComponent ({type, name, placeholder, error, value, onChange } : InputProps) {
    return (
        <div className="input-container">
            <Input 
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />

            {error && (
                <InputErros>{error}</InputErros>
            )}
        </div>
    );

}