import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "../../../shared/themes/themes";
import { Button } from "@mui/material";

export const TaskCard = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
    <div className="border-primary border-[2px] text-primary rounded-xl p-6 shadow-md relative w-[700px] m-3">
      {/* Title */}
      <div className="flex justify-between">
            <h3 className="text-2xl font-semibold mb-4">name-of-task</h3>
            <p className="flex justify-center items-center">
            <span>assigned-by</span>
            <img 
                className="w-10 h-10 rounded-full border-2 border-dark m-3" 
                src="https://via.placeholder.com/40" 
                alt="Avatar 1" 
            />
            </p>
      </div>
      
      {/* Avatars */}
      <div className="flex items-center mb-4">
        <div className="flex -space-x-3">
          <img 
            className="w-10 h-10 rounded-full border-2 border-dark" 
            src="https://via.placeholder.com/40" 
            alt="Avatar 1" 
          />
          <img 
            className="w-10 h-10 rounded-full border-2 border-dark" 
            src="https://via.placeholder.com/40" 
            alt="Avatar 2" 
          />
          <img 
            className="w-10 h-10 rounded-full border-2 border-dark" 
            src="https://via.placeholder.com/40" 
            alt="Avatar 3" 
          />
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm border-2 border-dark">
            +3
          </div>
        </div>
      </div>

      {/* Icons and info */}
      <div className="flex items-center justify-between text-primary mb-4">
        <div className="flex space-x-4">
          <div className="flex items-center space-x-1">
            <span>📝 23</span>
          </div>

          <div className="flex items-center space-x-1">
            <span>⏰ 03:23:20</span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative h-2 rounded-full bg-ligth mb-2">
        <div className="absolute top-0 left-0 h-2 rounded-full bg-dark" style={{ width: '40%' }}></div>
      </div>
      
      {/* Estimated time */}
      <div className="text-primary text-sm mt-4 flex w-full justify-between">
        <p> 15.03.2022 8:00 - 15.03.2023 9:00 </p>
        <Button variant="contained" color="primary">View Task</Button>
      </div>
    </div>
    </ThemeProvider>
  );
};
