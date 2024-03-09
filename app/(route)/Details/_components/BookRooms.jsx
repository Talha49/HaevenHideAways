"use client";
import globalApi from "@/app/_utils/globalApi";
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const BookRooms = ({ rooms }) => {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState();
  const [selectedTime, setSelectedTime] = useState("");
  const [roomNo, setRoomNo] = useState();
  const [selectedRoom, setSelectedRoom] = useState("");
  const [note, setNote] = useState("");

  const { user } = useKindeBrowserClient();

  useEffect(() => {
    getTime();
    getRoom();
  }, []);

  const getTime = () => {
    const timelist = [];

    for (let i = 9; i <= 12; i++) {
      timelist.push({
        time: `${i}:00 AM`,
      });
      timelist.push({
        time: `${i}:30 PM`,
      });
    }

    for (let i = 1; i <= 9; i++) {
      timelist.push({
        time: `${i}:00 PM`,
      });
      timelist.push({
        time: `${i}:30 PM`,
      });
    }

    setTimeSlot(timelist);
  };

  const getRoom = () => {
    const roomList = [];

    for (let i = 101; i <= 111; i++) {
      roomList.push({
        room: `${i}`,
      });
    }

    for (let i = 201; i <= 220; i++) {
      roomList.push({
        room: `${i}`,
      });
    }

    setRoomNo(roomList);
  };

  const saveBookings = () => {
    const data = {
      data: {
        UserName: user.given_name + " " + user.family_name,
        Email: user.email,
        Time: selectedTime,
        Date: date,
        Note: note,
        Room: selectedRoom,
        rooms: rooms.id,
      },
    };

    globalApi.BookRooms(data).then((resp) => {
      console.log(resp); 
      if (resp) {

        globalApi.sendEmail(data).then(resp => {
          console.log(resp);
        })
        toast("Booking Confirm On Your Name !");
      }
      else {
        toast("Booking Fail On Your Name")
      }
    });

    console.log(data);
  };

  const isPastDay = (day) => {
    return day <= new Date();
  };
  return (
    <div className="p-5">
      <Dialog>
        <DialogTrigger>Book Room</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Wanna Grab Your Room?</DialogTitle>
            <DialogDescription>
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Calendar */}
                <div className="flex flex-col items-baseline mt-5 gap-3">
                  <h2 className="flex gap-2 items-center">
                    <FaCalendarAlt className="h-5 w-5 text-purple-600" dis />
                    Set Date
                  </h2>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={isPastDay}
                    className="rounded-md border"
                  />
                </div>

                {/* Time Slot */}
                <div className="mt-3 md:mt-0">
                  <h2 className="flex gap-2 items-center mb-3">
                    <FaClock className="text-primary h-5 w-5" />
                    Select Time Slot
                  </h2>
                  <div className="grid grid-cols-3 gap-2 border rounded-lg p-3 overflow-y-auto max-h-40">
                    {timeSlot?.map((item, index) => (
                      <h2
                        key={index}
                        onClick={() => setSelectedTime(item.time)}
                        className={`p-2 border cursor-pointer text-center hover:bg-primary hover:text-white rounded-full ${
                          item.time === selectedTime &&
                          "bg-purple-400 text-white"
                        }`}
                      >
                        {item.time}
                      </h2>
                    ))}
                  </div>
                  <div className="mt-3">
                    <h2 className="flex gap-2 items-center mb-3">
                      <FaClock className="text-primary h-5 w-5" />
                      Select Room No
                    </h2>
                    <div className="grid grid-cols-3 gap-2 border rounded-lg p-3 overflow-y-auto max-h-40">
                      {roomNo?.map((room, index) => (
                        <h2
                          key={index}
                          onClick={() => setSelectedRoom(room.room)}
                          className={`p-2 border cursor-pointer text-center hover:bg-primary hover:text-white rounded-full ${
                            room.room === selectedRoom &&
                            "bg-purple-400 text-white"
                          }`}
                        >
                          {room.room}
                        </h2>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Select Room No */}
              </div>
              <Textarea
                className="mt-3"
                placeholder="Note"
                onChange={(e) => setNote(e.target.value)}
              />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              <>
                <Button
                  type="button"
                  className="text-red-500 border-red-500"
                  variant="outline"
                >
                  Close
                </Button>
                <Button
                  type="button"
                  className=" border-red-50"
                  variant="outline"
                  disabled={!(date && selectedTime)}
                  onClick={() => saveBookings()}
                >
                  Submit
                </Button>
              </>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookRooms;
