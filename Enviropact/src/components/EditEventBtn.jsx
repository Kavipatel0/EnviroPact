import React, { useState } from 'react';
import { Button, Modal, DatePicker, TimePicker, Input } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import './CreateEventBtn.css';
import { addCreatedEventToUser, addEvent, addUserToEvent } from '../auth/firestore';
import { getAuth } from 'firebase/auth';
import { runes } from 'runes2';
import { editEvent } from '../auth/firestore';

// Assuming you have an updateEvent function in your firestore.js file
const EditEventBtn = ({ passedUniqueId, passedTitle, passedOrganization, passedDescription, passedLocation, passedDate, passedTime, onEventUpdated, postNotification }) => {
    console.log('Passed Unique ID:', passedUniqueId);
    console.log('Passed Title:', passedTitle);
    console.log('Passed Organization:', passedOrganization);
    console.log('Passed Description:', passedDescription);
    console.log('Passed Location:', passedLocation);
    console.log('Passed Date:', passedDate);
    console.log('Passed Time:', passedTime);
  // Modal Open/Close
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [title, setTitle] = useState(passedTitle || ''); // Initialize with existing data or empty string
  const [organization, setOrganization] = useState(passedOrganization || '');
  const [description, setDescription] = useState(passedDescription || '');
  const [location, setLocation] = useState(passedLocation || '');
  const [date, setDate] = useState(passedDate ? dayjs(passedDate) : null);
  const [time, setTime] = useState(passedTime ? dayjs(passedTime, 'H:mm A') : null);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    setConfirmLoading(true);
    try {
        const auth = getAuth();
        const owner = auth.currentUser.uid;
        
        const combinedDateTime = dayjs(date).set('hour', time.hour()).set('minute', time.minute());
        
        const date1 = combinedDateTime.format('YYYY-MM-DD');
        const time1 = combinedDateTime.format('HH:mm A');

        // Other logs...

        await editEvent(passedUniqueId, title, organization, description, location, date1, time1);

        if (onEventUpdated) {
            onEventUpdated(); // Call the function to update event list
            postNotification('bottomRight', "Event Updated!", `Event "${title}" has been updated!`);
        }
        
        setOpen(false);
        setConfirmLoading(false);
    } catch (error) {
        console.error('Error updating event:', error);
        setConfirmLoading(false); // Make sure to reset loading state in case of error
    }
};

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  const onDateChange = (date) => {
    setDate(date);
  };

  const onTimeChange = (time) => {
    setTime(time);
  };

  return (
    <>
      <Button type="primary" color='default' variant='filled' onClick={showModal}>
        Edit Event
      </Button>
      <Modal
        title="Edit Event"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        centered
        okText="Confirm"
        cancelButtonProps={{
          style: {
            borderRadius: '4px',
            width: '100px',
          }
        }}
        okButtonProps={{
          style: {
            borderRadius: '4px',
            width: '100px',
          },
        }}
      >
        <p className='input-title'>Title</p>
        <Input
          id='title' 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          count={{
            show: true,
            max: 40,
            strategy: (txt) => runes(txt).length,
            exceedFormatter: (txt, { max }) => runes(txt).slice(0, max).join(''),
          }}
        />
        
        <p className='input-title'>Organization</p>
        <Input
          id='organization' 
          value={organization} 
          onChange={(e) => setOrganization(e.target.value)}
          count={{
            show: true,
            max: 40,
            strategy: (txt) => runes(txt).length,
            exceedFormatter: (txt, { max }) => runes(txt).slice(0, max).join(''),
          }}
        />
        
        <p className='input-title'>Description</p>
        <Input
          id='description' 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
          count={{
            show: true,
            max: 350,
            strategy: (txt) => runes(txt).length,
            exceedFormatter: (txt, { max }) => runes(txt).slice(0, max).join(''),
          }}
        />
        
        <p className='input-title'>Location</p>
        <Input
          id='location' 
          value={location} 
          onChange={(e) => setLocation(e.target.value)}
          count={{
            show: true,
            max: 30,
            strategy: (txt) => runes(txt).length,
            exceedFormatter: (txt, { max }) => runes(txt).slice(0, max).join(''),
          }}
        />
        
        <p className='input-title'>Date & Time</p>
        <div style={{ display: "flex", gap: "20px" }}>
          <DatePicker
            className='internal-text'
            id='date-picker'
            format="MM/DD/YY"
            onChange={onDateChange}
            value={date} // Set the value to the current date
            style={{ padding: '10px', border: '1px solid #d9d9d9', borderRadius: '4px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
          />
          <TimePicker
            onChange={onTimeChange}
            format="HH:mm:ss"
            value={time} // Set the value to the current time
            defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
            style={{ padding: '10px', border: '1px solid #d9d9d9', borderRadius: '4px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
          />
        </div>
      </Modal>
    </>
  );
};

export default EditEventBtn;

