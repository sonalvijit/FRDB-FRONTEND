import React, { useState } from 'react';

export default function Tweet(){
     const [reply, setReply] = useState('');
     return (
          <>
               <div class="twt_handle">
          <div class="left">
               <div class="profile_logo"></div>
          </div>
          <div class="right">
               <div class="right-top">
                    <div class="twt_user_handle">
                         <div class="user_name">Sonal Vijit&nbsp;</div>
                         <div class="user_name_handle">@svjt</div>
                         <div>&nbsp;.&nbsp;</div>
                         <div>1h</div>
                    </div>
                    <div class="twt_user_follow">Follow</div>
               </div>
               <div class="right-bottom">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, pariatur labore adipisci porro nisi quo unde perferendis sapiente libero nam non itaque est praesentium impedit dolore rem, alias cupiditate. Deserunt.
               </div>
          </div>
     </div>
          </>
     )
}