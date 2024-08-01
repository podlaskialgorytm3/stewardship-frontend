import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import MembersOfGroup from './member-copomnents/members-of-group';

export const Members: React.FC<{ groupId: string | undefined}> = ({groupId}) => {

    return(
        <div className="w-[30%] border-[2px] h-[400px] overflow-y-scroll border-[#7e007e] rounded-xl flex flex-col items-center">
                <Splide aria-label="My Favorite Images">
                    <SplideSlide>
                        <MembersOfGroup groupId={groupId} />    
                    </SplideSlide>
                    <SplideSlide className="flex justify-center items-center">
                        <h1 className="text-xl font-bold mt-5">request-to-group</h1>
                    </SplideSlide>
                </Splide>
                
        </div>
    )
} 