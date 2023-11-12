import * as SwitchRadix from '@radix-ui/react-switch';
import { ISwitchProps } from './Switch.types';

export const Switch = (props: ISwitchProps) => {

    return <div className='flex items-center gap-4'>
        <label htmlFor={props.id}>{props.labelLeft}</label>
        <SwitchRadix.Root id={props.id} className='w-[45px] h-[24px] bg-marine-blue rounded-full relative data-[state="checked"]:bg-marine-blue'>
            <SwitchRadix.Thumb className="block w-[15px] h-[15px] bg-white rounded-full transit translate-x-[5px] transition duration-100 
            data-[state='checked']:translate-x-[26px] will-change-transform" />
        </SwitchRadix.Root>
        {props.labelRight && <label htmlFor={props.id}>{props.labelRight}</label>}

    </div>
}