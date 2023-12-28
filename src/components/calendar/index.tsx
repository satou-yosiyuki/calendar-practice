import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Calendar: React.FC = () => {
  {
    // const handleContextMenu = React.useCallback(
    //   (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    //     const element = document.getElementsByClassName("fc-highlight")[0];
    //     if (e.target === element) {
    //       // コンテキストメニューヒュ時
    //     }
    //   }
    // );

    // React.useEffect(() => {
    //   document.addEventListener("contextmenu", (event) => {
    //     event.preventDefault();
    //   });
    // }, []);

    return (
      <div
      // onContextMenu={handleContextMenu
      >
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
      </div>
    );
  }
};

export default Calendar;
