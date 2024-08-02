import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import MembersOfGroup from './type-of-slide/members-of-group';
import RequestsToGroup from './type-of-slide/requests-to-group';
import useCheckRole from '../../../api/hooks/use-check-role';

export const Members: React.FC<{ groupId: string | undefined}> = ({groupId}) => {
    const { data: isAdmin, isLoading} = useCheckRole(groupId as string);

    return(
        <div className="w-[30%] border-[2px] h-[400px] overflow-y-scroll border-[#7e007e] rounded-xl flex flex-col items-center">
                <Splide aria-label="My Favorite Images" className="cursor-grab w-[100%]"  options={{
                    pagination: false
                }}>
                    <SplideSlide>
                        <MembersOfGroup groupId={groupId} />    
                    </SplideSlide>
                    {!isLoading && isAdmin && (
                        <>
                            <SplideSlide>
                                <RequestsToGroup groupId={groupId} />
                            </SplideSlide>
                            <SplideSlide>
                                <h1 className="text-xl font-bold mt-5">adding-to-group</h1>
                            </SplideSlide>
                        </>
                    )}
                </Splide>
                
        </div>
    )
} 