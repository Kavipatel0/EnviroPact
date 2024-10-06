import React, { useState } from 'react';
import { Button, Modal, DatePicker, TimePicker, Input } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import './CreateEventBtn.css';
import { addEvent } from '../auth/firestore';


const CreateEventBtn = () => {

    // Modal Open/Close
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [organization, setOrganization] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);



  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);

      console.log('Title:', title);
      console.log('Organization:', organization);
      console.log('Description:', description);
      console.log('Location:', location);
      const combinedDateTime = dayjs(date).set('hour', time.hour()).set('minute', time.minute());
      console.log('Date:', combinedDateTime.format('YYYY-MM-DD'));
      console.log('Time:', combinedDateTime.format('HH:mm:ss'));
      let date1 = combinedDateTime.format('YYYY-MM-DD');
      let time1 = combinedDateTime.format('HH:mm:ss');


       addEvent(title, organization, description, location, date1, time1);
    }, 2000);

  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  const onDateChange = (date) => {
    setDate(date);
  }

  const onTimeChange = (time) => {
    setTime(time);
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create Event
      </Button>
      <Modal
        title="Create Event"
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

        <Input id='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="" />
        
        <p className='input-title'>Organization</p>
        
        <Input id='organization' value={organization} onChange={(e) => setOrganization(e.target.value)} placeholder="" />
        
        <p className='input-title'>Description</p>
        <Input id='description' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="" />
        <p className='input-title'>Location</p>
        <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="" />
        <p className='input-title'>Date & Time</p>
        <div style={{display:"flex", gap: "20px"}}>
        <DatePicker
            className='internal-text'
            id='date-picker'
            format="MM/DD/YY"
            onChange={onDateChange}
            style={{ padding: '10px', border: '1px solid #d9d9d9', borderRadius: '4px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
          />
          <TimePicker
            onChange={onTimeChange}
            format="HH:mm:ss"
            defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
            style={{ padding: '10px', border: '1px solid #d9d9d9', borderRadius: '4px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
          />
        </div>
      </Modal>
    </>
  );
};
export default CreateEventBtn;